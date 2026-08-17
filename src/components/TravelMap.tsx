'use client'

import { useEffect, useRef, useState, useCallback, forwardRef, useImperativeHandle } from 'react'
import maplibregl, { Map as MLMap, Marker } from 'maplibre-gl'
import { ROUTE, STOPS, DRIVE_END_INDEX, JOURNEY_BOUNDS, type LngLat } from '@/lib/journey'

/**
 * TravelMap — a REAL interactive 3D map, not a fake.
 *
 * Base imagery: Esri World Imagery (satellite, keyless).
 * 3D terrain: AWS "terrarium" DEM tiles decoded by MapLibre's raster-dem
 * source, giving genuine elevation so tilt/pitch shows real Himalayan relief.
 * The journey route + stop markers are drawn as real GeoJSON layers.
 *
 * If terrain tiles fail to load, the map degrades to flat satellite instead
 * of faking relief.
 */

export interface MapHandle {
  flyToStop: (index: number) => void
  frameJourney: () => void
  setRouteProgress: (t: number) => void // 0..1 how much of the line is drawn
}

interface TravelMapProps {
  onReady?: () => void
  interactive?: boolean
  className?: string
}

const STYLE: maplibregl.StyleSpecification = {
  version: 8,
  glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
  sources: {
    satellite: {
      type: 'raster',
      tiles: [
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      ],
      tileSize: 256,
      maxzoom: 19,
      attribution:
        'Imagery © Esri, Maxar, Earthstar Geographics · Terrain: Mapzen/AWS · Roads © OpenStreetMap',
    },
    terrainDem: {
      type: 'raster-dem',
      tiles: ['https://elevation-tiles-prod.s3.amazonaws.com/terrarium/{z}/{x}/{y}.png'],
      tileSize: 256,
      maxzoom: 13,
      encoding: 'terrarium',
    },
    labels: {
      type: 'raster',
      tiles: [
        'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
      ],
      tileSize: 256,
      maxzoom: 19,
    },
  },
  layers: [
    { id: 'bg', type: 'background', paint: { 'background-color': '#07090c' } },
    { id: 'satellite', type: 'raster', source: 'satellite', paint: { 'raster-saturation': -0.12, 'raster-contrast': 0.05 } },
    { id: 'labels', type: 'raster', source: 'labels', paint: { 'raster-opacity': 0.55 } },
  ],
  terrain: { source: 'terrainDem', exaggeration: 1.8 },
}

const TravelMap = forwardRef<MapHandle, TravelMapProps>(function TravelMap(
  { onReady, interactive = false, className },
  ref,
) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<MLMap | null>(null)
  const markersRef = useRef<Marker[]>([])
  const [loaded, setLoaded] = useState(false)

  // Build the drawn-progress line as a slice of the route.
  const setRouteProgress = useCallback((t: number) => {
    const map = mapRef.current
    if (!map || !map.getSource('route-progress')) return
    const clamped = Math.max(0, Math.min(1, t))
    const n = Math.max(2, Math.floor(ROUTE.length * clamped))
    const coords = ROUTE.slice(0, n)
    ;(map.getSource('route-progress') as maplibregl.GeoJSONSource).setData({
      type: 'Feature',
      properties: {},
      geometry: { type: 'LineString', coordinates: coords },
    })
  }, [])

  const flyToStop = useCallback((index: number) => {
    const map = mapRef.current
    const stop = STOPS[index]
    if (!map || !stop) return
    map.flyTo({
      center: stop.coord,
      zoom: stop.zoom,
      pitch: stop.pitch,
      bearing: stop.bearing,
      duration: 3000,
      essential: true,
      curve: 1.5,
    })
  }, [])

  const frameJourney = useCallback(() => {
    const map = mapRef.current
    if (!map) return
    map.fitBounds(JOURNEY_BOUNDS as [LngLat, LngLat], {
      padding: { top: 110, bottom: 140, left: 70, right: 70 },
      pitch: 56,
      bearing: -12,
      duration: 2800,
    })
  }, [])

  useImperativeHandle(ref, () => ({ flyToStop, frameJourney, setRouteProgress }), [
    flyToStop,
    frameJourney,
    setRouteProgress,
  ])

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: STYLE,
      center: STOPS[0].coord,
      zoom: 9.2,
      pitch: 50,
      bearing: 15,
      attributionControl: { compact: true },
      interactive,
      maxZoom: 15,
      minZoom: 4,
      maxPitch: 82,
    })
    mapRef.current = map

    map.on('load', () => {
      // Atmospheric sky so a tilted horizon reads as sky, not black.
      // NB: no aggressive fog — fog-ground-blend darkens the terrain toward black.
      try {
        map.setSky({
          'sky-color': '#12283f',
          'sky-horizon-blend': 0.7,
          'horizon-color': '#4a6884',
          'horizon-fog-blend': 0.5,
          'fog-color': '#3a4a5c',
          'fog-ground-blend': 0.02,
        })
      } catch {
        // older maplibre without setSky — degrade silently to dark background
      }

      // Full route (faint) + drawn progress (bright amber) + trek (dashed)
      map.addSource('route-full', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: { type: 'LineString', coordinates: ROUTE.slice(0, DRIVE_END_INDEX + 1) },
        },
      })
      map.addSource('route-trek', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: { type: 'LineString', coordinates: ROUTE.slice(DRIVE_END_INDEX) },
        },
      })
      map.addSource('route-progress', {
        type: 'geojson',
        data: { type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: [ROUTE[0], ROUTE[0]] } },
      })

      map.addLayer({
        id: 'route-full-line',
        type: 'line',
        source: 'route-full',
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': '#ffffff', 'line-opacity': 0.22, 'line-width': 2 },
      })
      map.addLayer({
        id: 'route-trek-line',
        type: 'line',
        source: 'route-trek',
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': '#fda4af', 'line-opacity': 0.7, 'line-width': 2, 'line-dasharray': [1.5, 1.5] },
      })
      map.addLayer({
        id: 'route-progress-glow',
        type: 'line',
        source: 'route-progress',
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': '#f59e0b', 'line-width': 11, 'line-opacity': 0.28, 'line-blur': 6 },
      })
      map.addLayer({
        id: 'route-progress-line',
        type: 'line',
        source: 'route-progress',
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: {
          'line-color': '#fbbf24',
          'line-width': 4.5,
        },
      })

      // Markers for each stop
      STOPS.forEach((stop) => {
        const el = document.createElement('div')
        el.className = 'tm-marker'
        if (stop.kind === 'summit') el.dataset.summit = 'true'
        const marker = new maplibregl.Marker({ element: el })
          .setLngLat(stop.coord)
          .addTo(map)
        markersRef.current.push(marker)
      })

      setLoaded(true)
      onReady?.()
    })

    return () => {
      markersRef.current.forEach((m) => m.remove())
      markersRef.current = []
      map.remove()
      mapRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interactive])

  return (
    <div className={className} ref={containerRef} aria-hidden="true" data-loaded={loaded} />
  )
})

export default TravelMap

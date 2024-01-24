import maplibregl from 'maplibre-gl';
import { useEffect, useRef } from 'react';
import Map, {
  NavigationControl,
  Marker,
  ScaleControl,
  MapRef,
} from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import './MapComponent.scss';

type MapProps = {
  point?: string;
};

function MapComponent({ point }: MapProps) {
  const KEY = process.env.API_KEY_MAP;
  const longValue = Number(point?.split(' ')[0]);
  const latValue = Number(point?.split(' ')[1]);
  const mapRef = useRef<MapRef>();

  useEffect(() => {
    if (point) {
      mapRef?.current?.flyTo({ center: [longValue, latValue], duration: 2000 });
    }
  }, [point]);

  const initialViewState = {
    latitude: latValue,
    longitude: longValue,
    zoom: 14,
    bearing: 0,
    pitch: 0,
  };

  return (
    <div className="map-component">
      <Map
        ref={mapRef}
        mapLib={maplibregl}
        initialViewState={initialViewState}
        style={{ width: '100%', height: '400px' }}
        mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${KEY}`}
      >
        <ScaleControl />
        <NavigationControl position="top-left" />
        {point && (
          <Marker longitude={longValue} latitude={latValue} color="red" />
        )}
      </Map>
    </div>
  );
}

export default MapComponent;

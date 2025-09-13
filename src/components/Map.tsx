import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

type Station = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  status: string;
  value: string;
};

type MapProps = {
  stations: Station[];
};

const center: [number, number] = [20.5937, 78.9629]; // India center

// Fix default icon issue in Leaflet + React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function Map({ stations }: MapProps) {
  return (
    <MapContainer center={center} zoom={5} style={{ height: "100%", width: "100%" }}>
      {/* Base map layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
      />

      {/* Markers for stations */}
      {stations.map((station) => (
        <Marker key={station.id} position={[station.lat, station.lng]}>
          <Popup>
            <b>{station.name}</b> <br />
            Status: {station.status} <br />
            Value: {station.value}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

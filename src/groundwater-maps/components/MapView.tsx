import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Map } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// ✅ Fix Leaflet marker icons in React
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadowUrl from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// ✅ Example station data
const stations = [
  { id: 1, name: "Station 1", lat: 20.5937, lng: 78.9629, status: "Active" },
  { id: 2, name: "Station 2", lat: 28.7041, lng: 77.1025, status: "Warning" },
  { id: 3, name: "Station 3", lat: 19.0760, lng: 72.8777, status: "Critical" },
];

export default function MapView() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Map className="h-5 w-5 text-primary" />
          <span>Ground Water Map View</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Interactive map showing groundwater monitoring stations
        </p>
      </CardHeader>

      <CardContent>
        <div className="relative h-80 rounded-lg overflow-hidden border">
          {/* ✅ Leaflet Map */}
          <MapContainer
            center={[20.5937, 78.9629]} // Center of India
            zoom={5}
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {stations.map((station) => (
              <Marker key={station.id} position={[station.lat, station.lng]}>
                <Popup>
                  <strong>{station.name}</strong>
                  <br />
                  Status: {station.status}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Map from "../../components/Map";

const stations = [
  { id: 1, name: "Station 1", lat: 20.5937, lng: 78.9629, status: "active", value: "145" },
  { id: 2, name: "Station 2", lat: 28.7041, lng: 77.1025, status: "warning", value: "173" },
  { id: 3, name: "Station 3", lat: 19.0760, lng: 72.8777, status: "active", value: "219" },
  { id: 4, name: "Station 4", lat: 13.0827, lng: 80.2707, status: "critical", value: "689" },
];

export default function MonitoringMap() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-primary" />
          <CardTitle>Real-time Monitoring Stations</CardTitle>
        </div>
        <p className="text-sm text-muted-foreground">
          Interactive map showing groundwater monitoring stations across India
        </p>
      </CardHeader>

      <CardContent>
        <div className="relative h-96 rounded-lg border">
          <Map stations={stations} />
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-muted-foreground">Active Stations</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-orange-500"></div>
            <span className="text-sm text-muted-foreground">Warning Level</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <span className="text-sm text-muted-foreground">Critical Level</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

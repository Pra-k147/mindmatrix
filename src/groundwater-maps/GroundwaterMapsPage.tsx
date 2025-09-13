import FiltersPanel from "./components/FiltersPanel";
import MapView from "./components/MapView";
import DataSummary from "./components/DataSummary";

export default function GroundwaterMapsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Ground Water Monitoring
        </h1>
        <p className="text-muted-foreground">
          Real-time groundwater data visualization system
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <FiltersPanel />
        <div className="lg:col-span-3 space-y-6">
          <MapView />
          <DataSummary />
        </div>
      </div>
    </div>
  );
}
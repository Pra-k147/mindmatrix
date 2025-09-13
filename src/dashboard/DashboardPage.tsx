import MetricCards from "./components/MetricCards";
import MonitoringMap from "./components/MonitoringMap";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Groundwater Monitoring Dashboard
        </h1>
        <p className="text-muted-foreground">
          Real-time groundwater level monitoring and data management system
        </p>
      </div>

      <MetricCards />
      <MonitoringMap />
    </div>
  );
}
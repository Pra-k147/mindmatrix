import { BarChart3 } from "lucide-react";

export default function InsightsHeader() {
  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
          <BarChart3 className="h-6 w-6 text-primary-foreground" />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Groundwater Insights
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real-time analytics and predictive insights for groundwater management
        </p>
      </div>
    </div>
  );
}
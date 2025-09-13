import { Database } from "lucide-react";

export default function PortalHeader() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
          <Database className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            IN-GRES Portal Integration
          </h1>
          <p className="text-muted-foreground">
            National Groundwater Estimation and Standardized Data Management
          </p>
        </div>
      </div>
    </div>
  );
}
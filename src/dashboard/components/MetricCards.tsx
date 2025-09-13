import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Database, 
  BarChart3, 
  Globe,
  TrendingUp,
  AlertTriangle
} from "lucide-react";

const metrics = [
  {
    title: "Digital Water Level Recorders with Telemetry",
    value: "4,369",
    subtitle: "Real-time updates",
    change: "+12% from last month",
    changeType: "positive" as const,
    icon: Activity,
  },
  {
    title: "Ground Water Quality",
    value: "29,626",
    subtitle: "Quality monitoring points",
    change: "Real-time updates",
    changeType: "neutral" as const,
    icon: Database,
  },
  {
    title: "Manual Water Level Measurement",
    value: "42,538",
    subtitle: "Manual monitoring stations",
    change: "100% coverage",
    changeType: "positive" as const,
    icon: BarChart3,
  },
  {
    title: "Ground Water Exploration",
    value: "6,977",
    subtitle: "Active exploration sites",
    change: "Critical monitoring",
    changeType: "warning" as const,
    icon: Globe,
  },
];

export default function MetricCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        
        return (
          <Card key={metric.title} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <Icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-1">
                {metric.value}
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                {metric.subtitle}
              </p>
              <Badge 
                variant={
                  metric.changeType === "positive" 
                    ? "default" 
                    : metric.changeType === "warning"
                    ? "secondary"
                    : "outline"
                }
                className={
                  metric.changeType === "positive"
                    ? "bg-success text-success-foreground"
                    : metric.changeType === "warning"
                    ? "bg-warning text-warning-foreground"
                    : ""
                }
              >
                {metric.changeType === "positive" && <TrendingUp className="h-3 w-3 mr-1" />}
                {metric.changeType === "warning" && <AlertTriangle className="h-3 w-3 mr-1" />}
                {metric.change}
              </Badge>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Gauge, 
  Activity, 
  AlertTriangle,
  TrendingUp,
  TrendingDown
} from "lucide-react";

const summaryData = [
  {
    title: "Active Stations",
    value: "24",
    change: "+2 from last week",
    changeType: "positive" as const,
    icon: MapPin,
    color: "text-primary",
  },
  {
    title: "Average Water Level",
    value: "15.2m",
    change: "-0.5m from last week",
    changeType: "negative" as const,
    icon: Gauge,
    color: "text-orange-500",
  },
  {
    title: "Quality Index",
    value: "7.8/10",
    change: "0 from last week",
    changeType: "neutral" as const,
    icon: Activity,
    color: "text-blue-500",
  },
  {
    title: "Alert Zones",
    value: "3",
    change: "+1 from last week",
    changeType: "warning" as const,
    icon: AlertTriangle,
    color: "text-destructive",
  },
];

export default function DataSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Summary</CardTitle>
        <p className="text-sm text-muted-foreground">
          Key metrics and performance indicators
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {summaryData.map((item) => {
            const Icon = item.icon;
            
            return (
              <div key={item.title} className="text-center space-y-2 p-4 rounded-lg bg-accent/30">
                <div className="flex items-center justify-center">
                  <Icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.title}
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {item.value}
                  </p>
                  <Badge
                    variant={
                      item.changeType === "positive"
                        ? "default"
                        : item.changeType === "negative"
                        ? "destructive"
                        : item.changeType === "warning"
                        ? "secondary"
                        : "outline"
                    }
                    className={`text-xs ${
                      item.changeType === "positive"
                        ? "bg-success text-success-foreground"
                        : item.changeType === "warning"
                        ? "bg-warning text-warning-foreground"
                        : ""
                    }`}
                  >
                    {item.changeType === "positive" && <TrendingUp className="h-3 w-3 mr-1" />}
                    {item.changeType === "negative" && <TrendingDown className="h-3 w-3 mr-1" />}
                    {item.changeType === "warning" && <AlertTriangle className="h-3 w-3 mr-1" />}
                    {item.change}
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
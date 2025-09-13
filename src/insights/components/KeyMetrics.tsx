import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingDown, 
  TrendingUp, 
  Activity, 
  AlertTriangle,
  Minus
} from "lucide-react";

const metrics = [
  {
    title: "Water Level Trends",
    value: "-2.3m",
    subtitle: "Average decline across monitored wells",
    change: "14%",
    changeType: "negative" as const,
    icon: TrendingDown,
  },
  {
    title: "Recharge Rate",
    value: "45mm/yr",
    subtitle: "Annual groundwater recharge",
    change: "8%",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
  {
    title: "Active Monitoring Points",
    value: "1,247",
    subtitle: "Real-time telemetry stations",
    change: "2%",
    changeType: "positive" as const,
    icon: Activity,
  },
  {
    title: "Critical Zones",
    value: "23",
    subtitle: "Areas requiring immediate attention",
    change: "5%",
    changeType: "warning" as const,
    icon: AlertTriangle,
  },
];

export default function KeyMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        
        return (
          <Card key={metric.title} className="text-center">
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-center">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                  metric.changeType === 'negative' 
                    ? 'bg-destructive/10' 
                    : metric.changeType === 'warning'
                    ? 'bg-warning/10'
                    : 'bg-success/10'
                }`}>
                  <Icon className={`h-6 w-6 ${
                    metric.changeType === 'negative' 
                      ? 'text-destructive' 
                      : metric.changeType === 'warning'
                      ? 'text-warning'
                      : 'text-success'
                  }`} />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl font-bold text-foreground">
                  {metric.value}
                </div>
                <h3 className="font-medium text-foreground">
                  {metric.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {metric.subtitle}
                </p>
              </div>
              
              <Badge 
                variant="outline"
                className={
                  metric.changeType === "negative"
                    ? "border-destructive/50 text-destructive"
                    : metric.changeType === "warning"
                    ? "border-warning/50 text-warning"
                    : "border-success/50 text-success"
                }
              >
                {metric.changeType === "positive" ? "+" : metric.changeType === "negative" ? "-" : ""}
                {metric.change}
              </Badge>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
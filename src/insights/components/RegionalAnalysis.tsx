import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const regions = [
  {
    name: "Northern Plains",
    status: "Good",
    level: 85,
    trend: "Stable",
    statusColor: "bg-success text-success-foreground"
  },
  {
    name: "Western Ghats",
    status: "Moderate",
    level: 65,
    trend: "Declining",
    statusColor: "bg-warning text-warning-foreground"
  },
  {
    name: "Deccan Plateau",
    status: "Critical",
    level: 30,
    trend: "Declining",
    statusColor: "bg-destructive text-destructive-foreground"
  },
  {
    name: "Coastal Areas",
    status: "Good",
    level: 78,
    trend: "Improving",
    statusColor: "bg-success text-success-foreground"
  },
];

export default function RegionalAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-primary" />
          <span>Regional Water Levels</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {regions.map((region) => (
          <div key={region.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">{region.name}</span>
                  <Badge className={region.statusColor}>
                    {region.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span>{region.level}%</span>
                  <span>Trend: {region.trend}</span>
                </div>
              </div>
            </div>
            <Progress 
              value={region.level} 
              className={`h-2 ${
                region.level > 70 
                  ? '[&>div]:bg-success' 
                  : region.level > 40
                  ? '[&>div]:bg-warning'
                  : '[&>div]:bg-destructive'
              }`}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
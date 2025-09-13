import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, 
  Database, 
  Users, 
  TrendingUp
} from "lucide-react";

const stats = [
  {
    title: "States Connected",
    value: "28",
    subtitle: "Integration active",
    icon: Building2,
    color: "text-primary"
  },
  {
    title: "Data Processed",
    value: "5.2TB",
    subtitle: "Monthly volume",
    icon: Database,
    color: "text-blue-500"
  },
  {
    title: "Active Users",
    value: "1,247",
    subtitle: "Across platforms",
    icon: Users,
    color: "text-green-500"
  },
  {
    title: "System Uptime",
    value: "99.7%",
    subtitle: "Availability",
    icon: TrendingUp,
    color: "text-orange-500"
  },
];

export default function IntegrationStats() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">
        Integration Statistics
      </h2>
      <p className="text-sm text-muted-foreground">
        Current status of data integration across different platforms
      </p>
      
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          
          return (
            <Card key={stat.title} className="text-center">
              <CardHeader className="pb-2">
                <div className="flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/30">
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-1">
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  {stat.subtitle}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
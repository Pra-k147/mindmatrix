import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  BarChart3, 
  Map, 
  Activity,
  Users,
  ExternalLink
} from "lucide-react";

const dashboards = [
  {
    title: "National Groundwater Assessment",
    description: "Comprehensive groundwater resource assessment across India",
    users: "245 users",
    status: "Active",
    icon: Globe,
    statusColor: "bg-success text-success-foreground"
  },
  {
    title: "State-wise Water Balance",
    description: "Regional water balance and availability analysis",
    users: "189 users",
    status: "Updated",
    icon: BarChart3,
    statusColor: "bg-primary text-primary-foreground"
  },
  {
    title: "Aquifer Mapping Dashboard",
    description: "Detailed aquifer characterization and mapping",
    users: "156 users",
    status: "Active",
    icon: Map,
    statusColor: "bg-success text-success-foreground"
  },
  {
    title: "Recharge & Extraction Analysis",
    description: "Groundwater recharge and extraction patterns",
    users: "203 users",
    status: "Processing",
    icon: Activity,
    statusColor: "bg-warning text-warning-foreground"
  },
];

export default function DashboardGrid() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">
        National Groundwater Estimation Dashboards
      </h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {dashboards.map((dashboard) => {
          const Icon = dashboard.icon;
          
          return (
            <Card key={dashboard.title} className="relative overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base font-semibold">
                        {dashboard.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {dashboard.description}
                      </p>
                    </div>
                  </div>
                  <Badge className={dashboard.statusColor}>
                    {dashboard.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{dashboard.users}</span>
                  </div>
                  <Button size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Access Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
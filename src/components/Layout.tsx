import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Map, 
  Calculator, 
  Database, 
  BarChart3, 
  HelpCircle,
  Droplets
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Groundwater Maps", href: "/groundwater-maps", icon: Map },
  { name: "IN-GRES Portal", href: "/ingres-portal", icon: Database },
  { name: "HMPI Calculator", href: "/hmpi-calculator", icon: Calculator },
  { name: "Insights", href: "/insights", icon: BarChart3 },
  { name: "Support", href: "/support", icon: HelpCircle },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="border-b border-border bg-card shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Droplets className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-foreground">
                  Groundwater Monitoring System
                </h1>
                <p className="text-sm text-muted-foreground">
                  Real-time groundwater data visualization system
                </p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="hidden sm:flex items-center space-x-2">
              <div className="flex h-2 w-2 rounded-full bg-success"></div>
              <span className="text-sm text-muted-foreground">
                Last Updated: 12/09/2025, 19:02:46
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-2 border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap transition-colors",
                    isActive
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Video, 
  Book, 
  GraduationCap,
  ExternalLink
} from "lucide-react";

const quickLinks = [
  {
    title: "User Manual (PDF)",
    description: "Comprehensive guide for system usage",
    icon: FileText,
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    icon: Video,
  },
  {
    title: "API Documentation",
    description: "Technical documentation for developers",
    icon: Book,
  },
  {
    title: "Training Resources",
    description: "Learning materials and courses",
    icon: GraduationCap,
  },
];

export default function QuickLinks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Links</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {quickLinks.map((link) => {
          const Icon = link.icon;
          
          return (
            <Button
              key={link.title}
              variant="ghost"
              className="w-full justify-start h-auto p-3"
            >
              <div className="flex items-start space-x-3 text-left">
                <Icon className="h-4 w-4 mt-0.5 text-primary" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{link.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {link.description}
                  </p>
                </div>
                <ExternalLink className="h-3 w-3 text-muted-foreground" />
              </div>
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
}
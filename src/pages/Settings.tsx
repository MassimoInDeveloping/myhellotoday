import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    toast({
      title: "Theme Updated",
      description: `Switched to ${isDarkMode ? "light" : "dark"} mode`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your preferences</p>
      </div>
      
      <Card className="p-6 glass">
        <h3 className="font-semibold mb-4">Appearance Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Theme</p>
              <p className="text-sm text-muted-foreground">
                Choose between dark and light mode
              </p>
            </div>
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleTheme}
              aria-label="Toggle theme"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
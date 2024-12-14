import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/hooks/useLanguage";
import { Settings as SettingsIcon, Globe } from "lucide-react";

const languages = {
  en: {
    theme: "Theme",
    themeDesc: "Choose between dark and light mode",
    language: "Language",
    languageDesc: "Choose your preferred language",
    settings: "Settings",
    managePreferences: "Manage your preferences",
    themeUpdated: "Theme Updated",
    switchedTo: "Switched to",
    languageUpdated: "Language Updated",
    switchedToLang: "Language changed successfully"
  },
  it: {
    theme: "Tema",
    themeDesc: "Scegli tra modalità chiara e scura",
    language: "Lingua",
    languageDesc: "Scegli la tua lingua preferita",
    settings: "Impostazioni",
    managePreferences: "Gestisci le tue preferenze",
    themeUpdated: "Tema Aggiornato",
    switchedTo: "Passato a",
    languageUpdated: "Lingua Aggiornata",
    switchedToLang: "Lingua cambiata con successo"
  }
};

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { toast } = useToast();
  const t = languages[language];

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    toast({
      title: t.themeUpdated,
      description: `${t.switchedTo} ${isDarkMode ? "light" : "dark"} mode`,
    });
  };

  const changeLanguage = (newLang: "en" | "it") => {
    setLanguage(newLang);
    toast({
      title: t.languageUpdated,
      description: t.switchedToLang,
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <SettingsIcon className="h-6 w-6" />
          <h1 className="text-3xl font-bold tracking-tight">{t.settings}</h1>
        </div>
        <p className="text-muted-foreground">{t.managePreferences}</p>
      </div>
      
      <Card className="p-6 glass">
        <h3 className="font-semibold mb-4">{t.theme}</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">{t.theme}</p>
              <p className="text-sm text-muted-foreground">
                {t.themeDesc}
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

      <Card className="p-6 glass">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="h-5 w-5" />
          <h3 className="font-semibold">{t.language}</h3>
        </div>
        <div className="space-y-4">
          <RadioGroup
            defaultValue={language}
            onValueChange={(value) => changeLanguage(value as "en" | "it")}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="en" id="en" />
              <Label htmlFor="en">English</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="it" id="it" />
              <Label htmlFor="it">Italiano</Label>
            </div>
          </RadioGroup>
        </div>
      </Card>
    </div>
  );
}
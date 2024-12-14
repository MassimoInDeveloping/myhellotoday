import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

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
    switchedToLang: "Switched to Italian"
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
    switchedToLang: "Passato all'italiano"
  }
};

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<"en" | "it">("en");
  const { toast } = useToast();
  const t = languages[language];

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
    const savedLang = localStorage.getItem("language") as "en" | "it";
    if (savedLang) setLanguage(savedLang);
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
    localStorage.setItem("language", newLang);
    toast({
      title: t.languageUpdated,
      description: t.switchedToLang,
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{t.settings}</h1>
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
        <h3 className="font-semibold mb-4">{t.language}</h3>
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
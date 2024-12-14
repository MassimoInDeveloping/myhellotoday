import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

export default function Diary() {
  const date = new Date();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Diary</h1>
        <p className="text-muted-foreground">Track your daily activities</p>
      </div>
      
      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <Card className="p-4 glass">
          <Calendar
            mode="single"
            selected={date}
            className="rounded-md"
          />
        </Card>
        
        <Card className="p-6 glass">
          <h3 className="font-semibold mb-4">Today's Entry</h3>
          <div className="prose max-w-none">
            <p className="text-muted-foreground">
              Select a date to view or create an entry
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
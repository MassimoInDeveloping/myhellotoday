import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
        <p className="text-muted-foreground">
          Here's an overview of your activity
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6 hover-scale glass">
          <h3 className="font-semibold mb-2">Recent Books</h3>
          <p className="text-sm text-muted-foreground">
            Continue where you left off
          </p>
        </Card>
        
        <Card className="p-6 hover-scale glass">
          <h3 className="font-semibold mb-2">Today's Schedule</h3>
          <p className="text-sm text-muted-foreground">
            You have 2 entries today
          </p>
        </Card>
        
        <Card className="p-6 hover-scale glass">
          <h3 className="font-semibold mb-2">Quick Actions</h3>
          <p className="text-sm text-muted-foreground">
            Add new entry or book note
          </p>
        </Card>
      </div>
    </div>
  );
}
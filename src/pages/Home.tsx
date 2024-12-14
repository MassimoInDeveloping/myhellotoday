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

        <Card className="p-6 hover-scale glass md:col-span-2">
          <h3 className="font-semibold mb-4">History Summary</h3>
          <div className="space-y-2">
            <p className="text-sm">
              <strong>Current Topic:</strong> World War II
            </p>
            <p className="text-sm text-muted-foreground">
              Key events: D-Day invasion, Battle of Stalingrad, and the Pacific Theater.
              Next week's focus will be on the post-war period and the beginning of the Cold War.
            </p>
          </div>
        </Card>

        <Card className="p-6 hover-scale glass">
          <h3 className="font-semibold mb-4">Geography Overview</h3>
          <div className="space-y-2">
            <p className="text-sm">
              <strong>Current Region:</strong> South America
            </p>
            <p className="text-sm text-muted-foreground">
              Studying the Amazon Rainforest ecosystem and its impact on global climate.
              Next up: The Andes Mountains and their geological formation.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
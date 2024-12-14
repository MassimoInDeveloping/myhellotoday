import { Card } from "@/components/ui/card";

export default function Book() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">My Book</h1>
        <p className="text-muted-foreground">Manage your book collection</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6 hover-scale glass">
          <h3 className="font-semibold mb-2">Current Reading</h3>
          <p className="text-sm text-muted-foreground">
            Track your reading progress
          </p>
        </Card>
        
        <Card className="p-6 hover-scale glass">
          <h3 className="font-semibold mb-2">Reading List</h3>
          <p className="text-sm text-muted-foreground">
            Books you want to read
          </p>
        </Card>
      </div>
    </div>
  );
}
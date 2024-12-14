import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function Diary() {
  const date = new Date();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

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
        
        <div className="space-y-6">
          <Card className="p-6 glass">
            <h3 className="font-semibold mb-4">Today's Entry</h3>
            <div className="prose max-w-none">
              <p className="text-muted-foreground">
                Select a date to view or create an entry
              </p>
            </div>
          </Card>

          <Card className="p-6 glass">
            <h3 className="font-semibold mb-4">TODO List</h3>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Add a new task..."
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addTodo()}
                />
                <Button onClick={addTodo}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-2">
                {todos.map((todo) => (
                  <div key={todo.id} className="flex items-center gap-2">
                    <Checkbox
                      checked={todo.completed}
                      onCheckedChange={() => toggleTodo(todo.id)}
                    />
                    <span className={todo.completed ? "line-through text-muted-foreground" : ""}>
                      {todo.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
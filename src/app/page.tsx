"use client"

import { useState } from "react";
import { useTaskContext } from "../app/context/task-context";
import Link from 'next/link';
import TaskFilter from "../app/components/task-filter";
import TaskList from "../app/components/task-list";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  
  const { tasks } = useTaskContext();
  const [status, setStatus] = useState<"Pendiente" | "Completada" | "Todas">("Todas");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredTasks = tasks.filter(task => {
    const matchesStatus = status === "Todas" || task.status === status;
    const matchesSearchQuery = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearchQuery;
  });

  return (
    <div className="container max-w-[500px] w-full mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Gestión de tareas</h1>

      <Input
        type="text"
        placeholder="Buscar por título"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full mb-4 p-2 border rounded-md"
      />
      
      <TaskFilter status={status} setStatus={setStatus} />

      <TaskList tasks={filteredTasks} />
      
      <Link href="/create-task">
        <Button type="button">Nueva tarea</Button>
      </Link>
    </div>
  );
}
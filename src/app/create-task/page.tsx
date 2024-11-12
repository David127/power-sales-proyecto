"use client"

import { useRouter } from 'next/navigation';
import TaskForm from '../components/task-form';
import { useTaskContext } from "../context/task-context"; 
import Link from 'next/link';
import { Button } from "@/components/ui/button"

export default function CreateTaskPage() {
  const router = useRouter();
  const { addTask } = useTaskContext();

  const handleTaskSubmit = (newTask: { title: string; description: string; status: "Pendiente" | "Completada"; dueDate: string }) => {
    addTask(newTask);
    router.push('/');
  };

  return (
    <div className="container max-w-[500px] w-full mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Crear Nueva Tarea</h1>
      <Link href="/">
        <Button type="button" className="mb-4">Volver</Button>
      </Link>
      <TaskForm onSubmit={handleTaskSubmit} />
    </div>
  );
}

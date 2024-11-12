import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns";

type TaskFormProps = {
  onSubmit: (task: { title: string; description: string; status: "Pendiente" | "Completada", dueDate: string }) => void;
  initialTask?: { title: string; description: string; status: "Pendiente" | "Completada"; dueDate: string };
};

export default function TaskForm({ onSubmit, initialTask }: TaskFormProps) {
  const [title, setTitle] = useState(initialTask?.title || "");
  const [description, setDescription] = useState(initialTask?.description || "");
  const [status, setStatus] = useState<"Pendiente" | "Completada">(initialTask?.status || "Pendiente");
  const [dueDate, setDueDate] = useState<Date>(initialTask?.dueDate ? new Date(initialTask.dueDate) : new Date());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      status,
      dueDate: dueDate ? format(dueDate, "yyyy-MM-dd") : "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <Input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full mb-2 p-2 border"
        required
      />
      <Textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block w-full mb-2 p-2 border"
        required
      />
      <Select value={status} onValueChange={(value) => setStatus(value as "Pendiente" | "Completada")}>
        <SelectTrigger className="w-full border p-2 rounded-md">
          <span>{status}</span>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Pendiente">Pendiente</SelectItem>
          <SelectItem value="Completada">Completada</SelectItem>
        </SelectContent>
      </Select>
      <Calendar
        mode="single"
        selected={dueDate}
        onSelect={(date: any) => setDueDate(date)}
        className="mt-2 border rounded-md"
      />
      {dueDate && (
        <p className="text-sm text-gray-500 mt-1">Fecha seleccionada: {format(dueDate, "yyyy-MM-dd")}</p>
      )}
      <Button type="submit" className="mt-4">
        Agregar Tarea
      </Button>
    </form>
  );
}

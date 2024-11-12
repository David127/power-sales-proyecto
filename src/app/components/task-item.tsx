import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useTaskContext } from "../context/task-context";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectItem, SelectTrigger, SelectContent } from "@/components/ui/select";
import { Task } from "../types/tareas.type";

type TaskItemProps = {
  task: Task;
};

export default function TaskItem({ task }: TaskItemProps) {
  const { editTask, deleteTask } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
    status: task.status,
    dueDate: task.dueDate,
  });

  const handleEditChange = (field: keyof typeof editedTask, value: string) => {
    setEditedTask((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveEdit = () => {
    editTask(task.id, editedTask);
    setIsEditing(false);
  };

  return (
    <Card className="border p-4 mb-2">
      {isEditing ? (
        <div>
          <Input
            type="text"
            value={editedTask.title}
            onChange={(e) => handleEditChange("title", e.target.value)}
            className="block w-full mb-2 p-2 border"
          />
          <Textarea
            value={editedTask.description}
            onChange={(e) => handleEditChange("description", e.target.value)}
            className="block w-full mb-2 p-2 border"
          />
          <Select
            value={editedTask.status}
            onValueChange={(value) => handleEditChange("status", value as "Pendiente" | "Completada")}
          >
            <SelectTrigger>
              <span>{editedTask.status}</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pendiente">Pendiente</SelectItem>
              <SelectItem value="Completada">Completada</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="date"
            value={editedTask.dueDate}
            onChange={(e) => handleEditChange("dueDate", e.target.value)}
            className="block w-full mb-2 mt-2 p-2 border"
          />
          <Button onClick={handleSaveEdit}>
            Guardar
          </Button>
          <Button onClick={() => setIsEditing(false)} className="ml-4">
            Cancelar
          </Button>
        </div>
      ) : (
        <div>
          <h3 className="font-bold">{task.title}</h3>
          <p>{task.description}</p>
          <p><strong>Estado:</strong> {task.status}</p>
          {task.dueDate && <p className="mb-4"><strong>Fecha de vencimiento:</strong> {task.dueDate}</p>}
          <Button onClick={() => setIsEditing(true)}>
            Editar
          </Button>
          <Button onClick={() => deleteTask(task.id)} className="ml-4">
            Eliminar
          </Button>
        </div>
      )}
    </Card>
  );
}
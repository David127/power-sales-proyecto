export type Task = {
  id: string;
  title: string;
  description: string;
  status: "Pendiente" | "Completada";
  dueDate: string;
};
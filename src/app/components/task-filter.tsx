import { Select, SelectItem, SelectTrigger, SelectContent } from "@/components/ui/select"

type TaskFilterProps = {
  status: "Pendiente" | "Completada" | "Todas";
  setStatus: (status: "Pendiente" | "Completada" | "Todas") => void;
};

export default function TaskFilter({ status, setStatus }: TaskFilterProps) {
  return (
    <div className="mb-4">
      <Select value={status} onValueChange={(value) => setStatus(value as "Pendiente" | "Completada" | "Todas")}>
        <SelectTrigger className="w-full border p-2 rounded-md">
          <span>{status}</span>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Todas">Todas</SelectItem>
          <SelectItem value="Pendiente">Pendiente</SelectItem>
          <SelectItem value="Completada">Completada</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

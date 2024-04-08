import { ClipboardCheck } from "lucide-react";

export function Clipboard() {
  return (
    <div className="flex items-center flex-col border-gray-400 rounded-[8px] px-16 py-0 gap-1">
      <ClipboardCheck />
      <div className="flex flex-col text-gray-300 text-center leading-[21px]">
        <p className="font-bold">Você ainda não tem tarefas cadastradas</p>
        <p className="font-bold">Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}

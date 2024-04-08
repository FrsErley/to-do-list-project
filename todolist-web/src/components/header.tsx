import { ClipboardPenLine } from "lucide-react";

export function Header() {
  return (
    <header className="bg-[#0d0d0d] h-48 px-5 flex items-center justify-center relative overflow-hidden">
      <div>
        <ClipboardPenLine className="mt-2 mb-7" size={100} color="#2DAC5C" />
      </div>
    </header>
  );
}

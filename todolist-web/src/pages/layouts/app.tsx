import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="bg-[#1A1A1A]">
        <Outlet />
      </div>
    </div>
  );
}

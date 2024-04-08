import { ClipboardPenLine } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="grid min-h-screen md:grid-cols-2 antialiased">
      <div className="flex flex-col h-2/6 md:h-full justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <Link to="/sign-in">
          <div className="flex items-center gap-3 text-xl text-foreground justify-center md:justify-normal lg:justify-normal">
            <ClipboardPenLine color="#2DAC5C" className="h-8 w-8" />
            <span className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              To{" "}
              <span className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Do
              </span>{" "}
              List
            </span>
          </div>
        </Link>
      </div>
      <div className="relative flex flex-col items-center justify-normal md:justify-center">
        <Outlet />
      </div>
    </div>
  );
}

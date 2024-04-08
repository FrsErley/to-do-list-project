import "@/globals.css";
import { TodoList } from "./components/toDoList";
import { useEffect, useState } from "react";
import { userLogged } from "@/api/getLoggedUser";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const loggedUser = async () => {
      const response = (await userLogged()) ?? "";
      if (response) {
        setUserId(response);
        return;
      }

      navigate("/sign-in", { replace: true });
    };

    loggedUser();
  }, []);

  return (
    <div className="h-screen">
      <div className="my-0 mx-auto bg-[#1A1A1A] px-5 pb-5 lg:w-[46rem] flex-grow">
        <TodoList userId={userId} />
      </div>
    </div>
  );
}

export default Home;

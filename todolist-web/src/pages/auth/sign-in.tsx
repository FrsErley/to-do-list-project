import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import "@/globals.css";
import { api } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const SignInSchema = z.object({
  username: z
    .string()
    .min(4, { message: "Username não pode ter menos de 4 caracteres" })
    .max(15),
  password: z.string().min(4).max(15),
});

type SignInForm = z.infer<typeof SignInSchema>;

export const SignIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(SignInSchema),
    mode: "onBlur",
  });

  async function handleSignIn(data: SignInForm) {
    try {
      const response = await api.post("/auth/sign-in", {
        username: data.username,
        password: data.password,
      });
      if (response.status === 201) {
        const { token } = response.data;
        if (token) {
          localStorage.setItem("token", token);
          navigate("/");
        }
      }
    } catch {
      await toast({
        variant: "destructive",
        title: "Falha ao fazer login",
        description: "Verifique se os dados estão corretos",
      });
    }
  }

  return (
    <div className="p-8">
      <div className="flex w-[350px] lg:w-full flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Registre suas Atividades
          </h1>
          <p className="text-sm text-foreground">
            Organize suas ideias com a gente!
          </p>
        </div>

        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
          <div className="space-y-2">
            <Input
              id="username"
              type="text"
              {...register("username")}
              placeholder="Login"
            />
            {errors.username && (
              <p className="text-sm text-destructive">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Input
              id="password"
              type="password"
              {...register("password")}
              placeholder="Senha"
            />
            {errors.password && (
              <p className="text-sm text-destructive">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button className="w-full" type="submit">
            Fazer Login
          </Button>
          <Button asChild className="w-full text-sky-500" variant="outline">
            <Link to="/sign-up">Criar Conta</Link>
          </Button>
        </form>
      </div>
    </div>
  );
};

import "@/globals.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const SignUpSchema = z.object({
  email: z
    .string()
    .min(6, { message: "Username não pode ter menos de 6 caracteres" })
    .max(20, { message: "Username não pode ter mais de 15 caracteres" }),
  username: z
    .string()
    .min(4, { message: "Username não pode ter menos de 4 caracteres" })
    .max(15, { message: "Username não pode ter mais de 15 caracteres" }),
  password: z.string().min(4).max(15),
});

type SignUpForm = z.infer<typeof SignUpSchema>;

export const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(SignUpSchema),
    mode: "onBlur",
  });

  async function handleSignUp(data: SignUpForm) {
    try {
      const response = await api.post("/auth/sign-up", {
        email: data.email,
        username: data.username,
        password: data.password,
      });

      if (response.status === 201) {
        await toast({
          title: "Usuário criado com sucesso",
          description: "Você foi redirecionado para a tela de login",
        });
        navigate("/sign-in");
      }
    } catch {
      await toast({
        variant: "destructive",
        title: "Falha ao criar usuário",
        description: "Verifique se os dados atendem aos requisitos",
      });
    }
  }

  return (
    <div className="p-8">
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Faça seu Cadastro
          </h1>
        </div>

        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
          <div className="space-y-2">
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
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
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
  );
};

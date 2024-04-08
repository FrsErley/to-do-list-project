import { JwtPayload, jwtDecode } from "jwt-decode";

export interface JwtPayloadProps extends JwtPayload {
  userId: string;
  username: string;
  exp: number;
  iat: number;
}

export const userLogged = async () => {
  const token = localStorage.getItem("token");

  if (token) {
    const { userId } = jwtDecode<JwtPayloadProps>(token);
    return userId;
  }
};

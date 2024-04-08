export interface TaskProps {
  _id: string;
  userId: string;
}

export interface UserProps {
  username: string;
  email: string;
  password: string;
  tasks?: any[];
}

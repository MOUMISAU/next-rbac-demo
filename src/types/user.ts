export type Role = "ADMIN" | "USER";

export interface User {
  id: string;
  name: string;
  role: Role;
}

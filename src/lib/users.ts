import { User } from "@/types/user";

const users: User[] = [
  { id: "1", name: "Alice", role: "ADMIN" },
  { id: "2", name: "Bob", role: "USER" },
];

export function getCurrentUser(userId?: string): User | null {
  if (!userId) return null;
  return users.find((u) => u.id === userId) || null;
}

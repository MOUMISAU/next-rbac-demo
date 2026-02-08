import { Role } from "@/types/user";

export function requireRole(
  userRole: Role,
  allowedRoles: Role[]
): boolean {
  return allowedRoles.includes(userRole);
}

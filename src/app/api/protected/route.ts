import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/users";
import { requireRole } from "@/lib/auth";

export async function GET(request: Request) {
  const userId = request.headers.get("x-user-id");

  const user = getCurrentUser(userId || undefined);

  if (!user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const hasAccess = requireRole(user.role, ["ADMIN"]);

  if (!hasAccess) {
    return NextResponse.json(
      { error: "Forbidden" },
      { status: 403 }
    );
  }

  return NextResponse.json({
    message: "Protected data",
    user,
  });
}

import type { LoginPayload, User } from "../types/type";
import { users as dummyUsers } from "../constants/dummyData";


export async function login({ email, password }: LoginPayload): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 700));
  const found = dummyUsers.find(
    (u) => u.email === email && u.password_hash === password
  );
  if (found) {
    const user: User = {
      name: found.email.split("@")[0],
      email: found.email,
      role: found.role,
      created_at: found.created_at,
      verified: found.verified,
    };
    localStorage.setItem("tutornova_user", JSON.stringify(user));
    return user;
  }
  throw new Error("Invalid credentials");
}

export async function logout(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  localStorage.removeItem("tutornova_user");
  return;
}

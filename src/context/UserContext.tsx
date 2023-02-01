import { api } from "../lib/axios";
import { createContext } from "use-context-selector";
import { ReactNode, useEffect, useState } from "react";

interface User {
  avatar_url: string;
  bio: string;
  login: string;
  company?: string;
  followers: string;
  html_url: string;
}

interface UserProvaiderProps {
  children: ReactNode;
}

interface UserContextType {
  user: User;
  // fetchUser: (query?: string) => Promise<void>;
}

export const UserContext = createContext({} as UserContextType);

export function UserProvaider({ children }: UserProvaiderProps) {
  const [user, setUser] = useState<User | any>({});

  async function fecthUser(query?: string) {
    const response = await api.get("voncardoso", {
      params: {
        q: query,
      },
    });
    setUser(response.data);
  }

  useEffect(() => {
    fecthUser();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

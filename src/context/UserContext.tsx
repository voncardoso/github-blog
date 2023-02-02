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
  FechIssues: (query?: string) => Promise<void>
  issues: []
  // fetchUser: (query?: string) => Promise<void>;
}

export const UserContext = createContext({} as UserContextType);

export function UserProvaider({ children }: UserProvaiderProps) {
  const [user, setUser] = useState<User | any>({});
  const [issues, setIssues] = useState<any>([])

  async function fecthUser() {
    const response = await api.get("users/voncardoso");
    setUser(response.data);
  }

  async function FechIssues(query?: string) {
    const response = await api.get('search/issues', {
      params: {
        q:`${query} repo:voncardoso/github-blog`
      }
    })
    setIssues(response.data.items)
  }


  useEffect(() => {
    fecthUser();
    FechIssues("")
  }, []);

  return (
    <UserContext.Provider value={{ user, FechIssues, issues }}>{children}</UserContext.Provider>
  );
}

import { Header } from "../../components/Header";
import { Issues } from "./components/Issues";
import { Profile } from "./components/Profile";
import { Seach } from "./components/Seach";
import { useContextSelector } from "use-context-selector";
import { HomeContainer, HomeContent } from "./style";
import { UserContext } from "../../context/UserContext";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
interface userProps {
  avatar_url: string;
  bio: string;
  login: string;
  company?: string;
  followers: string;
}
interface UserContextType {
  user: userProps[];
  // fetchUser: (query?: string) => Promise<void>;
}
export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}
export function Home() {
  const [issues, setIssues] = useState<IPost[]>([]);
  const user = useContextSelector(UserContext, (context) => {
    return context.user;
  });

  const FechIssues = useCallback(
    async (query: string = "") => {
      try {
        const response = await api.get("search/issues", {
          params: {
            q: `${query} repo:voncardoso/github-blog`,
          },
        });
        setIssues(response.data.items);
      } catch {
      } finally {
      }
    },
    [issues]
  );

  useEffect(() => {
    FechIssues();
  }, []);
  console.log("issues", issues);
  return (
    <HomeContainer>
      <Header />
      <HomeContent>
        <Profile
          avatar_url={user.avatar_url}
          bio={user.bio}
          login={user.login}
          followers={user.followers}
          company={user.company}
          html_url={user.html_url}
        />
        <Seach FetchIssues={FechIssues} issuesLength={issues.length} />
        <Issues post={issues} />
      </HomeContent>
    </HomeContainer>
  );
}

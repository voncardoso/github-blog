import { Header } from "../../components/Header";
import { Issues } from "./components/Issues";
import { Profile } from "./components/Profile";
import { Seach } from "./components/Seach";
import { useContextSelector } from "use-context-selector";
import { HomeContainer, HomeContent } from "./style";
import { UserContext } from "../../context/UserContext";
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
export function Home() {
  const user = useContextSelector(UserContext, (context) => {
    return context.user;
  });

  
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
        <Seach />
        <Issues />
      </HomeContent>
    </HomeContainer>
  );
}

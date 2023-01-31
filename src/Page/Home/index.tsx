import { Header } from "../../components/Header";
import { Profile } from "./components/Profile";
import { Seach } from "./components/Seach";
import { HomeContainer, HomeContent } from "./style";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <HomeContent>
        <Profile />
        <Seach />
      </HomeContent>
    </HomeContainer>
  );
}

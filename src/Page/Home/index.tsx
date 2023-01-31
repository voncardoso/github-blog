import { Header } from "../../components/Header";
import { Profile } from "./components/Profile";
import { HomeContainer } from "./style";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Profile />
    </HomeContainer>
  );
}

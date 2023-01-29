import { EffectStyle, HeaderContainer, LogoStyle } from "./style";
import Logo from "../../assets/Logo.png";
import Effect from "../../assets/effect.svg";

export function Header() {
  return (
    <HeaderContainer>
      <LogoStyle src={Logo} alt="" />
    </HeaderContainer>
  );
}

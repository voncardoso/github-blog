import styled from "styled-components";
import BackgroundImg from "../../assets/effect.png";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 0px 134px 0px;
  background: ${(props) => props.theme["base-profile"]};
  background-image: url(${BackgroundImg}),
    linear-gradient(
      180deg,
      ${(props) => props.theme["base-profile"]},
      rgba(20, 88, 156, 0.1)
    );
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
`;

export const LogoStyle = styled.img`
  max-width: 148px;
  width: 100%;
`;

export const EffectStyle = styled.img`
  width: 100%;
  &:last-child {
    transform: rotate(180deg);
  }
`;

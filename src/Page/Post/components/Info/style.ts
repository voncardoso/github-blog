import styled from "styled-components";

import styled from "styled-components";

export const ProfileContainer = styled.div`
  position: relative;
  top: -100px;
  padding: 32px 32px 32px 40px;
  background: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;

  display: flex;
  align-items: center;
  gap: 32px;

  img {
    max-width: 148px;
    width: 100%;
    border-radius: 8px;
  }
`;

export const ProfileInfo = styled.div`
  width: 100%;
`;

export const ProfileInfoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
  h2 {
    font-size: 1.5rem;
    line-height: 31.2px;
  }

  a {
    font-size: 0.75rem;
    text-decoration: none;
    color: ${(props) => props.theme["blue"]};
  }
  svg {
    color: ${(props) => props.theme["blue"]};
    cursor: pointer;
    margin-left: 8px;
  }
`;

export const ProfileInfoFooter = styled.header`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 24px;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

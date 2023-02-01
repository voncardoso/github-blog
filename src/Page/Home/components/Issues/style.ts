import styled from "styled-components";

export const IssuesContainer = styled.ul`
  margin-top: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 32px;
  margin-bottom: 234px;
  li {
    list-style: none;
    background: ${(props) => props.theme["base-post"]};
    border-radius: 10px;
    padding: 2rem;
    cursor: pointer;
    header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 20px;
      h2 {
        max-width: 283px;
        width: 100%;
        font-size: 1.25rem;
      }

      time {
        font-size: 0.875rem;
        color: ${(props) => props.theme["base-span"]};
        line-height: 160%;
        padding-top: 4px;
      }
    }

    p {
      font-size: 1rem;
      color: ${(props) => props.theme["base-text"]};
    }

    &:hover {
      border: 2px solid ${(props) => props.theme["base-label"]};
    }
  }
`;

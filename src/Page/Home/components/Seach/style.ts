import styled from "styled-components";

export const SeachContainer = styled.form`
  position: relative;
  top: -20px;
`;

export const SeachHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  strong {
    font-size: 1.125rem;
    line-height: 160%;
    margin-bottom: 12px;
    font-weight: 700;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const SeachInput = styled.input`
  background: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-text"]};
  border: 1px solid ${(props) => props.theme["base-border"]};
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;

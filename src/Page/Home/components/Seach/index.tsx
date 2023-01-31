import { SeachContainer, SeachHeader, SeachInput } from "./style";

export function Seach() {
  return (
    <SeachContainer>
      <SeachHeader>
        <strong>Publicações</strong>
        <p>6 publicações</p>
      </SeachHeader>
      <SeachInput placeholder="Buscar conteúdo" type="text" />
    </SeachContainer>
  );
}

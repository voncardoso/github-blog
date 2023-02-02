import { useState } from "react";
import { useContextSelector } from "use-context-selector";
import { UserContext } from "../../../../context/UserContext";
import { SeachContainer, SeachHeader, SeachInput } from "./style";

export function Seach() {
  const [seach, setSeach] = useState("")
  const fechIssues = useContextSelector(UserContext, (context) => {
    return context.FechIssues;
  });

  
  fechIssues(seach)

  return (
    <SeachContainer>
      <SeachHeader>
        <strong>Publicações</strong>
        <p>6 publicações</p>
      </SeachHeader>
      <SeachInput placeholder="Buscar conteúdo" type="text" onChange={(event) => setSeach(event.target.value)}/>
    </SeachContainer>
  );
}

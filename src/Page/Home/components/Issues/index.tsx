import { useContextSelector } from "use-context-selector";
import { UserContext } from "../../../../context/UserContext";
import { IssuesContainer } from "./style";

export function Issues() {
  const issues = useContextSelector(UserContext, (context) => {
    return context.issues;
  });

  console.log(issues)
  
  return (
    <IssuesContainer>
      {issues.map((issue: any) =>{
        console.log(issue)
        return(
          <li key={issue.id}>
          <header>
            <h2>{issue.title}</h2>
  
            <time>há 6 dia</time>
          </header>
  
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in
          </p>
        </li>
        )
      })}
    </IssuesContainer>
  );
}

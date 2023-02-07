import { useContextSelector } from "use-context-selector";
import { UserContext } from "../../../../context/UserContext";
import { IssuesContainer } from "./style";

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export function Issues({ post }: IPost[] | any) {
  console.log("post", post);
  return (
    <IssuesContainer>
      {post.map((issue: any) => {
        return (
          <li key={issue.id}>
            <header>
              <h2>{issue.title}</h2>

              <time>há 6 dia</time>
            </header>

            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in
            </p>
          </li>
        );
      })}
    </IssuesContainer>
  );
}

import { useNavigate } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import { UserContext } from "../../../../context/UserContext";
import { IssuesContainer } from "./style";

export interface IPost {
  id: string;
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
  const navigate = useNavigate();
  console.log("post", post);

  function handleItemPost(issue: number) {
    navigate(`post/${issue}`);
  }

  return (
    <IssuesContainer>
      {post.map((issue: IPost) => {
        return (
          <li
            key={issue.id}
            onClick={() => {
              handleItemPost(issue.number);
            }}
          >
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

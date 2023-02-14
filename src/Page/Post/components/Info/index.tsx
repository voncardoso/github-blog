import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { api } from "../../../../lib/axios";
import {
  ProfileContainer,
  ProfileInfo,
  ProfileInfoFooter,
  ProfileInfoHeader,
} from "./style";

export function Info() {
  const [issueItem, setIssueItem] = useState([]);
  const [id, setId] = useState();

  const params = useParams();

  useEffect(() => {
    FechIssuesItem(params.id);
  }, []);

  const FechIssuesItem = useCallback(async (query: string = "") => {
    try {
      const response = await api.get(
        `repos/voncardoso/github-blog/issues/${query}`
      );
      setIssueItem(response.data);
    } catch {
    } finally {
    }
  }, []);

  console.log(issueItem);
  return (
    <ProfileContainer>
      <ProfileInfo>
        <ProfileInfoHeader>
          <h2>Cameron Williamson</h2>
          <div>
            <NavLink to={``}>
              GIT HUB{" "}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
            </NavLink>
          </div>
        </ProfileInfoHeader>
        <p>tese</p>
        <ProfileInfoFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            teste
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            teste
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            teste seguidores
          </span>
        </ProfileInfoFooter>
      </ProfileInfo>
    </ProfileContainer>
  );
}

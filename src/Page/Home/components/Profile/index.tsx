import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  ProfileContainer,
  ProfileInfoHeader,
  ProfileInfo,
  ProfileInfoFooter,
} from "./style";
import Avatar from "../../../../assets/avatar.png";
import { NavLink } from "react-router-dom";

interface userProps {
  avatar_url: string;
  bio: string;
  login?: string;
  company?: string;
  followers?: string;
  html_url: string;
}

export function Profile({
  avatar_url,
  bio,
  login,
  company,
  followers,
  html_url,
}: userProps) {
  return (
    <ProfileContainer>
      <img src={avatar_url} alt="" />

      <ProfileInfo>
        <ProfileInfoHeader>
          <h2>Cameron Williamson</h2>
          <div>
            <NavLink to={`${html_url}`}>
              GIT HUB{" "}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
            </NavLink>
          </div>
        </ProfileInfoHeader>
        <p>{bio}</p>
        <ProfileInfoFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            {company}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {followers} seguidores
          </span>
        </ProfileInfoFooter>
      </ProfileInfo>
    </ProfileContainer>
  );
}

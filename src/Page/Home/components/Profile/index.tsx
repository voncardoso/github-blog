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

export function Profile() {
  return (
    <ProfileContainer>
      <img src={Avatar} alt="" />

      <ProfileInfo>
        <ProfileInfoHeader>
          <h2>Cameron Williamson</h2>
          <div>
            <NavLink to="">
              GIT HUB{" "}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
            </NavLink>
          </div>
        </ProfileInfoHeader>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ProfileInfoFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </span>
        </ProfileInfoFooter>
      </ProfileInfo>
    </ProfileContainer>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { ProfileContainer } from "./style";

export function Profile() {
  return (
    <ProfileContainer>
      <img src="" alt="" />

      <div>
        <h2>Cameron Williamson</h2>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <footer>
          <span>
            <FontAwesomeIcon icon={faCoffee} />
            cameronwll
          </span>
          <span>Rocketseat</span>
          <span>32 seguidores</span>
        </footer>
      </div>
    </ProfileContainer>
  );
}

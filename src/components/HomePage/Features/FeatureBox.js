import SmallButton from "../../Buttons/SmallButton";
import { HashLink } from "react-router-hash-link";

export default function FeatureBox({
  icon,
  featureTitle,
  featureDescription,
  user,
  setShowRegister,
}) {
  return (
    <div className="feature-box flex">
      <div className="feature-icon">{icon}</div>
      <div className="feature-title">{featureTitle}</div>
      {featureDescription}
      {user ? (
        ""
      ) : (
        <HashLink
          smooth
          to="#"
          onClick={() => {
            setShowRegister(true);
          }}
        >
          <SmallButton buttonValue="Sign Up Now!" />
        </HashLink>
      )}
    </div>
  );
}

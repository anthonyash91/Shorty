import { HashLink } from "react-router-hash-link";
import SmallButton from "../../Buttons/SmallButton";

export default function SubFooter({ user, setShowRegister }) {
  return (
    <div id="convinced" className="flex">
      <div id="convinced-container" className={`flex ${user ? "user" : ""}`}>
        {user ? (
          `Thanks for being a Shorty, ${user.name}.`
        ) : (
          <>
            Join our community and become a Shorty.
            <HashLink
              smooth
              to="#"
              onClick={() => {
                setShowRegister(true);
              }}
            >
              <SmallButton buttonValue="Sign Up!" />
            </HashLink>
          </>
        )}
      </div>
    </div>
  );
}

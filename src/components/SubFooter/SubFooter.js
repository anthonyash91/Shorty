import { HashLink } from "react-router-hash-link";

export default function SubFooter({ user, setShowRegister }) {
  return (
    <div id="convinced" className="flex">
      <div id="convinced-container" className={`flex ${user ? "user" : ""}`}>
        {user ? (
          "Thanks for being a Shorty, Shorty."
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
              <button>Sign up</button>
            </HashLink>
          </>
        )}
      </div>
    </div>
  );
}

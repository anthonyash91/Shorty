import { HashLink } from "react-router-hash-link";

export default function SignUpNowButton({ setShowRegister }) {
  return (
    <HashLink
      smooth
      to="#"
      onClick={() => {
        setShowRegister(true);
      }}
    >
      <button>Sign Up Now!</button>
    </HashLink>
  );
}

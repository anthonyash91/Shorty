import SmallButton from "../../../../Buttons/SmallButton";
import { logOut } from "../../../../../utilities/users-service";
import SignUpForm from "../../../../SignUpForm/SignUpForm";
import LoginForm from "../../../../LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";

export default function NavButtons({
  user,
  setUser,
  setShowShortenedUrl,
  setNewUserLink,
  showLogin,
  setShowLogin,
  setShowRegister,
  globalLink,
  showRegister,
  setNewGlobalLink,
}) {
  const navigate = useNavigate();

  return (
    <div id="user-buttons" className="flex">
      {user ? (
        <>
          <SmallButton
            buttonId="login-button"
            buttonClass="login-register"
            buttonFunction={() => {
              logOut();
              setUser("");
              setShowShortenedUrl(false);
              setNewUserLink({ url: "" });
            }}
            buttonValue="Logout"
          />
          <SmallButton
            buttonId="register-button"
            buttonClass="login-register"
            buttonFunction={() => {
              navigate("/u/dashboard");
              setShowShortenedUrl(false);
              setNewUserLink({ url: "" });
            }}
            buttonValue="Dashboard"
          />
        </>
      ) : (
        <>
          <SmallButton
            buttonId="login-button"
            buttonClass={`login-register ${showLogin ? "active" : ""}`}
            buttonFunction={() => {
              setShowLogin(!showLogin);
              setShowRegister(false);
            }}
            buttonValue="Login"
          />
          <SmallButton
            buttonId="register-button"
            buttonClass={`login-register ${showRegister ? "active" : ""}`}
            buttonFunction={() => {
              setShowLogin(false);
              setShowRegister(!showRegister);
            }}
            buttonValue="Sign Up"
          />
        </>
      )}

      <LoginForm
        setUser={setUser}
        showLogin={showLogin}
        setShowShortenedUrl={setShowShortenedUrl}
        setNewGlobalLink={setNewGlobalLink}
      />

      <SignUpForm
        setUser={setUser}
        globalLink={globalLink}
        showRegister={showRegister}
        setShowShortenedUrl={setShowShortenedUrl}
        setNewGlobalLink={setNewGlobalLink}
      />
    </div>
  );
}

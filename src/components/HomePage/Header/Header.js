import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../../../components/SignUpForm/SignUpForm";
import { logOut } from "../../../utilities/users-service";
import { Link } from "react-router-dom";
import LoginForm from "../../../components/LoginForm/LoginForm";

export default function Header({
  user,
  domainName,
  setUser,
  globalLink,
  createGlobalLink,
  newGlobalLink,
  handleChange,
  showShortenedUrl,
  setShowShortenedUrl,
  createUserLink,
  userLink,
  newUserLink,
  setNewUserLink,
  handleUserLinkChange,
  setNewGlobalLink,
  showRegister,
  setShowRegister,
}) {
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="flex">
      <div id="nav-container" className="flex">
        <nav className="flex">
          <div id="logo" className="flex">
            <svg viewBox="0 0 24 24">
              <path
                className="path-white"
                d="M7.72,15.2c1.21.6,1.64,2.34,1,3.89s-2.2,2.31-3.4,1.71-1.64-2.34-1-3.89S6.52,14.6,7.72,15.2Zm1,3.89L16,3"
              ></path>
              <path
                className="path-accent"
                d="M19.68,16.91c.68,1.55.25,3.29-1,3.89s-2.73-.17-3.4-1.71-.25-3.29,1-3.89S19,15.37,19.68,16.91ZM8,3l7.32,16.09"
              ></path>
            </svg>
            SHORTY
          </div>

          <div id="user-buttons" className="flex">
            {user ? (
              <button
                id="login-button"
                className="login-register"
                onClick={() => {
                  logOut();
                  setUser("");
                  setShowShortenedUrl(false);
                  setNewUserLink({ url: "" });
                }}
              >
                Logout
              </button>
            ) : (
              <button
                id="login-button"
                className={`login-register ${showLogin ? "active" : ""}`}
                onClick={() => {
                  setShowLogin(!showLogin);
                  setShowRegister(false);
                }}
              >
                Login
              </button>
            )}

            {user ? (
              <button
                id="register-button"
                className="login-register"
                onClick={() => {
                  navigate("/u/dashboard");
                  setShowShortenedUrl(false);
                  setNewUserLink({ url: "" });
                }}
              >
                Dashboard
              </button>
            ) : (
              <button
                id="register-button"
                className={`login-register ${showRegister ? "active" : ""}`}
                onClick={() => {
                  setShowLogin(false);
                  setShowRegister(!showRegister);
                }}
              >
                Sign Up
              </button>
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
        </nav>
      </div>

      <h1>Shorten Your URLs</h1>
      <h2>
        Have a link you want to share but it's too long? Use SHORTY to shorten
        your URLs and make them easier to share with the world.
      </h2>

      <div id="form-container" className={showShortenedUrl ? "" : "hide"}>
        {user ? (
          <form onSubmit={createUserLink} className="flex">
            <input
              type="url"
              name="url"
              value={newUserLink.url}
              onChange={handleUserLinkChange}
              placeholder="Paste your URL here..."
              required
            />

            <button
              onClick={() => {
                setNewUserLink({
                  ...newUserLink,
                  date: new Date().toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  }),
                });
              }}
            >
              <svg viewBox="0 0 24 24">
                <line
                  className="path-accent"
                  x1="8"
                  y1="12"
                  x2="16"
                  y2="12"
                ></line>
                <path
                  className="path-white"
                  d="M10,9A1,1,0,0,0,9,8H4A1,1,0,0,0,3,9v6a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1"
                ></path>
                <path
                  className="path-white"
                  d="M14,15a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1"
                ></path>
              </svg>
            </button>
          </form>
        ) : (
          <form onSubmit={createGlobalLink} className="flex">
            <input
              type="url"
              name="url"
              value={newGlobalLink.url}
              onChange={handleChange}
              placeholder="Paste your URL here..."
              required
            />

            <button
              onClick={() => {
                setNewGlobalLink({
                  ...newGlobalLink,
                  date: new Date().toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  }),
                });
              }}
            >
              <svg viewBox="0 0 24 24">
                <line
                  className="path-accent"
                  x1="8"
                  y1="12"
                  x2="16"
                  y2="12"
                ></line>
                <path
                  className="path-white"
                  d="M10,9A1,1,0,0,0,9,8H4A1,1,0,0,0,3,9v6a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1"
                ></path>
                <path
                  className="path-white"
                  d="M14,15a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1"
                ></path>
              </svg>
            </button>
          </form>
        )}

        <div
          id="short-link"
          className={`flex ${showShortenedUrl ? "" : "hide"}`}
        >
          <div id="copied-message" className={showCopyMessage ? "" : "hide"}>
            Copied
          </div>
          <input
            value={
              user
                ? `https://${domainName}/${userLink.shortUrl}`
                : `https://${domainName}/${globalLink.shortUrl}`
            }
            className={showCopyMessage ? "highlighted" : ""}
            disabled
          />
          <button
            onClick={() => {
              {
                user
                  ? navigator.clipboard.writeText(
                      `https://${domainName}/${userLink.shortUrl}`
                    )
                  : navigator.clipboard.writeText(
                      `https://${domainName}/${globalLink.shortUrl}`
                    );
              }
              setShowCopyMessage(true);
              setTimeout(() => {
                setShowCopyMessage(false);
              }, 1000);
            }}
          >
            <svg viewBox="0 0 24 24">
              <path className="path-white" d="M7,10V6A1,1,0,0,1,8,5h3"></path>
              <path
                className="path-white"
                d="M17,5h3a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V16"
              ></path>
              <path
                className="path-accent"
                d="M11,7h6V4a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1ZM3.29,12.09,8.2,17H11V14.2L6.09,9.29a1,1,0,0,0-1.4,0l-1.4,1.4A1,1,0,0,0,3.29,12.09Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div id="sign-up-message" className={showShortenedUrl ? "" : "hide"}>
        {user ? (
          <>
            {user.name}, this link has been saved. To manage your links, visit
            the <Link to="/u/dashboard">dashboard</Link>.
          </>
        ) : (
          <>
            Want to save this link and the others you create? Sign up{" "}
            <span
              onClick={() => {
                setShowLogin(false);
                setShowRegister(!showRegister);
              }}
            >
              here
            </span>
            !
          </>
        )}
      </div>
    </header>
  );
}

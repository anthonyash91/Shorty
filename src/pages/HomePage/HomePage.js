import { useState, useEffect } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { logOut } from "../../utilities/users-service";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import Footer from "../../components/Footer/Footer";
import { HashLink } from "react-router-hash-link";

export default function HomePage({
  user,
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
}) {
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showQuestion, setShowQuestion] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <header className="flex">
        <div id="nav-container" className="flex">
          <nav className="flex">
            <div id="logo" className="flex">
              <svg fill="#000000" viewBox="0 0 24 24" class="icon line-color">
                <path
                  id="secondary"
                  d="M7.72,15.2c1.21.6,1.64,2.34,1,3.89s-2.2,2.31-3.4,1.71-1.64-2.34-1-3.89S6.52,14.6,7.72,15.2Zm1,3.89L16,3"
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                  }}
                ></path>
                <path
                  id="primary"
                  d="M19.68,16.91c.68,1.55.25,3.29-1,3.89s-2.73-.17-3.4-1.71-.25-3.29,1-3.89S19,15.37,19.68,16.91ZM8,3l7.32,16.09"
                  style={{
                    fill: "none",
                    stroke: "#18DA8E",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                  }}
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
                    navigate("/dashboard");
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

        <h1>Link Size Matters...</h1>
        <h2>
          Nobody likes a link that's too big. Impress your friends with one
          that's the perfect size.
        </h2>
        {/* <img src="https://assets.codepen.io/8370674/Wave-6.3s-1704px.svg" /> */}
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
                <svg fill="#000000" viewBox="0 0 24 24" class="icon line-color">
                  <line
                    id="secondary"
                    x1="8"
                    y1="12"
                    x2="16"
                    y2="12"
                    style={{
                      fill: "none",
                      stroke: "#18DA8E",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                    }}
                  ></line>
                  <path
                    id="primary"
                    d="M10,9A1,1,0,0,0,9,8H4A1,1,0,0,0,3,9v6a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1"
                    style={{
                      fill: "none",
                      stroke: "#fff",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                    }}
                  ></path>
                  <path
                    id="primary-2"
                    data-name="primary"
                    d="M14,15a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1"
                    style={{
                      fill: "none",
                      stroke: "#fff",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                    }}
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

              <button>
                <svg fill="#000000" viewBox="0 0 24 24" class="icon line-color">
                  <line
                    id="secondary"
                    x1="8"
                    y1="12"
                    x2="16"
                    y2="12"
                    style={{
                      fill: "none",
                      stroke: "#18DA8E",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                    }}
                  ></line>
                  <path
                    id="primary"
                    d="M10,9A1,1,0,0,0,9,8H4A1,1,0,0,0,3,9v6a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1"
                    style={{
                      fill: "none",
                      stroke: "#fff",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                    }}
                  ></path>
                  <path
                    id="primary-2"
                    data-name="primary"
                    d="M14,15a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1"
                    style={{
                      fill: "none",
                      stroke: "#fff",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                    }}
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
                  ? `http://shrl.io/${userLink.shortUrl}`
                  : `http://shrl.io/${globalLink.shortUrl}`
              }
              className={showCopyMessage ? "highlighted" : ""}
              disabled
            />
            <button
              onClick={() => {
                {
                  user
                    ? navigator.clipboard.writeText(
                        `http://shrl.io/${userLink.shortUrl}`
                      )
                    : navigator.clipboard.writeText(
                        `http://shrl.io/${globalLink.shortUrl}`
                      );
                }
                setShowCopyMessage(true);
                setTimeout(() => {
                  setShowCopyMessage(false);
                }, 1000);
              }}
            >
              <svg fill="#000000" viewBox="0 0 24 24" class="icon line-color">
                <path
                  id="primary"
                  d="M7,10V6A1,1,0,0,1,8,5h3"
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                  }}
                ></path>
                <path
                  id="primary-2"
                  data-name="primary"
                  d="M17,5h3a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V16"
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                  }}
                ></path>
                <path
                  id="secondary"
                  d="M11,7h6V4a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1ZM3.29,12.09,8.2,17H11V14.2L6.09,9.29a1,1,0,0,0-1.4,0l-1.4,1.4A1,1,0,0,0,3.29,12.09Z"
                  style={{
                    fill: "none",
                    stroke: "#18DA8E",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                  }}
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

      <main>
        <div id="features" className="flex">
          <div id="features-explaination">
            <span>Sharing is now easier than ever.</span>
            <br />
            Shorty has all the features you need to connect with your friends,
            social media followers, or even the world.
          </div>
          <div id="feature-boxes" className="flex">
            <div className="feature-box flex">
              <div className="feature-icon">
                <svg fill="#000000" viewBox="0 0 24 24" class="icon line-color">
                  <path
                    id="secondary"
                    d="M3.29,16.09,8.2,21H11V18.2L6.09,13.29a1,1,0,0,0-1.4,0l-1.4,1.4A1,1,0,0,0,3.29,16.09Z"
                    style={{
                      fill: "none",
                      stroke: "#0D2A3F",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                    }}
                  ></path>
                  <path
                    id="primary"
                    d="M13,13h3a5,5,0,0,1,5,5v1s-1.55,1.63-6,2"
                    style={{
                      fill: "none",
                      stroke: "#fff",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                    }}
                  ></path>
                  <circle
                    id="primary-2"
                    data-name="primary"
                    cx="13"
                    cy="8"
                    r="5"
                    style={{
                      fill: "none",
                      stroke: "#fff",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                    }}
                  ></circle>
                </svg>
              </div>
              <div className="feature-title">Link-in-bio</div>Personalized
              Link-in-bios make sharing links with friends easy.
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
                  <button>Sign Up Now!</button>
                </HashLink>
              )}
            </div>
            <div className="feature-box flex">
              <div className="feature-icon">
                <svg fill="#000000" viewBox="0 0 24 24" class="icon line-color">
                  <path
                    id="secondary"
                    d="M8,12h8M12,4V3M9,5,8,4m7,1,1-1M12,20v1M9,19,8,20m7-1,1,1"
                    style={{
                      fill: "none",
                      stroke: "#0D2A3F",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                    }}
                  ></path>
                  <path
                    id="primary"
                    d="M10,9A1,1,0,0,0,9,8H4A1,1,0,0,0,3,9v6a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1"
                    style={{
                      fill: "none",
                      stroke: "#fff",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                    }}
                  ></path>
                  <path
                    id="primary-2"
                    data-name="primary"
                    d="M14,15a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1"
                    style={{
                      fill: "none",
                      stroke: "#fff",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                    }}
                  ></path>
                </svg>
              </div>
              <div className="feature-title">Link Management</div>
              Save, track, and organize your links in one convenient place.
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
                  <button>Sign Up Now!</button>
                </HashLink>
              )}
            </div>
            <div className="feature-box flex">
              <div className="feature-icon">
                <svg fill="#000000" viewBox="0 0 24 24" id="qr-code-scan">
                  <path
                    id="secondary"
                    d="M13,11V7h4v4Zm4,6V15H15v2ZM7,13v4h4V13ZM7,7V9H9V7Z"
                    style={{
                      fill: "none",
                      stroke: "#0D2A3F",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                    }}
                  ></path>
                  <path
                    id="primary"
                    d="M21,8V4a1,1,0,0,0-1-1H16"
                    style={{
                      fill: "none",
                      stroke: "#fff",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                    }}
                  ></path>
                  <path
                    id="primary-2"
                    data-name="primary"
                    d="M16,21h4a1,1,0,0,0,1-1V16"
                    style={{
                      fill: "none",
                      stroke: "#fff",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                    }}
                  ></path>
                  <path
                    id="primary-3"
                    data-name="primary"
                    d="M8,3H4A1,1,0,0,0,3,4V8"
                    style={{
                      fill: "none",
                      stroke: "#fff",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                    }}
                  ></path>
                  <path
                    id="primary-4"
                    data-name="primary"
                    d="M3,16v4a1,1,0,0,0,1,1H8"
                    style={{
                      fill: "none",
                      stroke: "#fff",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                    }}
                  ></path>
                </svg>
              </div>
              <div className="feature-title">QR Codes</div>
              Individual QR codes make sharing your links even easier.
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
                  <button>Sign Up Now!</button>
                </HashLink>
              )}
            </div>
          </div>
        </div>

        <div id="faqs-container" className="flex">
          <div id="faqs-header">Frequently Asked Questions</div>

          <div id="faqs">
            <div
              className={`faq-container ${
                showQuestion === "What is a URL shortener" ? "open" : ""
              }`}
            >
              <div className="question flex">
                What is a URL shortener?
                <button
                  onClick={() => {
                    setShowQuestion("What is a URL shortener");
                  }}
                  className={
                    showQuestion === "What is a URL shortener" ? "open" : ""
                  }
                >
                  <svg
                    fill="#000000"
                    viewBox="0 0 24 24"
                    class="icon line-color"
                  >
                    <path
                      id="secondary"
                      d="M11.84,10H4a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h7.84"
                      style={{
                        fill: "none",
                        stroke: "#fff",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                      }}
                    ></path>
                    <path
                      id="primary"
                      d="M11.84,14l-.79,2.66a1,1,0,0,0,1.41,1.2l8.06-5a1.07,1.07,0,0,0,0-1.78l-8.06-5a1,1,0,0,0-1.41,1.2L11.84,10"
                      style={{
                        fill: "none",
                        stroke: "#18DA8E",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                      }}
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="answer">
                A URL shortener is a tool that takes a long and complex URL and
                converts it into a shorter, more manageable URL. This shortened
                URL can then be shared and used instead of the original, long
                URL.{" "}
              </div>
            </div>

            <div
              className={`faq-container ${
                showQuestion === "What is the purpose of a URL shortener"
                  ? "open"
                  : ""
              }`}
            >
              <div className="question flex">
                What is the purpose of a URL shortener?
                <button
                  onClick={() => {
                    setShowQuestion("What is the purpose of a URL shortener");
                  }}
                  className={
                    showQuestion === "What is the purpose of a URL shortener"
                      ? "open"
                      : ""
                  }
                >
                  <svg
                    fill="#000000"
                    viewBox="0 0 24 24"
                    class="icon line-color"
                  >
                    <path
                      id="secondary"
                      d="M11.84,10H4a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h7.84"
                      style={{
                        fill: "none",
                        stroke: "#fff",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                      }}
                    ></path>
                    <path
                      id="primary"
                      d="M11.84,14l-.79,2.66a1,1,0,0,0,1.41,1.2l8.06-5a1.07,1.07,0,0,0,0-1.78l-8.06-5a1,1,0,0,0-1.41,1.2L11.84,10"
                      style={{
                        fill: "none",
                        stroke: "#18DA8E",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                      }}
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="answer">
                The purpose of a URL shortener is to save space and make sharing
                links more convenient, particularly on platforms with character
                limits such as Twitter. When someone clicks on the shortened
                URL, they are redirected to the original, longer URL.{" "}
              </div>
            </div>

            <div
              className={`faq-container ${
                showQuestion === "What are the benefits of a short URL"
                  ? "open"
                  : ""
              }`}
            >
              <div className="question flex">
                What are the benefits of a short URL?
                <button
                  onClick={() => {
                    setShowQuestion("What are the benefits of a short URL");
                  }}
                  className={
                    showQuestion === "What are the benefits of a short URL"
                      ? "open"
                      : ""
                  }
                >
                  <svg
                    fill="#000000"
                    viewBox="0 0 24 24"
                    class="icon line-color"
                  >
                    <path
                      id="secondary"
                      d="M11.84,10H4a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h7.84"
                      style={{
                        fill: "none",
                        stroke: "#fff",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                      }}
                    ></path>
                    <path
                      id="primary"
                      d="M11.84,14l-.79,2.66a1,1,0,0,0,1.41,1.2l8.06-5a1.07,1.07,0,0,0,0-1.78l-8.06-5a1,1,0,0,0-1.41,1.2L11.84,10"
                      style={{
                        fill: "none",
                        stroke: "#18DA8E",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                      }}
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="answer">
                Short URLs take up less space, especially in places with
                character limits such as social media platforms. Short URLs can
                hide the destination of a link, making it more difficult for
                phishing scams and other malicious actors to deceive users.
                Short URLs can be more mobile-friendly, as they are easier to
                type or click on smaller screens.
              </div>
            </div>

            <div
              className={`faq-container ${
                showQuestion === "What is a Link-in-bio" ? "open" : ""
              }`}
            >
              <div className="question flex">
                What is a Link-in-bio?
                <button
                  onClick={() => {
                    setShowQuestion("What is a Link-in-bio");
                  }}
                  className={
                    showQuestion === "What is a Link-in-bio" ? "open" : ""
                  }
                >
                  <svg
                    fill="#000000"
                    viewBox="0 0 24 24"
                    class="icon line-color"
                  >
                    <path
                      id="secondary"
                      d="M11.84,10H4a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h7.84"
                      style={{
                        fill: "none",
                        stroke: "#fff",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                      }}
                    ></path>
                    <path
                      id="primary"
                      d="M11.84,14l-.79,2.66a1,1,0,0,0,1.41,1.2l8.06-5a1.07,1.07,0,0,0,0-1.78l-8.06-5a1,1,0,0,0-1.41,1.2L11.84,10"
                      style={{
                        fill: "none",
                        stroke: "#18DA8E",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                      }}
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="answer">
                A Link-in-bio is a link in your social media profile bio that
                leads to a landing page containing multiple links to content
                relevant to your business or life, like your website, a video,
                or even an affiliate discount link.
              </div>
            </div>

            <div
              className={`faq-container ${
                showQuestion === "Why choose Shorty for short URLs"
                  ? "open"
                  : ""
              }`}
            >
              <div className="question flex">
                Why choose Shorty for short URLs?
                <button
                  onClick={() => {
                    setShowQuestion("Why choose Shorty for short URLs");
                  }}
                  className={
                    showQuestion === "Why choose Shorty for short URLs"
                      ? "open"
                      : ""
                  }
                >
                  <svg
                    fill="#000000"
                    viewBox="0 0 24 24"
                    class="icon line-color"
                  >
                    <path
                      id="secondary"
                      d="M11.84,10H4a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h7.84"
                      style={{
                        fill: "none",
                        stroke: "#fff",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                      }}
                    ></path>
                    <path
                      id="primary"
                      d="M11.84,14l-.79,2.66a1,1,0,0,0,1.41,1.2l8.06-5a1.07,1.07,0,0,0,0-1.78l-8.06-5a1,1,0,0,0-1.41,1.2L11.84,10"
                      style={{
                        fill: "none",
                        stroke: "#18DA8E",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                      }}
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="answer">
                Shorty is simple and too the point. No confusing, unneccessary
                features that confuse users and clog up their dashboards. We
                provide you with exactly what you want: a short URL.
              </div>
            </div>
          </div>
        </div>

        <div id="convinced" className="flex">
          <div
            id="convinced-container"
            className={`flex ${user ? "user" : ""}`}
          >
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
      </main>
      <Footer />
    </>
  );
}

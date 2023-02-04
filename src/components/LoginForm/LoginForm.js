import { useState } from "react";
import * as userService from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";

export default function LoginForm({
  setUser,
  showLogin,
  setShowShortenedUrl,
  setNewGlobalLink,
}) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await userService.login(credentials);
      setUser(user);
      navigate("/dashboard");
      setShowShortenedUrl(false);
      setNewGlobalLink({ url: "" });
    } catch (error) {
      setError("Sign in failed. Email and/or password may be incorrect.");
    }
  };

  return (
    <div className={`login-register-form ${showLogin ? "" : "hide"}`}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-section flex">
          <div className="form-icon flex">
            <svg fill="#000000" viewBox="0 0 24 24" id="mail">
              <rect
                id="primary"
                x="3"
                y="5"
                width="18"
                height="14"
                rx="1"
                style={{
                  fill: "none",
                  stroke: "#18DA8E",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                }}
              ></rect>
              <path
                id="secondary"
                d="M21,6V8l-9,5L3,8V6A1,1,0,0,1,4,5H20A1,1,0,0,1,21,6Z"
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
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-section last-section flex">
          <div className="form-icon flex">
            <svg fill="#000000" viewBox="0 0 24 24" id="lock-1">
              <path
                id="secondary"
                d="M16,9V7a4,4,0,0,0-4-4h0A4,4,0,0,0,8,7V9"
                style={{
                  fill: "none",
                  stroke: "#18DA8E",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                }}
              ></path>
              <rect
                id="primary"
                x="5"
                y="9"
                width="14"
                height="12"
                rx="1"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                }}
              ></rect>
            </svg>
          </div>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>

        <button type="submit">Login</button>
        {error ? <div className="error-message">{error}</div> : ""}
      </form>
    </div>
  );
}

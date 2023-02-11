import { useNavigate } from "react-router-dom";

export default function Logo({ setShowShortenedUrl }) {
  const navigate = useNavigate();

  return (
    <div
      id="logo"
      className="flex"
      onClick={() => {
        navigate("/");
        setShowShortenedUrl(false);
      }}
    >
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
  );
}

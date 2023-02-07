import FeaturesExplaination from "./FeaturesExplaination";
import FeatureBox from "./FeatureBox";

export default function Features({ user, setShowRegister }) {
  return (
    <div id="features" className="flex">
      <FeaturesExplaination />

      <div id="feature-boxes" className="flex">
        <FeatureBox
          icon={
            <svg viewBox="0 0 24 24">
              <path
                className="path-primary"
                d="M3.29,16.09,8.2,21H11V18.2L6.09,13.29a1,1,0,0,0-1.4,0l-1.4,1.4A1,1,0,0,0,3.29,16.09Z"
              ></path>
              <path
                className="path-white"
                d="M13,13h3a5,5,0,0,1,5,5v1s-1.55,1.63-6,2"
              ></path>
              <circle className="path-white" cx="13" cy="8" r="5"></circle>
            </svg>
          }
          featureTitle="Link-In-Bio"
          featureDescription="Personalized
          Link-in-bios make sharing links with friends easy."
          user={user}
          setShowRegister={setShowRegister}
        />

        <FeatureBox
          icon={
            <svg viewBox="0 0 24 24">
              <path
                className="path-primary"
                d="M8,12h8M12,4V3M9,5,8,4m7,1,1-1M12,20v1M9,19,8,20m7-1,1,1"
              ></path>
              <path
                className="path-white"
                d="M10,9A1,1,0,0,0,9,8H4A1,1,0,0,0,3,9v6a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1"
              ></path>
              <path
                className="path-white"
                d="M14,15a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1"
              ></path>
            </svg>
          }
          featureTitle="Link Management"
          featureDescription="Save, track, and organize your links in one convenient place."
          user={user}
          setShowRegister={setShowRegister}
        />

        <FeatureBox
          icon={
            <svg viewBox="0 0 24 24">
              <path
                className="path-primary"
                d="M13,11V7h4v4Zm4,6V15H15v2ZM7,13v4h4V13ZM7,7V9H9V7Z"
              ></path>
              <path className="path-white" d="M21,8V4a1,1,0,0,0-1-1H16"></path>
              <path className="path-white" d="M16,21h4a1,1,0,0,0,1-1V16"></path>
              <path className="path-white" d="M8,3H4A1,1,0,0,0,3,4V8"></path>
              <path className="path-white" d="M3,16v4a1,1,0,0,0,1,1H8"></path>
            </svg>
          }
          featureTitle="QR Codes"
          featureDescription="Individual QR codes make sharing your links even easier."
          user={user}
          setShowRegister={setShowRegister}
        />
      </div>
    </div>
  );
}

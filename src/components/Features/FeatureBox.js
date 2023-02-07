import SignUpNowButton from "./SignUpNowButton";

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
      {user ? "" : <SignUpNowButton setShowRegister={setShowRegister} />}
    </div>
  );
}

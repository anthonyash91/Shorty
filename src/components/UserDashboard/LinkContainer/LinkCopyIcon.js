export default function LinkCopyIcon({
  domainName,
  shortUrl,
  showCopiedMessage,
  setShowCopiedMessage,
  _id,
}) {
  return (
    <div className="copy-icon">
      <svg
        onClick={() => {
          navigator.clipboard.writeText(`https://${domainName}/${shortUrl}`);
          setShowCopiedMessage(_id);
          setTimeout(() => {
            setShowCopiedMessage();
          }, 800);
        }}
        className={showCopiedMessage === _id ? "copied" : ""}
        viewBox="0 0 24 24"
      >
        <path className="path-primary" d="M7,10V6A1,1,0,0,1,8,5h3"></path>
        <path
          className="path-primary"
          d="M17,5h3a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V16"
        ></path>
        <path
          className="path-accent"
          d="M11,7h6V4a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1ZM3.29,12.09,8.2,17H11V14.2L6.09,9.29a1,1,0,0,0-1.4,0l-1.4,1.4A1,1,0,0,0,3.29,12.09Z"
        ></path>
      </svg>
      <div className={`link-copied ${showCopiedMessage === _id ? "" : "hide"}`}>
        Copied
      </div>
    </div>
  );
}

export default function Link({
  domainName,
  shortUrl,
  showCopiedMessage,
  _id,
  title,
  url,
}) {
  return (
    <a
      href={`https://${domainName}/${shortUrl}`}
      target="_blank"
      className={showCopiedMessage === _id ? "copied" : ""}
    >
      {title ? title : url}
    </a>
  );
}

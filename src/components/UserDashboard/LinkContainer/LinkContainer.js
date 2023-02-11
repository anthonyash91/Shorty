import Link from './Link'
import LinkHeader from './LinkHeader'
import LinkCopyIcon from './LinkCopyIcon'
import LinkContent from './LinkContent'

export default function LinkContainer ({
  date,
  clicks,
  domainName,
  shortUrl,
  showCopiedMessage,
  _id,
  title,
  url,
  setShowCopiedMessage
}) {
  return (
    <div className='link-container-section'>
      <LinkHeader date={date} clicks={clicks} />

      <div className='link-shortened flex'>
        <Link
          domainName={domainName}
          shortUrl={shortUrl}
          showCopiedMessage={showCopiedMessage}
          _id={_id}
          title={title}
          url={url}
        />

        <LinkCopyIcon
          domainName={domainName}
          shortUrl={shortUrl}
          showCopiedMessage={showCopiedMessage}
          setShowCopiedMessage={setShowCopiedMessage}
          _id={_id}
        />
      </div>

      <LinkContent url={url} />
    </div>
  )
}

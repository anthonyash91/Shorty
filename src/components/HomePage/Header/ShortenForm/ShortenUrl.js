import { useState } from 'react'
import ShortenButton from './ShortenButton'

export default function ShortenUrl ({
  user,
  showShortenedUrl,
  domainName,
  userLink,
  globalLink
}) {
  const [showCopyMessage, setShowCopyMessage] = useState(false)

  return (
    <div id='short-link' className={`flex ${showShortenedUrl ? '' : 'hide'}`}>
      <div id='copied-message' className={showCopyMessage ? '' : 'hide'}>
        Copied
      </div>
      <input
        value={
          user
            ? `https://${domainName}/${userLink.shortUrl}`
            : `https://${domainName}/${globalLink.shortUrl}`
        }
        className={showCopyMessage ? 'highlighted' : ''}
        disabled
      />

      <ShortenButton
        buttonFunction={() => {
          user
            ? navigator.clipboard.writeText(
                `https://${domainName}/${userLink.shortUrl}`
            )
            : navigator.clipboard.writeText(
                `https://${domainName}/${globalLink.shortUrl}`
            )
          setShowCopyMessage(true)
          setTimeout(() => {
            setShowCopyMessage(false)
          }, 1000)
        }}
        buttonIcon={
          <svg viewBox='0 0 24 24'>
            <path className='path-white' d='M7,10V6A1,1,0,0,1,8,5h3' />
            <path
              className='path-white'
              d='M17,5h3a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V16'
            />
            <path
              className='path-accent'
              d='M11,7h6V4a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1ZM3.29,12.09,8.2,17H11V14.2L6.09,9.29a1,1,0,0,0-1.4,0l-1.4,1.4A1,1,0,0,0,3.29,12.09Z'
            />
          </svg>
        }
      />
    </div>
  )
}

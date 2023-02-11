import ShortenInput from './ShortenInput'
import ShortenButton from './ShortenButton'
import ShortenUrl from './ShortenUrl'
import SuccessMessage from './SuccessMessage'

export default function ShortenForm ({
  domainName,
  createGlobalLink,
  newGlobalLink,
  handleChange,
  showShortenedUrl,
  createUserLink,
  userLink,
  newUserLink,
  handleUserLinkChange,
  user,
  setNewUserLink,
  setNewGlobalLink,
  showRegister,
  setShowRegister,
  globalLink,
  setShowLogin
}) {
  return (
    <>
      <div id='form-container' className={showShortenedUrl ? '' : 'hide'}>
        {user
          ? (
            <form onSubmit={createUserLink} className='flex'>
              <ShortenInput
                inputType='url'
                inputName='url'
                inputValue={newUserLink.url}
                inputFunction={handleUserLinkChange}
                inputPlaceholder='Paste your URL here...'
              />

              <ShortenButton
                buttonFunction={() => {
                  setNewUserLink({
                    ...newUserLink,
                    date: new Date().toLocaleDateString('en-us', {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric'
                    })
                  })
                }}
                buttonIcon={
                  <svg viewBox='0 0 24 24'>
                    <line
                      className='path-accent'
                      x1='8'
                      y1='12'
                      x2='16'
                      y2='12'
                    />
                    <path
                      className='path-white'
                      d='M10,9A1,1,0,0,0,9,8H4A1,1,0,0,0,3,9v6a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1'
                    />
                    <path
                      className='path-white'
                      d='M14,15a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1'
                    />
                  </svg>
              }
              />
            </form>
            )
          : (
            <form onSubmit={createGlobalLink} className='flex'>
              <ShortenInput
                inputType='url'
                inputName='url'
                inputValue={newGlobalLink.url}
                inputFunction={handleChange}
                inputPlaceholder='Paste your URL here...'
              />

              <ShortenButton
                buttonFunction={() => {
                  setNewGlobalLink({
                    ...newGlobalLink,
                    date: new Date().toLocaleDateString('en-us', {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric'
                    })
                  })
                }}
                buttonIcon={
                  <svg viewBox='0 0 24 24'>
                    <line
                      className='path-accent'
                      x1='8'
                      y1='12'
                      x2='16'
                      y2='12'
                    />
                    <path
                      className='path-white'
                      d='M10,9A1,1,0,0,0,9,8H4A1,1,0,0,0,3,9v6a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1'
                    />
                    <path
                      className='path-white'
                      d='M14,15a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1'
                    />
                  </svg>
              }
              />
            </form>
            )}

        <ShortenUrl
          user={user}
          showShortenedUrl={showShortenedUrl}
          domainName={domainName}
          userLink={userLink}
          globalLink={globalLink}
        />
      </div>

      <SuccessMessage
        showShortenedUrl={showShortenedUrl}
        user={user}
        setShowLogin={setShowLogin}
        showRegister={showRegister}
        setShowRegister={setShowRegister}
      />
    </>
  )
}

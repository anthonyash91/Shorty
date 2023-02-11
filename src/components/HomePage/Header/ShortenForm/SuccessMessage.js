import { Link } from 'react-router-dom'

export default function SuccessMessage ({
  showShortenedUrl,
  user,
  setShowLogin,
  showRegister,
  setShowRegister
}) {
  return (
    <div id='sign-up-message' className={showShortenedUrl ? '' : 'hide'}>
      {user
        ? (
          <>
            {user.name}, this link has been saved. To manage your links, visit the{' '}
            <Link to='/u/dashboard'>dashboard</Link>.
          </>
          )
        : (
          <>
            Want to save this link and the others you create? Sign up{' '}
            <span
              onClick={() => {
                setShowLogin(false)
                setShowRegister(!showRegister)
              }}
            >
              here
            </span>
            !
          </>
          )}
    </div>
  )
}

import Logo from './Logo'
import NavButtons from './NavButtons/NavButtons'

export default function Nav ({
  user,
  setUser,
  setShowShortenedUrl,
  setNewUserLink,
  setShowLogin,
  setShowRegister,
  showLogin,
  setNewGlobalLink,
  globalLink,
  showRegister
}) {
  return (
    <div id='nav-container' className='flex'>
      <nav className='flex'>
        <Logo setShowShortenedUrl={setShowShortenedUrl} />

        <NavButtons
          user={user}
          setUser={setUser}
          setShowShortenedUrl={setShowShortenedUrl}
          setNewUserLink={setNewUserLink}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          setShowRegister={setShowRegister}
          globalLink={globalLink}
          showRegister={showRegister}
          setNewGlobalLink={setNewGlobalLink}
        />
      </nav>
    </div>
  )
}

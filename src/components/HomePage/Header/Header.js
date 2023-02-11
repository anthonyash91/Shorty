import { useState } from 'react'
import Nav from './Nav/Nav'
import CallToAction from './CallToAction'
import ShortenForm from './ShortenForm/ShortenForm'

export default function Header ({
  user,
  domainName,
  setUser,
  globalLink,
  createGlobalLink,
  newGlobalLink,
  handleChange,
  showShortenedUrl,
  setShowShortenedUrl,
  createUserLink,
  userLink,
  newUserLink,
  setNewUserLink,
  handleUserLinkChange,
  setNewGlobalLink,
  showRegister,
  setShowRegister
}) {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <header className='flex'>
      <Nav
        user={user}
        setUser={setUser}
        setShowShortenedUrl={setShowShortenedUrl}
        setNewUserLink={setNewUserLink}
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
        showLogin={showLogin}
        setNewGlobalLink={setNewGlobalLink}
        globalLink={globalLink}
        showRegister={showRegister}
      />

      <CallToAction />

      <ShortenForm
        domainName={domainName}
        createGlobalLink={createGlobalLink}
        newGlobalLink={newGlobalLink}
        handleChange={handleChange}
        showShortenedUrl={showShortenedUrl}
        createUserLink={createUserLink}
        userLink={userLink}
        newUserLink={newUserLink}
        handleUserLinkChange={handleUserLinkChange}
        user={user}
        setNewUserLink={setNewUserLink}
        setNewGlobalLink={setNewGlobalLink}
        showRegister={showRegister}
        setShowRegister={setShowRegister}
        globalLink={globalLink}
        setShowLogin={setShowLogin}
      />
    </header>
  )
}

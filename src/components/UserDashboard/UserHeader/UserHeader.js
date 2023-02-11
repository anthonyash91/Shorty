import UserDetails from './UserDetails'
import NewShorty from './NewShorty/NewShorty'

export default function UserHeader ({
  user,
  setShowNewShortyForm,
  showNewShortyForm,
  setNewUserLink,
  setLinkTreeToggled,
  createUserLink,
  newUserLink,
  linkTreeToggled,
  handleUserLinkChange,
  setUser,
  setNewIcon
}) {
  const handleLinkTreeToggle = () => {
    setLinkTreeToggled(!linkTreeToggled)
  }
  return (
    <div id='user-greeting' className='flex'>
      <UserDetails user={user} setUser={setUser} setNewIcon={setNewIcon} />

      <NewShorty
        setShowNewShortyForm={setShowNewShortyForm}
        showNewShortyForm={showNewShortyForm}
        setNewUserLink={setNewUserLink}
        setLinkTreeToggled={setLinkTreeToggled}
        createUserLink={createUserLink}
        newUserLink={newUserLink}
        linkTreeToggled={linkTreeToggled}
        handleUserLinkChange={handleUserLinkChange}
        handleLinkTreeToggle={handleLinkTreeToggle}
      />
    </div>
  )
}

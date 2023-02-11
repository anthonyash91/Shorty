import { logOut } from '../../utilities/users-service'
import { useNavigate } from 'react-router-dom'
import Logo from '../HomePage/Header/Nav/Logo'
import SmallButton from '../Buttons/SmallButton'

export default function Header ({ user, setUser, setShowShortenedUrl }) {
  const navigate = useNavigate()

  return (
    <header id='dashboard' className='flex'>
      <div id='nav-container' className='flex'>
        <nav className='flex'>
          <Logo />

          <div id='user-buttons' className='flex'>
            <SmallButton
              buttonId='login-button'
              buttonClass='login-register'
              buttonFunction={() => {
                logOut()
                setUser(null)
                setShowShortenedUrl(false)
                navigate('/')
              }}
              buttonValue='Logout'
            />

            <SmallButton
              buttonId='register-button'
              buttonClass='login-register'
              buttonFunction={() => {
                navigate(`/u/${user.name}`)
              }}
              buttonValue='Link-In-Bio'
            />
          </div>
        </nav>
      </div>
    </header>
  )
}

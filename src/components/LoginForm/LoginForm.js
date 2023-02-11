import { useState } from 'react'
import * as userService from '../../utilities/users-service'
import { useNavigate } from 'react-router-dom'
import FormSection from '../Form/FormSection'
import LargeButton from '../Buttons/LargeButton'

export default function LoginForm ({
  setUser,
  showLogin,
  setShowShortenedUrl,
  setNewGlobalLink
}) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
    setError('')
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const user = await userService.login(credentials)
      setUser(user)
      navigate('/u/dashboard')
      setShowShortenedUrl(false)
      setNewGlobalLink({ url: '' })
    } catch (error) {
      setError('Sign in failed. Email and/or password may be incorrect.')
    }
  }

  return (
    <div className={`login-register-form ${showLogin ? '' : 'hide'}`}>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <FormSection
          icon={
            <svg viewBox='0 0 24 24'>
              <rect
                className='path-accent'
                x='3'
                y='5'
                width='18'
                height='14'
                rx='1'
              />
              <path
                className='path-white'
                d='M21,6V8l-9,5L3,8V6A1,1,0,0,1,4,5H20A1,1,0,0,1,21,6Z'
              />
            </svg>
          }
          inputType='email'
          inputName='email'
          inputValue={credentials.email}
          inputFunction={handleChange}
          inputPlaceholder='Email'
        />

        <FormSection
          formClass='last-section'
          icon={
            <svg viewBox='0 0 24 24'>
              <path
                className='path-accent'
                d='M16,9V7a4,4,0,0,0-4-4h0A4,4,0,0,0,8,7V9'
              />
              <rect
                className='path-white'
                x='5'
                y='9'
                width='14'
                height='12'
                rx='1'
              />
            </svg>
          }
          inputType='password'
          inputName='password'
          inputValue={credentials.password}
          inputFunction={handleChange}
          inputPlaceholder='Password'
        />

        <LargeButton buttonValue='Login' />
        {error ? <div className='error-message'>{error}</div> : ''}
      </form>
    </div>
  )
}

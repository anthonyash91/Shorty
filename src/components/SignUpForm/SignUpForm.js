import { signUp } from '../../utilities/users-service'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Uploader } from 'uploader'
import { UploadButton } from 'react-uploader'
import FormSection from '../Form/FormSection'
import LargeButton from '../Buttons/LargeButton'

export default function SignUpForm ({
  globalLink,
  setUser,
  showRegister,
  setShowShortenedUrl,
  setNewGlobalLink
}) {
  const [formData, setFormData] = useState({
    icon: '',
    name: '',
    email: '',
    password: '',
    confirm: ''
  })
  const [links, setLinks] = useState([globalLink?._id])
  const [error, setError] = useState('')
  const [userIcon, setUserIcon] = useState('')
  const navigate = useNavigate()

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    })
    setError('')
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const formDataCopy = { ...formData }
      if (links[0]) {
        formDataCopy.links = [...links]
      }
      delete formDataCopy.confirm
      const user = await signUp(formDataCopy)
      setUser(user)
      navigate('/u/dashboard')
      setShowShortenedUrl(false)
      setNewGlobalLink({ url: '' })
    } catch (error) {
      setError(
        'Sign up failed. Username and/or email address may already be in use.'
      )
    }
  }

  const uploader = Uploader({
    apiKey: 'public_FW25b3h8aR2hb4QHapA4e1NkptXN'
  })

  const options = {
    multi: false,
    layout: 'modal',
    editor: {
      images: {
        crop: true,
        cropShape: 'rect'
      }
    },
    showFinishButton: true,
    showRemoveButton: false,
    maxFileCount: 1
  }

  useEffect(() => {
    setLinks([globalLink._id])
  }, [globalLink])

  const disable = formData.password !== formData.confirm

  return (
    <div className={`login-register-form ${showRegister ? '' : 'hide'}`}>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <FormSection
          icon={
            <svg viewBox='0 0 24 24'>
              <path className='path-accent' d='M21,9H17m2,2V7' />
              <path
                className='path-white'
                d='M15.46,13A6,6,0,1,1,11,3a6,6,0,0,1,4.46,2'
              />
              <path
                className='path-white'
                d='M7,13.69A7,7,0,0,0,3,20a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1,7,7,0,0,0-4-6.33'
              />
            </svg>
          }
          inputType='text'
          inputName='name'
          inputValue={formData.name}
          inputFunction={handleChange}
          inputPlaceholder='Username'
        />

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
          inputValue={formData.email}
          inputFunction={handleChange}
          inputPlaceholder='Email address'
        />

        <FormSection
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
          inputValue={formData.password}
          inputFunction={handleChange}
          inputPlaceholder='Password'
        />

        <FormSection
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
          inputName='confirm'
          inputValue={formData.confirm}
          inputFunction={handleChange}
          inputPlaceholder='Confirm password'
        />

        {userIcon ? <img className='icon' src={userIcon} alt='icon' /> : ''}
        <UploadButton
          uploader={uploader}
          options={options}
          onComplete={(files) =>
            setUserIcon(files.map((x) => x.fileUrl).join('\n'))}
        >
          {({ onClick }) => (
            <button onClick={onClick}>Upload a Profile Photo</button>
          )}
        </UploadButton>

        <LargeButton
          buttonFunction={() => {
            setFormData({
              ...formData,
              icon: `${
                userIcon === ''
                  ? 'https://static-00.iconduck.com/assets.00/avatar-default-symbolic-icon-512x488-rddkk3u9.png'
                  : userIcon
              }`
            })
          }}
          buttonValue='Sign Up'
          disable={disable}
        />
        {error ? <div className='error-message'>{error}</div> : ''}
      </form>
    </div>
  )
}

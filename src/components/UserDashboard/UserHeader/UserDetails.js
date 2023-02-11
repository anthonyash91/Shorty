import { Uploader } from 'uploader'
import { UploadButton } from 'react-uploader'

export default function UserDetails ({ user, setUser, setNewIcon }) {
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

  const updateUser = async (icon) => {
    try {
      const response = await fetch(`/api/users/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ icon: `${icon}` })
      })
      const data = await response.json()
      setNewIcon('new icon set')
      setUser(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div id='user-details' className='flex'>
      <div id='user-pic' style={{ backgroundImage: `url(${user?.icon})` }}>
        <UploadButton
          uploader={uploader}
          options={options}
          onComplete={(files) =>
            updateUser(files.map((x) => x.fileUrl).join('\n'))}
        >
          {({ onClick }) => (
            <button onClick={onClick}>
              <svg viewBox='0 0 24 24'>
                <path
                  className='path-accent'
                  d='M8.71,10,3,15.73V19a1,1,0,0,0,1,1H8.29l5.2-5.2Zm7.58,2-8,8H20a1,1,0,0,0,1-1V16.71Z'
                />
                <line
                  className='path-accent'
                  x1='13.92'
                  y1='8.29'
                  x2='13.82'
                  y2='8.29'
                />
                <rect
                  className='path-white'
                  x='3'
                  y='4'
                  width='18'
                  height='16'
                  rx='1'
                />
              </svg>
            </button>
          )}
        </UploadButton>
      </div>

      <div id='user-name'>
        <div id='name'>
          Hey, <span>{user?.name}</span>!
        </div>
        <div id='link-count'>
          You have <b>{user?.links.length}</b>{' '}
          {user?.links.length === 1 ? 'shorty' : 'shorties'} saved.
        </div>
      </div>
    </div>
  )
}

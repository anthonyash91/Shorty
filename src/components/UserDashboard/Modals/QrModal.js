import QRCode from 'react-qr-code'
import SmallButton from '../../Buttons/SmallButton'

export default function QrModal ({ url, setShowQrModal }) {
  return (
    <div className='delete-modal qr-modal'>
      <div className='qr-code'>
        <QRCode
          className='qr'
          size={180}
          style={{
            height: 'auto',
            maxWidth: '180px',
            width: '180px'
          }}
          value={url}
          viewBox='0 0 256 256'
        />
      </div>
      Share this QR code anywhere people can scan it.
      <br />
      <SmallButton
        buttonFunction={() => {
          setShowQrModal()
        }}
        buttonValue='Got It!'
      />
    </div>
  )
}

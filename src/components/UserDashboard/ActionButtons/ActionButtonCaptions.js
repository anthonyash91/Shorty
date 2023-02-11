export default function ActionButtonCaptions ({
  showEditModal,
  showQrModal,
  showDeleteModal,
  _id,
  linkTree
}) {
  return (
    <>
      <div
        className={`button-caption el ${showEditModal === _id ? 'active' : ''}`}
      >
        Edit This Shorty
      </div>
      <div
        className={`button-caption gqrc ${showQrModal === _id ? 'active' : ''}`}
      >
        Generate QR Code
      </div>
      <div
        className={`button-caption dts ${
          showDeleteModal === _id ? 'active' : ''
        }`}
      >
        Delete This Shorty
      </div>
      <div className='button-caption dstlt'>
        {linkTree
          ? 'Remove Shorty From Link-In-Bio'
          : 'Add Shorty to Link-In-Bio'}
      </div>
    </>
  )
}

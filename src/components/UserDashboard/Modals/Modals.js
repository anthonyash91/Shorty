import EditModal from './EditModal'
import QrModal from './QrModal'
import DeleteModal from './DeleteModal'

export default function Modals ({
  showDeleteModal,
  showQrModal,
  showEditModal,
  linkTree,
  updateLink,
  newlyEditedLink,
  setShowEditLink,
  setShowEditModal,
  title,
  handleEditChange,
  url,
  setShowQrModal,
  setShowDeleteModal,
  deleteLink,
  getUser,
  _id
}) {
  return (
    <div
      className={`modal-background ${
        showDeleteModal === _id || showQrModal === _id || showEditModal === _id
          ? ''
          : 'hide'
      }`}
    >
      {showEditModal === _id
        ? (
          <EditModal
            linkTree={linkTree}
            updateLink={updateLink}
            _id={_id}
            newlyEditedLink={newlyEditedLink}
            setShowEditLink={setShowEditLink}
            setShowEditModal={setShowEditModal}
            title={title}
            url={url}
            handleEditChange={handleEditChange}
          />
          )
        : (
            ''
          )}
      {showQrModal === _id && url
        ? (
          <QrModal url={url} setShowQrModal={setShowQrModal} />
          )
        : (
            ''
          )}

      {showDeleteModal === _id
        ? (
          <DeleteModal
            setShowDeleteModal={setShowDeleteModal}
            deleteLink={deleteLink}
            linkTree={linkTree}
            getUser={getUser}
            _id={_id}
          />
          )
        : (
            ''
          )}
    </div>
  )
}

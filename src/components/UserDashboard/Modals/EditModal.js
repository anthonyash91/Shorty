export default function EditModal({
  linkTree,
  updateLink,
  _id,
  newlyEditedLink,
  setShowEditLink,
  setShowEditModal,
  title,
  url,
  handleEditChange,
}) {
  return (
    <div className="delete-modal edit-modal">
      Enter a new title for your Shorty.
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();

          linkTree
            ? updateLink(_id, {
                title: newlyEditedLink.title,
                linkTree: "on",
              })
            : updateLink(_id, {
                title: newlyEditedLink.title,
                linkTree: "off",
              });

          setShowEditLink("");
          setShowEditModal("");
        }}
      >
        <div className="form-icon flex">
          <svg viewBox="0 0 24 24">
            <path
              className="path-accent"
              d="M20.41,6.41,17.59,3.59a1,1,0,0,0-1.42,0L13.29,6.47l4.24,4.24,2.88-2.88A1,1,0,0,0,20.41,6.41Z"
            ></path>
            <polygon
              className="path-white"
              points="10.47 9.29 14.71 13.53 7.24 21 3 21 3 16.76 10.47 9.29"
            ></polygon>
          </svg>
        </div>
        <input
          name="title"
          type="text"
          placeholder={title ? title : url}
          value={newlyEditedLink.title}
          onChange={handleEditChange}
          className="link-edit-input"
        />
      </form>
    </div>
  );
}

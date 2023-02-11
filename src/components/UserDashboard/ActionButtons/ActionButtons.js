import ActionButton from "./ActionButton";
import ActionButtonCaptions from "./ActionButtonCaptions";

export default function ActionButtons({
  setNewlyEditedLink,
  setShowEditModal,
  showQrModal,
  title,
  showDeleteModal,
  _id,
  setShowQrModal,
  showEditModal,
  setShowDeleteModal,
  updateLink,
  linkTree,
}) {
  return (
    <div className="link-container-section buttons flex">
      <ActionButton
        buttonFunction={() => {
          linkTree
            ? setNewlyEditedLink({
                title: title,
                linkTree: true,
              })
            : setNewlyEditedLink({
                title: title,
                linkTree: false,
              });
          setShowEditModal(_id);
        }}
        buttonIcon={
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
        }
      />

      <ActionButton
        buttonFunction={() => {
          setShowQrModal(_id);
        }}
        buttonClass={showQrModal === _id ? "active" : ""}
        buttonIcon={
          <svg viewBox="0 0 24 24">
            <path
              className="path-accent"
              d="M13,11V7h4v4Zm4,6V15H15v2ZM7,13v4h4V13ZM7,7V9H9V7Z"
            ></path>
            <path className="path-white" d="M21,8V4a1,1,0,0,0-1-1H16"></path>
            <path className="path-white" d="M16,21h4a1,1,0,0,0,1-1V16"></path>
            <path className="path-white" d="M8,3H4A1,1,0,0,0,3,4V8"></path>
            <path className="path-white" d="M3,16v4a1,1,0,0,0,1,1H8"></path>
          </svg>
        }
      />

      <ActionButton
        buttonFunction={() => {
          setShowDeleteModal(_id);
        }}
        buttonClass={showDeleteModal === _id ? "active" : ""}
        buttonIcon={
          <svg viewBox="0 0 24 24">
            <path
              className="path-accent"
              d="M16,7V4a1,1,0,0,0-1-1H9A1,1,0,0,0,8,4V7m2,4v6m4-6v6"
            ></path>
            <path
              className="path-white"
              d="M4,7H20M18,20V7H6V20a1,1,0,0,0,1,1H17A1,1,0,0,0,18,20Z"
            ></path>
          </svg>
        }
      />

      <ActionButton
        buttonFunction={
          linkTree
            ? (e) => {
                e.preventDefault();
                updateLink(_id, { linkTree: "off" });
              }
            : (e) => {
                e.preventDefault();
                updateLink(_id, { linkTree: "on" });
              }
        }
        buttonClass={linkTree ? "linktree-true" : ""}
        buttonIcon={
          <svg viewBox="0 0 24 24">
            <path
              className={linkTree ? "path-primary" : "path-accent"}
              d="M16.74,12.17A3.66,3.66,0,0,1,17,13.5,3.5,3.5,0,0,1,13.5,17a3.45,3.45,0,0,1-1.5-.35,3.45,3.45,0,0,1-1.5.35A3.5,3.5,0,0,1,7,13.5a3.66,3.66,0,0,1,.26-1.33,3.48,3.48,0,0,1,.81-5.86,4,4,0,0,1,7.86,0,3.48,3.48,0,0,1,.81,5.86Z"
            ></path>
            <path className="path-white" d="M12,21V11M10,21h4"></path>
          </svg>
        }
      />

      <ActionButtonCaptions
        showEditModal={showEditModal}
        showQrModal={showQrModal}
        showDeleteModal={showDeleteModal}
        _id={_id}
        linkTree={linkTree}
      />
    </div>
  );
}

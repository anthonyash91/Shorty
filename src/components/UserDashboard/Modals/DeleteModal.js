import SmallButton from "../../Buttons/SmallButton";

export default function DeleteModal({
  setShowDeleteModal,
  getUser,
  linkTree,
  _id,
}) {
  const deleteLink = async (id) => {
    try {
      const response = await fetch(`/api/links/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      getUser();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="delete-modal">
      Are you sure you want to delete this Shorty
      {linkTree ? " and remove it from your Link Tree" : ""}? This action cannot
      be undone.
      <br />
      <SmallButton
        buttonFunction={() => {
          setShowDeleteModal();
        }}
        buttonValue="Nevermind"
      />
      <SmallButton
        buttonFunction={() => {
          deleteLink(_id);
        }}
        buttonValue="Delete"
      />
    </div>
  );
}

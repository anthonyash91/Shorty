import { useState, useEffect } from "react";
import Header from "../../components/UserDashboard/Header";
import Modals from "../../components/UserDashboard/Modals/Modals";
import ActionButtons from "../../components/UserDashboard/ActionButtons/ActionButtons";
import LinkContainer from "../../components/UserDashboard/LinkContainer/LinkContainer";
import NoShorties from "../../components/UserDashboard/NoShorties";
import Footer from "../../components/Footer/Footer";
import UserHeader from "../../components/UserDashboard/UserHeader/UserHeader";

export default function UserDashboard({
  user,
  domainName,
  setUser,
  userLink,
  newUserLink,
  createUserLink,
  handleUserLinkChange,
  setNewUserLink,
  showNewShortyForm,
  setShowNewShortyForm,
  linkTreeToggled,
  setLinkTreeToggled,
  setShowShortenedUrl,
}) {
  const [showEditLink, setShowEditLink] = useState("");

  const [newlyEditedLink, setNewlyEditedLink] = useState({
    title: "",
  });

  const [showCopiedMessage, setShowCopiedMessage] = useState("");
  const [showQrModal, setShowQrModal] = useState("");
  const [showEditModal, setShowEditModal] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState("");
  const [newIcon, setNewIcon] = useState("");

  const getUser = async () => {
    try {
      const response = await fetch(`/api/users/${user._id}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateLink = async (id, updatedLink) => {
    try {
      const response = await fetch(`/api/links/${id}/user/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...updatedLink }),
      });
      const data = await response.json();
      getUser();
      setShowEditLink(false);
      setNewlyEditedLink({
        title: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditChange = (evt) => {
    setNewlyEditedLink({
      ...newlyEditedLink,
      [evt.target.name]: evt.target.value,
    });
  };

  useEffect(() => {
    getUser();
  }, [userLink, newIcon]);

  return (
    <>
      <Header
        user={user}
        setUser={setUser}
        setShowShortenedUrl={setShowShortenedUrl}
      />

      <div id="user-dashboard-container" className="flex">
        <div className="link-container user flex">
          <div className="link-container-inside flex">
            <UserHeader
              user={user}
              setShowNewShortyForm={setShowNewShortyForm}
              showNewShortyForm={showNewShortyForm}
              setNewUserLink={setNewUserLink}
              setLinkTreeToggled={setLinkTreeToggled}
              createUserLink={createUserLink}
              newUserLink={newUserLink}
              linkTreeToggled={linkTreeToggled}
              handleUserLinkChange={handleUserLinkChange}
              setUser={setUser}
              setShowShortenedUrl={setShowShortenedUrl}
              setNewIcon={setNewIcon}
            />
          </div>
        </div>

        <div id="user-dashboard" className="flex">
          {user?.links
            ? user.links
                .map((link, i) => {
                  const { shortUrl, clicks, date, url, title, linkTree, _id } =
                    link;
                  return (
                    <div className="link-container flex" key={i}>
                      <div className="link-container-inside flex">
                        <Modals
                          showDeleteModal={showDeleteModal}
                          showQrModal={showQrModal}
                          showEditModal={showEditModal}
                          linkTree={linkTree}
                          updateLink={updateLink}
                          newlyEditedLink={newlyEditedLink}
                          setShowEditLink={setShowEditLink}
                          setShowEditModal={setShowEditModal}
                          title={title}
                          handleEditChange={handleEditChange}
                          url={url}
                          setShowQrModal={setShowQrModal}
                          setShowDeleteModal={setShowDeleteModal}
                          _id={_id}
                          getUser={getUser}
                        />

                        <LinkContainer
                          date={date}
                          clicks={clicks}
                          domainName={domainName}
                          shortUrl={shortUrl}
                          showCopiedMessage={showCopiedMessage}
                          _id={_id}
                          title={title}
                          url={url}
                          setShowCopiedMessage={setShowCopiedMessage}
                        />

                        <ActionButtons
                          setNewlyEditedLink={setNewlyEditedLink}
                          setShowEditModal={setShowEditModal}
                          showEditModal={showEditModal}
                          showQrModal={showQrModal}
                          title={title}
                          showDeleteModal={showDeleteModal}
                          _id={_id}
                          setShowQrModal={setShowQrModal}
                          setShowDeleteModal={setShowDeleteModal}
                          updateLink={updateLink}
                          linkTree={linkTree}
                        />
                      </div>
                    </div>
                  );
                })
                .reverse()
            : ""}

          <NoShorties user={user} />
        </div>
      </div>
      <Footer />
    </>
  );
}

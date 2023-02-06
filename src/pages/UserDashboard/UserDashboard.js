import { useState, useEffect, useRef } from "react";
import Footer from "../../components/Footer/Footer";
import { logOut } from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import QRCode from "react-qr-code";

export default function UserDashboard({
  user,
  domainName,
  setUser,
  setShowShortenedUrl,
  userLink,
  newUserLink,
  createUserLink,
  handleUserLinkChange,
  setNewUserLink,
  setNewGlobalLink,
  showNewShortyForm,
  setShowNewShortyForm,
  linkTreeToggled,
  setLinkTreeToggled,
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

  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await fetch(`/api/users/${user._id}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

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

  const handleLinkTreeToggle = () => {
    setLinkTreeToggled(!linkTreeToggled);
  };

  const uploader = Uploader({
    apiKey: "public_FW25b3h8aR2hb4QHapA4e1NkptXN",
  });

  const options = {
    multi: false,
    layout: "modal",
    editor: {
      images: {
        crop: true,
        cropShape: "rect",
      },
    },
    showFinishButton: true,
    showRemoveButton: false,
    maxFileCount: 1,
  };

  useEffect(() => {
    getUser();
  }, [userLink, newIcon]);

  const updateUser = async (icon) => {
    try {
      const response = await fetch(`/api/users/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ icon: `${icon}` }),
      });
      const data = await response.json();
      setNewIcon("new icon set");
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <header id="dashboard" className="flex">
        <div id="nav-container" className="flex">
          <nav className="flex">
            <div
              id="logo"
              className="flex"
              onClick={() => {
                navigate("/");
                setShowShortenedUrl(false);
              }}
            >
              <svg fill="#000000" viewBox="0 0 24 24" class="icon line-color">
                <path
                  id="secondary"
                  d="M7.72,15.2c1.21.6,1.64,2.34,1,3.89s-2.2,2.31-3.4,1.71-1.64-2.34-1-3.89S6.52,14.6,7.72,15.2Zm1,3.89L16,3"
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                  }}
                ></path>
                <path
                  id="primary"
                  d="M19.68,16.91c.68,1.55.25,3.29-1,3.89s-2.73-.17-3.4-1.71-.25-3.29,1-3.89S19,15.37,19.68,16.91ZM8,3l7.32,16.09"
                  style={{
                    fill: "none",
                    stroke: "#18DA8E",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                  }}
                ></path>
              </svg>
              SHORTY
            </div>

            <div id="user-buttons" className="flex">
              <button
                id="login-button"
                className="login-register"
                onClick={() => {
                  logOut();
                  setUser();
                  navigate("/");
                }}
              >
                Logout
              </button>

              <button
                id="register-button"
                className="login-register"
                onClick={() => {
                  navigate(`/u/${user.name}`);
                }}
              >
                Link-In-Bio
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div id="user-dashboard-container" className="flex">
        <div className="link-container user flex">
          <div className="link-container-inside flex">
            <div id="user-greeting" className="flex">
              <div id="user-details" className="flex">
                <div
                  id="user-pic"
                  style={{ backgroundImage: `url(${user.icon})` }}
                >
                  <UploadButton
                    uploader={uploader}
                    options={options}
                    onComplete={(files) =>
                      updateUser(files.map((x) => x.fileUrl).join("\n"))
                    }
                  >
                    {({ onClick }) => (
                      <button onClick={onClick}>
                        <svg
                          fill="#000000"
                          viewBox="0 0 24 24"
                          class="icon line-color"
                        >
                          <path
                            id="secondary"
                            d="M8.71,10,3,15.73V19a1,1,0,0,0,1,1H8.29l5.2-5.2Zm7.58,2-8,8H20a1,1,0,0,0,1-1V16.71Z"
                            style={{
                              fill: "none",
                              stroke: "#18DA8E",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2",
                            }}
                          ></path>
                          <line
                            id="secondary-upstroke"
                            x1="13.92"
                            y1="8.29"
                            x2="13.82"
                            y2="8.29"
                            style={{
                              fill: "none",
                              stroke: "#18DA8E",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2",
                            }}
                          ></line>
                          <rect
                            id="primary"
                            x="3"
                            y="4"
                            width="18"
                            height="16"
                            rx="1"
                            style={{
                              fill: "none",
                              stroke: "#fff",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2",
                            }}
                          ></rect>
                        </svg>
                      </button>
                    )}
                  </UploadButton>
                </div>
                <div id="user-name">
                  <div id="name">
                    Hey, <span>{user.name}</span>!
                  </div>
                  <div id="link-count">
                    You have <b>{user?.links.length}</b>{" "}
                    {user?.links.length === 1 ? "shorty" : "shorties"} saved.
                  </div>
                </div>
              </div>
              <div id="new-shorty-container">
                <button
                  className="new-shorty"
                  onClick={() => {
                    setShowNewShortyForm(!showNewShortyForm);
                    setNewUserLink({
                      url: "",
                      linkTree: "off",
                      title: "",
                    });

                    setLinkTreeToggled(false);
                  }}
                >
                  New Shorty
                </button>
                <div
                  className={`new-shorty-form ${
                    showNewShortyForm ? "" : "hide"
                  }`}
                >
                  <form onSubmit={createUserLink}>
                    <div className="form-section flex">
                      <div className="form-icon flex">
                        <svg
                          fill="#000000"
                          viewBox="0 0 24 24"
                          class="icon line-color"
                        >
                          <line
                            id="secondary"
                            x1="8"
                            y1="12"
                            x2="16"
                            y2="12"
                            style={{
                              fill: "none",
                              stroke: "#18DA8E",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2",
                            }}
                          ></line>
                          <path
                            id="primary"
                            d="M10,9A1,1,0,0,0,9,8H4A1,1,0,0,0,3,9v6a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1"
                            style={{
                              fill: "none",
                              stroke: "#fff",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2",
                            }}
                          ></path>
                          <path
                            id="primary-2"
                            data-name="primary"
                            d="M14,15a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1"
                            style={{
                              fill: "none",
                              stroke: "#fff",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="url"
                        name="url"
                        value={newUserLink.url}
                        onChange={handleUserLinkChange}
                        placeholder="Paste your URL here..."
                        required
                      />
                    </div>
                    <div className="form-section last-section flex">
                      <div className="form-icon flex">
                        <svg
                          fill="#000000"
                          viewBox="0 0 24 24"
                          class="icon line-color"
                        >
                          <path
                            id="secondary"
                            d="M20.41,6.41,17.59,3.59a1,1,0,0,0-1.42,0L13.29,6.47l4.24,4.24,2.88-2.88A1,1,0,0,0,20.41,6.41Z"
                            style={{
                              fill: "none",
                              stroke: "#18DA8E",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2",
                            }}
                          ></path>
                          <polygon
                            id="primary"
                            points="10.47 9.29 14.71 13.53 7.24 21 3 21 3 16.76 10.47 9.29"
                            style={{
                              fill: "none",
                              stroke: "#fff",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2",
                            }}
                          ></polygon>
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="title"
                        value={newUserLink.title}
                        onChange={handleUserLinkChange}
                        placeholder="Link description (optional)"
                      />
                    </div>

                    <div id="in-linktree-container" className="flex">
                      <div className="in-linktree flex">
                        <input
                          type="checkbox"
                          name="linkTree"
                          value={!linkTreeToggled ? "on" : "off"}
                          onChange={handleUserLinkChange}
                          onClick={handleLinkTreeToggle}
                        />
                        <div
                          className={`linktree-toggle ${
                            linkTreeToggled ? "toggled" : ""
                          }`}
                        />
                      </div>
                      <div
                        className={`toggle-text ${
                          linkTreeToggled ? "toggled" : ""
                        }`}
                      >
                        {linkTreeToggled
                          ? "Added to your Link-In-Bio"
                          : "Add to your Link-In-Bio"}
                      </div>
                    </div>

                    <button
                      // className={newUserLink.url ? "" : "disabled"}
                      onClick={() => {
                        setNewUserLink({
                          ...newUserLink,
                          date: new Date().toLocaleDateString("en-us", {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                          }),
                        });
                      }}
                    >
                      Create New Shorty
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="user-dashboard" className="flex">
          {user?.links
            ? user.links
                .map((link, i) => {
                  const { shortUrl, clicks, date, url, title, linkTree, _id } =
                    link;
                  return (
                    <div className="link-container flex">
                      <div className="link-container-inside flex">
                        <div
                          className={`modal-background ${
                            showDeleteModal === _id ||
                            showQrModal === _id ||
                            showEditModal === _id
                              ? ""
                              : "hide"
                          }`}
                        >
                          {showEditModal === _id ? (
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
                                  <svg
                                    fill="#000000"
                                    viewBox="0 0 24 24"
                                    class="icon line-color"
                                  >
                                    <path
                                      id="secondary"
                                      d="M20.41,6.41,17.59,3.59a1,1,0,0,0-1.42,0L13.29,6.47l4.24,4.24,2.88-2.88A1,1,0,0,0,20.41,6.41Z"
                                      style={{
                                        fill: "none",
                                        stroke: "#18DA8E",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                      }}
                                    ></path>
                                    <polygon
                                      id="primary"
                                      points="10.47 9.29 14.71 13.53 7.24 21 3 21 3 16.76 10.47 9.29"
                                      style={{
                                        fill: "none",
                                        stroke: "#fff",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                      }}
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
                          ) : (
                            ""
                          )}
                          {showQrModal === _id && url ? (
                            <div className="delete-modal qr-modal">
                              <div className="qr-code">
                                <QRCode
                                  size={180}
                                  style={{
                                    height: "auto",
                                    maxWidth: "180px",
                                    width: "180px",
                                  }}
                                  value={url}
                                  viewBox={`0 0 256 256`}
                                />
                              </div>
                              Share this QR code anywhere people can scan it.
                              <br />
                              <button
                                onClick={() => {
                                  setShowQrModal();
                                }}
                              >
                                Got It!
                              </button>
                            </div>
                          ) : (
                            ""
                          )}

                          {showDeleteModal === _id ? (
                            <div className="delete-modal">
                              Are you sure you want to delete this Shorty? This
                              action cannot be undone.
                              <br />
                              <button
                                onClick={() => {
                                  setShowDeleteModal();
                                }}
                              >
                                Nevermind
                              </button>
                              <button
                                onClick={() => {
                                  deleteLink(_id);
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="link-container-section">
                          <div className="link-date-clicks flex">
                            {date} <span>•</span> {clicks} click
                            {clicks === 1 ? "" : "s"}
                          </div>
                          <div className="link-shortened flex">
                            <a
                              href={`${domainName}${shortUrl}`}
                              target="_blank"
                              className={
                                showCopiedMessage === _id ? "copied" : ""
                              }
                            >
                              shrl.io/{shortUrl}
                            </a>

                            <div className="copy-icon">
                              <svg
                                onClick={() => {
                                  navigator.clipboard.writeText(
                                    `http://shrl.io/${shortUrl}`
                                  );
                                  setShowCopiedMessage(_id);
                                  setTimeout(() => {
                                    setShowCopiedMessage();
                                  }, 800);
                                }}
                                className={
                                  showCopiedMessage === _id ? "copied" : ""
                                }
                                fill="#000000"
                                viewBox="0 0 24 24"
                                class="icon line-color"
                              >
                                <path
                                  id="primary"
                                  d="M7,10V6A1,1,0,0,1,8,5h3"
                                  style={{
                                    fill: "none",
                                    stroke: "#0D2A3F",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                  }}
                                ></path>
                                <path
                                  id="primary-2"
                                  data-name="primary"
                                  d="M17,5h3a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V16"
                                  style={{
                                    fill: "none",
                                    stroke: "#0D2A3F",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                  }}
                                ></path>
                                <path
                                  id="secondary"
                                  d="M11,7h6V4a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1ZM3.29,12.09,8.2,17H11V14.2L6.09,9.29a1,1,0,0,0-1.4,0l-1.4,1.4A1,1,0,0,0,3.29,12.09Z"
                                  style={{
                                    fill: "none",
                                    stroke: "#18DA8E",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                  }}
                                ></path>
                              </svg>
                              <div
                                className={`link-copied ${
                                  showCopiedMessage === _id ? "" : "hide"
                                }`}
                              >
                                Copied
                              </div>
                            </div>
                          </div>

                          <div className="link-title flex">
                            <div className="link-title-text">
                              {title ? title : url}
                            </div>
                          </div>
                        </div>
                        <div className="link-container-section buttons flex">
                          <button
                            onClick={() => {
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
                          >
                            <svg
                              fill="#000000"
                              viewBox="0 0 24 24"
                              class="icon line-color"
                            >
                              <path
                                id="secondary"
                                d="M20.41,6.41,17.59,3.59a1,1,0,0,0-1.42,0L13.29,6.47l4.24,4.24,2.88-2.88A1,1,0,0,0,20.41,6.41Z"
                                style={{
                                  fill: "none",
                                  stroke: "#18DA8E",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                }}
                              ></path>
                              <polygon
                                id="primary"
                                points="10.47 9.29 14.71 13.53 7.24 21 3 21 3 16.76 10.47 9.29"
                                style={{
                                  fill: "none",
                                  stroke: "#fff",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                }}
                              ></polygon>
                            </svg>
                          </button>
                          <button
                            onClick={() => {
                              setShowQrModal(_id);
                            }}
                            className={showQrModal === _id ? "active" : ""}
                          >
                            <svg
                              fill="#000000"
                              viewBox="0 0 24 24"
                              id="qr-code-scan"
                            >
                              <path
                                id="secondary"
                                d="M13,11V7h4v4Zm4,6V15H15v2ZM7,13v4h4V13ZM7,7V9H9V7Z"
                                style={{
                                  fill: "none",
                                  stroke: "#18DA8E",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                }}
                              ></path>
                              <path
                                id="primary"
                                d="M21,8V4a1,1,0,0,0-1-1H16"
                                style={{
                                  fill: "none",
                                  stroke: "#fff",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                }}
                              ></path>
                              <path
                                id="primary-2"
                                data-name="primary"
                                d="M16,21h4a1,1,0,0,0,1-1V16"
                                style={{
                                  fill: "none",
                                  stroke: "#fff",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                }}
                              ></path>
                              <path
                                id="primary-3"
                                data-name="primary"
                                d="M8,3H4A1,1,0,0,0,3,4V8"
                                style={{
                                  fill: "none",
                                  stroke: "#fff",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                }}
                              ></path>
                              <path
                                id="primary-4"
                                data-name="primary"
                                d="M3,16v4a1,1,0,0,0,1,1H8"
                                style={{
                                  fill: "none",
                                  stroke: "#fff",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                }}
                              ></path>
                            </svg>
                          </button>
                          <button
                            onClick={() => {
                              setShowDeleteModal(_id);
                            }}
                            className={showDeleteModal === _id ? "active" : ""}
                          >
                            <svg
                              fill="#000000"
                              viewBox="0 0 24 24"
                              class="icon line-color"
                            >
                              <path
                                id="secondary"
                                d="M16,7V4a1,1,0,0,0-1-1H9A1,1,0,0,0,8,4V7m2,4v6m4-6v6"
                                style={{
                                  fill: "none",
                                  stroke: "#18DA8E",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                }}
                              ></path>
                              <path
                                id="primary"
                                d="M4,7H20M18,20V7H6V20a1,1,0,0,0,1,1H17A1,1,0,0,0,18,20Z"
                                style={{
                                  fill: "none",
                                  stroke: "#fff",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                }}
                              ></path>
                            </svg>
                          </button>

                          {linkTree ? (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                updateLink(_id, { linkTree: "off" });
                              }}
                              className="linktree-true"
                            >
                              <svg viewBox="0 0 24 24">
                                <path
                                  id="primary"
                                  d="M16.74,12.17A3.66,3.66,0,0,1,17,13.5,3.5,3.5,0,0,1,13.5,17a3.45,3.45,0,0,1-1.5-.35,3.45,3.45,0,0,1-1.5.35A3.5,3.5,0,0,1,7,13.5a3.66,3.66,0,0,1,.26-1.33,3.48,3.48,0,0,1,.81-5.86,4,4,0,0,1,7.86,0,3.48,3.48,0,0,1,.81,5.86Z"
                                  style={{
                                    fill: "none",
                                    stroke: "#0D2A3F",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                  }}
                                ></path>
                                <path
                                  id="secondary"
                                  d="M12,21V11M10,21h4"
                                  style={{
                                    fill: "none",
                                    stroke: "#fff",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                  }}
                                ></path>
                              </svg>
                            </button>
                          ) : (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                updateLink(_id, { linkTree: "on" });
                              }}
                            >
                              <svg viewBox="0 0 24 24">
                                <path
                                  id="primary"
                                  d="M16.74,12.17A3.66,3.66,0,0,1,17,13.5,3.5,3.5,0,0,1,13.5,17a3.45,3.45,0,0,1-1.5-.35,3.45,3.45,0,0,1-1.5.35A3.5,3.5,0,0,1,7,13.5a3.66,3.66,0,0,1,.26-1.33,3.48,3.48,0,0,1,.81-5.86,4,4,0,0,1,7.86,0,3.48,3.48,0,0,1,.81,5.86Z"
                                  style={{
                                    fill: "none",
                                    stroke: "#18DA8E",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                  }}
                                ></path>
                                <path
                                  id="secondary"
                                  d="M12,21V11M10,21h4"
                                  style={{
                                    fill: "none",
                                    stroke: "#fff",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                  }}
                                ></path>
                              </svg>
                            </button>
                          )}
                          <div
                            className={`button-caption el ${
                              showEditModal === _id ? "active" : ""
                            }`}
                          >
                            Edit This Shorty
                          </div>
                          <div
                            className={`button-caption gqrc ${
                              showQrModal === _id ? "active" : ""
                            }`}
                          >
                            Generate QR Code
                          </div>
                          <div
                            className={`button-caption dts ${
                              showDeleteModal === _id ? "active" : ""
                            }`}
                          >
                            Delete This Shorty
                          </div>
                          <div className="button-caption dstlt">
                            {linkTree
                              ? "Remove Shorty From Link-In-Bio"
                              : "Add Shorty to Link-In-Bio"}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
                .reverse()
            : `You haven't saved any Shorties yet.`}
          {user?.links.length === 0
            ? `You haven't saved any Shorties yet.`
            : ""}
        </div>
      </div>
      <Footer />
    </>
  );
}

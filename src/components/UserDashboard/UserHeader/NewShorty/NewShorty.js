import LargeButton from "../../../Buttons/LargeButton";
import SmallButton from "../../../Buttons/SmallButton";
import FormSection from "../../../Form/FormSection";
import LinkTreeToggle from "./LinkTreeToggle";

export default function NewShorty({
  setShowNewShortyForm,
  showNewShortyForm,
  setNewUserLink,
  setLinkTreeToggled,
  createUserLink,
  newUserLink,
  linkTreeToggled,
  handleUserLinkChange,
  handleLinkTreeToggle,
}) {
  return (
    <>
      <div id="new-shorty-container">
        <SmallButton
          buttonId="shorty-button"
          buttonClass="new-shorty"
          buttonFunction={() => {
            setShowNewShortyForm(!showNewShortyForm);
            setNewUserLink({
              url: "",
              linkTree: "off",
              title: "",
            });

            setLinkTreeToggled(false);
          }}
          buttonValue="New Shorty"
        />

        <div className={`new-shorty-form ${showNewShortyForm ? "" : "hide"}`}>
          <form onSubmit={createUserLink}>
            <FormSection
              icon={
                <svg viewBox="0 0 24 24">
                  <line
                    className="path-accent"
                    x1="8"
                    y1="12"
                    x2="16"
                    y2="12"
                  ></line>
                  <path
                    className="path-white"
                    d="M10,9A1,1,0,0,0,9,8H4A1,1,0,0,0,3,9v6a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1"
                  ></path>
                  <path
                    className="path-white"
                    d="M14,15a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1"
                  ></path>
                </svg>
              }
              inputType="url"
              inputName="url"
              inputValue={newUserLink.url}
              inputFunction={handleUserLinkChange}
              inputPlaceholder="Paste your URL here..."
            />

            <FormSection
              icon={
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
              inputType="text"
              inputName="title"
              inputValue={newUserLink.title}
              inputFunction={handleUserLinkChange}
              inputPlaceholder="Link description (optional)"
            />

            <LinkTreeToggle
              linkTreeToggled={linkTreeToggled}
              handleUserLinkChange={handleUserLinkChange}
              handleLinkTreeToggle={handleLinkTreeToggle}
            />

            <LargeButton
              buttonFunction={() => {
                setNewUserLink({
                  ...newUserLink,
                  date: new Date().toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  }),
                });
              }}
              buttonValue="Create New Shorty"
            />
          </form>
        </div>
      </div>
    </>
  );
}

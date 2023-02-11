import Input from "../../../Inputs/Input";

export default function LinkTreeToggle({
  linkTreeToggled,
  handleUserLinkChange,
  handleLinkTreeToggle,
}) {
  return (
    <div id="in-linktree-container" className="flex">
      <div className="in-linktree flex">
        <Input
          inputType="checkbox"
          inputName="linkTree"
          inputValue={!linkTreeToggled ? "on" : "off"}
          inputFunction={handleUserLinkChange}
          inputClick={handleLinkTreeToggle}
          required="false"
        />

        <div
          className={`linktree-toggle ${linkTreeToggled ? "toggled" : ""}`}
        />
      </div>
      <div className={`toggle-text ${linkTreeToggled ? "toggled" : ""}`}>
        {linkTreeToggled
          ? "Added to your Link-In-Bio"
          : "Add to your Link-In-Bio"}
      </div>
    </div>
  );
}

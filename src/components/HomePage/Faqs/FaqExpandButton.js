export default function FaqExpandButton({
  setShowQuestion,
  question,
  showQuestion,
}) {
  return (
    <button
      onClick={() => {
        setShowQuestion(question);
      }}
      className={showQuestion === question ? "open" : ""}
    >
      <svg viewBox="0 0 24 24">
        <path
          className="path-white"
          d="M11.84,10H4a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h7.84"
        ></path>
        <path
          className="path-accent"
          d="M11.84,14l-.79,2.66a1,1,0,0,0,1.41,1.2l8.06-5a1.07,1.07,0,0,0,0-1.78l-8.06-5a1,1,0,0,0-1.41,1.2L11.84,10"
        ></path>
      </svg>
    </button>
  );
}

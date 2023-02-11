export default function ActionButton ({
  buttonFunction,
  buttonClass,
  buttonIcon
}) {
  return (
    <button onClick={buttonFunction} className={buttonClass}>
      {buttonIcon}
    </button>
  )
}

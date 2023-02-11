export default function SmallButton ({
  buttonId,
  buttonClass,
  buttonFunction,
  buttonValue
}) {
  return (
    <>
      <button id={buttonId} className={buttonClass} onClick={buttonFunction}>
        {buttonValue}
      </button>
    </>
  )
}

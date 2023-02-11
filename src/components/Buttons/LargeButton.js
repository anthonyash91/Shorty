export default function LargeButton ({
  buttonId,
  buttonClass,
  buttonFunction,
  buttonValue,
  disable
}) {
  return (
    <>
      <button
        type='submit'
        id={buttonId}
        className={buttonClass}
        onClick={buttonFunction}
        disabled={disable}
      >
        {buttonValue}
      </button>
    </>
  )
}

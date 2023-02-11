export default function ShortenInput ({
  inputType,
  inputName,
  inputValue,
  inputFunction,
  inputPlaceholder
}) {
  return (
    <input
      type={inputType}
      name={inputName}
      value={inputValue}
      onChange={inputFunction}
      placeholder={inputPlaceholder}
      required
    />
  )
}

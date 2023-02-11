export default function Input({
  inputType,
  inputName,
  inputValue,
  inputFunction,
  inputPlaceholder,
  inputClick,
  required,
}) {
  return (
    <>
      {required === "true" ? (
        <input
          type={inputType}
          name={inputName}
          value={inputValue}
          onChange={inputFunction}
          placeholder={inputPlaceholder}
          onClick={inputClick}
          required
        />
      ) : (
        <input
          type={inputType}
          name={inputName}
          value={inputValue}
          onChange={inputFunction}
          placeholder={inputPlaceholder}
          onClick={inputClick}
        />
      )}
    </>
  );
}

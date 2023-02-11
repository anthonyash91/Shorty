import Input from '../Inputs/Input'

export default function FormSection ({
  formClass,
  icon,
  inputType,
  inputName,
  inputValue,
  inputFunction,
  inputPlaceholder
}) {
  return (
    <div className={`form-section flex ${formClass}`}>
      <div className='form-icon flex'>{icon}</div>
      <Input
        inputType={inputType}
        inputName={inputName}
        inputValue={inputValue}
        inputFunction={inputFunction}
        inputPlaceholder={inputPlaceholder}
        required='true'
      />
    </div>
  )
}

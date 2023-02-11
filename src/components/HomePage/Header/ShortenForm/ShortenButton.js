export default function ShortenButton({ buttonFunction, buttonIcon }) {
  return <button onClick={buttonFunction}>{buttonIcon}</button>;
}

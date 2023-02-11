export default function LinkHeader ({ date, clicks }) {
  return (
    <div className='link-date-clicks flex'>
      {date} <span>•</span> {clicks} click
      {clicks === 1 ? '' : 's'}
    </div>
  )
}

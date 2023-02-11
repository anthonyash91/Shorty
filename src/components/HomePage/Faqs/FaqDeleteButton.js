export default function FaqDeleteButton ({ deleteFaq, id }) {
  return (
    <span
      className='delete-faq'
      onClick={() => {
        deleteFaq(id)
      }}
    >
      Delete FAQ
    </span>
  )
}

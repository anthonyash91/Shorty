import { useState } from "react";

export default function FaqForm({ user, getFaqs }) {
  const [newFaq, setNewFaq] = useState({});
  const [newFaqContent, setNewFaqContent] = useState({
    question: "",
    answer: "",
  });

  const createFaq = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/faqs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newFaqContent }),
      });
      const data = await response.json();
      setNewFaq(data);
      getFaqs();
      setNewFaqContent({
        question: "",
        answer: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleFaqChange = (evt) => {
    setNewFaqContent({ ...newFaqContent, [evt.target.name]: evt.target.value });
  };

  return (
    <>
      {user?._id === "63dd727d39443928028adf8a" ? (
        <>
          <form onSubmit={createFaq}>
            <div className="form-section flex">
              <input
                type="text"
                name="question"
                value={newFaqContent.question}
                onChange={handleFaqChange}
                placeholder="Question"
                required
              />
            </div>
            <div className="form-section last-section flex">
              <textarea
                type="text"
                name="answer"
                value={newFaqContent.answer}
                onChange={handleFaqChange}
                placeholder="Answer"
                className="input-answer"
              />
            </div>

            <button>Add New FAQ</button>
          </form>
        </>
      ) : (
        ""
      )}
    </>
  );
}

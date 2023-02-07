import { useState, useEffect } from "react";
import FaqDeleteButton from "./FaqDeleteButton";
import FaqExpandButton from "./FaqExpandButton";
import FaqForm from "./FaqForm";

export default function Faqs({ user }) {
  const [showQuestion, setShowQuestion] = useState("");
  const [faqs, setFaqs] = useState([]);

  const getFaqs = async () => {
    try {
      const response = await fetch(`/api/faqs`);
      const data = await response.json();
      setFaqs(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteFaq = async (id) => {
    try {
      const response = await fetch(`/api/faqs/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      getFaqs();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFaqs();
  }, []);

  return (
    <div id="faqs-container" className="flex">
      <div id="faqs-header">Frequently Asked Questions</div>

      <div id="faqs">
        {faqs?.map((faq, i) => {
          const { question, answer, _id } = faq;
          return (
            <div
              className={`faq-container ${
                showQuestion === question ? "open" : ""
              }`}
              key={i}
            >
              <div className="question flex">
                <div>
                  {faq.question}
                  {user?._id === "63dd727d39443928028adf8a" ? (
                    <FaqDeleteButton deleteFaq={deleteFaq} id={_id} />
                  ) : (
                    ""
                  )}
                </div>
                <FaqExpandButton
                  setShowQuestion={setShowQuestion}
                  question={question}
                  showQuestion={showQuestion}
                />
              </div>
              <div className="answer">{answer}</div>
            </div>
          );
        })}

        <FaqForm user={user} getFaqs={getFaqs} />
      </div>
    </div>
  );
}

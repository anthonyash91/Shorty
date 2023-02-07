import { useState, useEffect } from "react";
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
                    <span
                      className="delete-faq"
                      onClick={() => {
                        deleteFaq(_id);
                      }}
                    >
                      Delete FAQ
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <button
                  onClick={() => {
                    setShowQuestion(question);
                  }}
                  className={showQuestion === question ? "open" : ""}
                >
                  <svg viewBox="0 0 24 24">
                    <path
                      className="path-white"
                      d="M11.84,10H4a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h7.84"
                    ></path>
                    <path
                      className="path-accent"
                      d="M11.84,14l-.79,2.66a1,1,0,0,0,1.41,1.2l8.06-5a1.07,1.07,0,0,0,0-1.78l-8.06-5a1,1,0,0,0-1.41,1.2L11.84,10"
                    ></path>
                  </svg>
                </button>
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

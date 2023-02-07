import { useState, useEffect } from "react";

export default function Faqs() {
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

  useEffect(() => {
    getFaqs();
  }, []);

  return (
    <div id="faqs-container" className="flex">
      <div id="faqs-header">Frequently Asked Questions</div>

      <div id="faqs">
        {faqs
          ? faqs.map((faq, i) => {
              return (
                <div
                  className={`faq-container ${
                    showQuestion === faq.question ? "open" : ""
                  }`}
                >
                  <div className="question flex">
                    {faq.question}
                    <button
                      onClick={() => {
                        setShowQuestion(faq.question);
                      }}
                      className={showQuestion === faq.question ? "open" : ""}
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
                  <div className="answer">{faq.answer}</div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

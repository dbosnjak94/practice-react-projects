import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const { waiting, loading, questions, index, correct, nextQuestion } =
    useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
  const { question, incorrect_answers, correct_answers } = questions[index];
  const answers = [...incorrect_answers, correct_answers];
  return (
    <main>
      {/* <Modal /> */}
      <section className="quiz">
        <p className="correct-answers">
          correct_answers: {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />

          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
                  dangerouslySetInnerHTML={{ __html: answer }}
                ></button>
              );
            })}
          </div>
        </article>
        <button
          className="next-question"
          onClick={() => {
            nextQuestion();
          }}
        >
          next question
        </button>
      </section>
    </main>
  );
}

export default App;

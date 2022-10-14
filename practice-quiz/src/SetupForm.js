import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form action="setup-form">
          {/* amount */}
          <div className="form-control">
            <label htmlFor="amount"> number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
            />
          </div>
          <div className="form-contorl">
            {/* category */}
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category "
              className="form-input"
            ></select>
          </div>
          {error && (
            <p>can't generate questions, please try different options</p>
          )}
          <button
            type="submit"
            onClick={handleSubmit}
            className="submit-btn"
          ></button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;

import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleQuestion = () => {
    setIsHidden(!isHidden);
  };
  return (
    <article className='question'>
      <button className='btn' onClick={() => toggleQuestion()}>
        {!isHidden ? <AiOutlinePlus /> : <AiOutlineMinus />}
      </button>
      <h3>{title}</h3>
      <h4>{isHidden ? info : '...'}</h4>
    </article>
  );
};

export default Question;

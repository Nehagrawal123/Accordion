import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
    const[showInfo, setShowInfo] = useState(false);
    const buttonFunctionality = ()=>{
        return setShowInfo(!showInfo);
    }
  return (
    <article className='question'>
        <header>
            <h4>{title}</h4>
            <button className='btn' onClick={buttonFunctionality}>
                {showInfo ? <AiOutlineMinus></AiOutlineMinus> : <AiOutlinePlus></AiOutlinePlus>}
            </button>
        </header>
        {showInfo && <p>{info}</p>}
    </article>
  )
};

export default Question;
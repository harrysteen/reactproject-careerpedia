import React, { useState } from 'react';
import img from "../../../assets/arrow.png";
import "./Faq.css";

const Faq = () => {
    const data = [
        {
            question: "Question1 ?",
            Answers: " What's the difference between a passport and a visa, and do I need both passport and a visa, and do I need both? What's the difference between a passport and a visa, and do I need both passport and a visa "
        },
        {
            question: "Question2 ?",
            Answers: "What's the difference between a passport and a visa, and do I need both passport and a visa, and do I need both? What's the difference between a passport and a visa, and do I need both passport and a visa "
        },
        {
            question: "Question3 ?",
            Answers: " bad boy What's the difference between a passport and a visa, and do I need both  V passport and a visa, and do I need both What's the difference between a passport and a visa, and do I need both passport and a visa? "
        },
        {
            question: "Question4  ?",
            Answers: " bad girl  What's the difference between a passport and a visa, and do I need both? passport and a visa, and do I need both What's the difference between a passport and a visa, and do I need both passport and a visa"
        }
    ];

    const [selected, setSelected] = useState(null);

    const handleSelect = (i) => {
        if (selected === i) {
            setSelected(null);
        } else {
            setSelected(i);
        }
    };

    return (
        <>
            <h1 className='heading'>Faq's</h1>
            <section className='faq'>
                <div className='item'>
                    {data.map((item, i) => (
                        <div className='wrapper' key={i}>
                            <div className='question' onClick={() => handleSelect(i)}>
                                <h3>{item.question}</h3>
                                <img src={img} alt='kk' width={30} className={selected === i ? "reverse" : ""} />
                            </div>
                            <div className={selected === i ? "answers show" : "answers"}>
                                <p>{item.Answers}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Faq;

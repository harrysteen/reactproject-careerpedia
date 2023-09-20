import React, { useState } from 'react';
import './calltoaction.css';
import Models from './Models'; // Import your modal component here

const Calltoaction = () => {
    const [model, setModel] = useState(false);

    const handleClick = () => {
        setModel(!model);
    };
 
    return (
        <>
            <section className='calltoaction'>
                <h2>Hurry up, Book your Tickets</h2>
                <button onClick={handleClick}>Know more!</button>
            </section>
            {model && <Models  model={model} handleClick={handleClick}/>   } 
        </>
    );
}

export default Calltoaction;

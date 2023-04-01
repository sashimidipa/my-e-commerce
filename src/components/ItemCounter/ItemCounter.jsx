import React, { useState } from 'react';
import './ItemCounter.css';
export const ItemCounter = () => {
    const [counter, setCounter] = useState(0)

    const addCount = () => {
        setCounter(counter + 1);
    };

    const removeCount = () => {
        if (counter > 0) {
            setCounter(counter - 1);}
    };

    const resetCount = () => {
        setCounter(0);
    };



    return (
        <>
            <div className='btn'>
                <button onClick={removeCount}>➖</button>
                <h4>Cantidad: {counter}</h4>
                <button onClick={addCount}>➕</button>
            </div>
            <div className='btn'>
            <button className='butn' onClick={resetCount}>🔁</button>
            </div>
        </>
    )
}



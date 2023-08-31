import React, { useState } from 'react';

const EjemploUseState = () => {

    const firstValue = 0
    // let count = 0
    const [count, setCount] = useState(firstValue)
    // ! No modificamos el estado,  si no que lo actualizamos con uno nuevo

    const addCount = () => {
        setCount(num => num + 1)
        // [...Array, nuevoValor]
    }

    
    

    return (
        <div>
            <h1>el valor del contador es: {count} </h1>
            <button onClick={addCount}>aumentar cantidad</button>
            <button onClick={() => setCount(count - 1)}> restar cantidad</button>
            <button onClick={() => setCount(firstValue)}> reset </button>
        </div>
    );
}

export default EjemploUseState;

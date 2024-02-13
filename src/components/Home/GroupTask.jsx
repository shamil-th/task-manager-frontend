import React, { useRef } from 'react';

const GroupTask = () => {
    const inputRef = useRef(null);

    const createField = () => {
        const newField = document.createElement("div");
        newField.innerHTML = `
            <input type="text">
            <button>-</button>
        `;
        inputRef.current.appendChild(newField);
    };

    return (
        <div>
            <h2></h2>
            <input type="text" />
            <button onClick={createField}>+</button>
            <div ref={inputRef}></div>
        
        </div>
    );
};

export default GroupTask;

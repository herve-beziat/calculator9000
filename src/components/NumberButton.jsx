import React from "react";

function NumberButton({number}){
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numberButtons = numbers.map(function(number) {
        return (
            <button key={number} className="number-button" onClick={function() { handleNumberClick(number); }}>
            {number}
            </button>
        );
    });
    return numberButtons;
}


export default NumberButton;
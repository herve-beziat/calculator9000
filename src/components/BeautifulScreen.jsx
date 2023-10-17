import React from "react";

function BeautifulScreen({currentInput, result}){
    return (
        <>
            <div className="beautiful-screen"></div>
            <div className="input">{currentInput}</div>
            <div className="result">{result}</div>
        </>

    );
}

export default BeautifulScreen;
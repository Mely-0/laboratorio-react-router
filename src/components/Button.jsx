import React from 'react'

export const Button = () => {

    const handleOnClick = () => {
        window.location.href= "/";
    }

    return (
        <div>
        <button style={{marginBottom: "10px"}} onClick={handleOnClick} >MENU</button>
        </div>
    );
}
export default Button;
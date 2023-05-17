import React from "react";
import './DarkMode.css';


const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', "dark")
    }
    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', "light")
    }

    const toggleTheme = evt => {
        if(evt.target.checked) setDarkMode()
    }
    return (
        <div>
            <input 
            type="checkbox"
            id="darkmode-toggle"
             />
        </div>
    )
}
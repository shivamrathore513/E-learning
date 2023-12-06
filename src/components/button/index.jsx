import React from "react";
import useTheme from "../../context/Theme.context";


export default function Themebutton(){
  
    const { theme, toggleTheme } = useTheme();
    return(
       <>
       <button onClick={toggleTheme}>Toggle Theme</button>
       </>
    );
}
import React, {useState} from "react";
import Dropdown from "./Dropdown"

function Navbar (){
    const [click, setclick] = useState(false);

    const handleClick = ( ) => setclick(!click)




    return(
        <>
        
        <nav className="navbar">

        <div className="menu-icon" onClick={handleClick}>
            <i className={click? 'fas fa-times' : 'fas fa-bars'}/>

        </div>


        </nav>
        
        </>
    )
}
import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
// import VerticalCardSlider from './VerticalCardSlider';






export const datapassing = createContext(null)

const Parentcomponent = () => {

   
 const [navbar, setnavbar] = useState([
        {
            id: 1,
            title: "Home",
            data: [
                { tit: "Home01", path: "/AllSarees" },
                { tit: "Home02", path: "/SilkSarees", },
                ],
            show: false,
            cName: "nav-item"
        },
        {
            id: 2,
            title: "About",
            path:'/Aboutus',
            show: false,
            cName: "nav-item"
        },
        {
            id: 3,
            title: "Service",

            data: [
                { tit: "Service", path: "/Boys-Girls" },
                { tit: "Service Single", path: "/infant" },
               ],

            show: false,
            cName: "nav-item"
        },
        {
            id: 4,
            title: "Blog",
            data: [
                { tit: "Blog", path: "/Jewellary" },
                { tit: "Shop", path: "/MenAccessories" },
                { tit: "Shop Details", path: "/WomenAccessories" },
                 ],
            show: false,
            cName: "nav-item"
        },
        {
            id: 5,
            title: "Contact",
            path:'/Contactus',
            show: false,
            cName: "nav-item"
        }
    ])


    return (
           
        <BrowserRouter>
        <datapassing. Provider value={{navbar, setnavbar}}>
       

        <Routes>
            <Route path='/' element={<Home/>} />
           
        </Routes>

        </datapassing. Provider>
        
        
        
        
        
        </BrowserRouter>
    );
}

export default Parentcomponent;

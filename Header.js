import React, { useContext } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./CSS/Header.css"
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { IoMdTimer } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineSearch } from "react-icons/hi";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { datapassing } from './Parentcomponent';

const Header = () => {

  let getdetails = useContext(datapassing)
  let {navbar, setnavbar} = getdetails
    return (
        <div> 
            <div id='addressdiv'>

                    <div id='leftaddressdiv'>
                       
                         <div style={{fontSize:'17px', fontFamily:'sans-serif'}}>  <p> <FaLocationDot /> 908 Radic Road, NewYork, USA.</p></div>
                         <div style={{fontSize:'17px', fontFamily:'sans-serif'}}><p><MdEmail /> example@example.com</p></div>

                     
                    </div>

                    <div id='righticonsdiv'>

                        <div> <FaFacebookF  style={{fontSize:'16px'}}/></div>
                        <div><FaTwitter  style={{fontSize:'16px'}}/></div>
                        <div><FaGooglePlusG  style={{fontSize:'20px'}}/></div>
                        <div><FaLinkedinIn  style={{fontSize:'16px'}}/></div>
 
                    </div>

            </div>

        <div id='navbar2'>
            <div id='navleft'>
                    <div></div>
            </div>

            <div id='navright'>
                <div id='navdiv1'>
                    <div><img src={require(`../images/emergencycall.png`)} alt=""  style={{height:'35px', width:'35px', }}/></div>
                    <div id='navdiv1heading'> <b>Free Call to us :</b> <br />  +5 (87) 8695-312</div>
                </div>
                <div id='navdiv1'>
                    <div><img src={require(`../images/flaticon_gauge.png`)} alt="" style={{height:'35px', width:'35px', }}/> </div>
                    <div id='navdiv1heading'><b>Open Time:</b>  <br /> Mon-Sat(8am - 6pm)</div>
                </div>
                <div id='navdiv1'><button id='quote'><b>Get A Quote</b></button></div>
            </div>
            
        </div>

        <div id='navbar3'>

            <div id='leftnav'>


                  <NavDropdown title="Home" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Home1">Home01</NavDropdown.Item>               
              <NavDropdown.Item href="/Home2"> Home02 </NavDropdown.Item>              
            </NavDropdown>

            <NavDropdown title="About" id="basic-nav-dropdown"> 
              <NavDropdown.Item href="/about">About</NavDropdown.Item>               

            </NavDropdown>

            <NavDropdown title="Service" id="basic-nav-dropdown">
              <NavDropdown.Item href="/service">Service </NavDropdown.Item>               
              <NavDropdown.Item href="/servicesingle"> Service Single </NavDropdown.Item>              
            </NavDropdown>

            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">About</NavDropdown.Item>               
              <NavDropdown.Item href="/shop"> Shop </NavDropdown.Item>      
              <NavDropdown.Item href="/shopdetail"> Shop Detail </NavDropdown.Item>              

            </NavDropdown>

             <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="/blog">Blog </NavDropdown.Item>               
              <NavDropdown.Item href="/blogdetail"> Blog Detail </NavDropdown.Item>              
            </NavDropdown>

            <NavDropdown title="Contact" id="basic-nav-dropdown">   
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>               

            </NavDropdown>



            </div>
            <div id='rightnav'>
                 <div id='searchicondiv'><HiOutlineSearch id='search'/></div>
             
            </div>

        </div>

            
        </div>
    );
}

export default Header;

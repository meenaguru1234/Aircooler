import React from 'react';
import "./CSS/Footer.css";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footerarea = () => {
  return (
    <div>

      <div id='smallcontact' style={{
        height: '150px', width: '100%', display: 'flex', justifyContent: 'center', position:'absolute',
        overflow:'hidden'
      }}>
        <div style={{
          border: '1px solid black', backgroundColor: '#001064',
          height: '120px', width: '70%', borderRadius: '100px', display:'flex', justifyContent:'center',
        }}>
          <div id='overallcontainerdiv' style={{
            height: '80%', width: '90%', display: 'flex', justifyContent: 'space-evenly',
            marginTop: '10px', marginLeft: '10px'
          }}>

            <div style={{
              color: 'white', display: 'flex', justifyContent: 'left',
              width: '40%', height: '100px', alignItems: 'center',
            }}>

              <div id='btnmailph' style={{
                border: '1px solid white', height: '70px', width: '70px',
                borderRadius: '50px', alignItems: 'center', display: 'flex', justifyContent: 'center',
                alignItems: 'center'
              }}>
                <MdMail id='mailbtn' style={{}} />
              </div> &nbsp;&nbsp;&nbsp;
              <div><h4>SignUp For Newsletter</h4></div>
            </div>
            <div id="vertical-line" style={{}}>

            </div>
            <div style={{
              color: 'white', marginTop:'10px',
              height:'300px',width:'50%',  alignItems: 'center',
            }}>
              <div class="input-button-container">
                <input type="text" placeholder='Your Mail Here...' name='mail' class="input-box"/>
                <button type="submit" class="right-button">Subscribe</button>
              </div>


            </div>
            </div>
        </div>

      </div>

      <div style={{ height: '900px', width: '100%', }}>
        <div id='footerdiv' style={{
          height: '500px', width: '100%',
          display: 'flex', justifyContent: 'center',
          backgroundColor: 'rgb(1, 10, 53)'
        }}>

          <div style={{
            height: '400px', width: '85%', marginTop: '100px', display: 'flex',
            justifyContent: 'space-around'
          }}>
            <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'space-around' }}>
              <div style={{ height: '100%', width: '25%', }} >

                <div style={{ width: '90%', display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                  <div>
                    <div style={{ width: '90%', height: '80px', color: 'white', textAlign: 'left', marginLeft: '10px' }}>
                      <div id='navleftside'>
                        <img id='navleftimg' alt="" src={require(`../images/footer-logo.png`)}
                          style={{ color: 'white', display: 'flex', justifyContent: 'center', }} />
                      </div>
                    </div><br />
                    <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '16px', fontFamily: 'sans-serif', fontWeight: '400', textAlign: 'left', marginLeft: '10px' }}>
                      <FaHome style={{ color: '#ff800f' }} /> &nbsp; 564, Manon road, F1 456 Caron Town. Office No 3456</div><br />
                    <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '16px', fontFamily: 'sans-serif', fontWeight: '400', textAlign: 'left', marginLeft: '10px' }}>
                      <FaPhoneAlt style={{ color: '#ff800f', fontSize: '15px' }} /> &nbsp; 234-5825852763</div><br />
                    <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '16px', fontFamily: 'sans-serif', fontWeight: '400', textAlign: 'left', marginLeft: '10px' }}>
                      <CiMail style={{ color: '#ff800f', fontSize: '20px' }} /> &nbsp; info@example.com</div><br />
                  </div>

                </div>
              </div>


              <div style={{ height: '100%', width: '25%', }} >

                <div style={{ width: '90%', display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                  <div>
                    <div style={{ color: 'white', fontSize: '20px', fontFamily: 'sans-serif', fontWeight: '600', textAlign: 'left', marginLeft: '10px' }}>Links</div><br />

                    <div id='hoverlink' style={{ fontSize: '16px', fontFamily: 'sans-serif', fontWeight: '400', textAlign: 'left', marginLeft: '10px' }}>A/c installation</div><br />
                    <div id='hoverlink' style={{ fontSize: '16px', fontFamily: 'sans-serif', fontWeight: '400', textAlign: 'left', marginLeft: '10px' }}>FAQs</div><br />
                    <div id='hoverlink' style={{ fontSize: '16px', fontFamily: 'sans-serif', fontWeight: '400', textAlign: 'left', marginLeft: '10px' }}>About us</div><br />
                    <div id='hoverlink' style={{ fontSize: '16px', fontFamily: 'sans-serif', fontWeight: '400', textAlign: 'left', marginLeft: '10px' }}>Contact us</div><br />
                    <div id='hoverlink' style={{ fontSize: '16px', fontFamily: 'sans-serif', fontWeight: '400', textAlign: 'left', marginLeft: '10px' }}>Home</div><br />

                  </div>

                </div>
              </div>


              <div style={{ height: '100%', width: '25%', }} >

                <div style={{ width: '90%', display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                  <div>
                    <div style={{ color: 'white', fontSize: '20px', fontFamily: 'sans-serif', fontWeight: '600', textAlign: 'left', marginLeft: '10px' }}>About Us.</div><br />

                    <div id='aboutuslink' style={{ fontSize: '16px', fontFamily: 'sans-serif', fontWeight: '400', textAlign: 'left', marginLeft: '10px' }}>About us</div><br />
                    <div id='aboutuslink' style={{ fontSize: '16px', fontFamily: 'sans-serif', fontWeight: '400', textAlign: 'left', marginLeft: '10px' }}>Blog</div><br />
                    <div id='aboutuslink' style={{ fontSize: '16px', fontFamily: 'sans-serif', fontWeight: '400', textAlign: 'left', marginLeft: '10px' }}>Contact us</div><br />
                    <div id='aboutuslink' style={{ fontSize: '16px', fontFamily: 'sans-serif', fontWeight: '400', textAlign: 'left', marginLeft: '10px' }}>Sign in</div><br />
                    <div id='aboutuslink' style={{ fontSize: '16px', fontFamily: 'sans-serif', fontWeight: '400', textAlign: 'left', marginLeft: '10px' }}>My Account</div><br />

                  </div>

                </div>
              </div>



              <div style={{ height: '100%', width: '25%', }} >

                <div style={{ width: '90%', display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                  <div>
                    <div style={{ color: 'white', fontSize: '20px', fontFamily: 'sans-serif', fontWeight: '600', textAlign: 'left', marginLeft: '10px' }}>Contact us</div><br />

                    <div style={{ color: 'white', fontSize: '16px', fontFamily: 'sans-serif', fontWeight: '400', textAlign: 'left', marginLeft: '10px' }}>
                      <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum sites still in their</p></div><br />
                    <div id='righticonsdiv' style={{ display: 'flex', justifyContent: 'space-around', width: '90%', height: '100px' }}>

                      <div id='icondiv' style={{ color: 'rgba(255, 255, 255, 0.6)' }}> <FaFacebookF id='iconid' /></div>
                      <div id='icondiv' style={{ color: 'rgba(255, 255, 255, 0.6)' }}>  <FaTwitter id='iconid' /></div>
                      <div id='icondiv' style={{ color: 'rgba(255, 255, 255, 0.6)' }}>  <FaLinkedinIn id='iconid' /></div>
                      <div id='icondiv' style={{ color: 'rgba(255, 255, 255, 0.6)' }}>  <FaPinterest id='iconid' /></div>

                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='finalfooter' style={{ border: '1px solid black', backgroundColor: 'rgba(4, 4, 117, 1)', height: '100px', width: '100%' }}>
          <div id='leftsidefooter' style={{ width: '100%', height: '100px', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '70%', display: 'flex', justifyContent: 'left', gap: '16px', marginTop: '25px', marginLeft: '10%' }}>
              <div id='termsdiv'>Term & Conditions</div>
              <div id='termsdiv'>Privacy Policy</div>
              <div id='termsdiv'>Sitemap</div>
            </div>
            <div id='termsdiv' style={{ width: '70%', display: 'flex', justifyContent: 'right', marginTop: '25px', marginRight: '10%' }}>© 2020, Cooly. all right reserved .</div>

          </div>

          {/* <div id='rightsidefooter' style={{width:'30%', height:'200px', display:'flex', justifyContent:'center'}}>
                  <div style={{width:'100%', display:'flex', justifyContent:'right',gap:'16px', marginTop:'25px', marginRight:'20%'}}>
                  <div id='termsdiv'>© 2020, Cooly. all right reserved .</div>
                </div>
                </div> */}

        </div>
      </div>

    </div>
  );
}

export default Footerarea;

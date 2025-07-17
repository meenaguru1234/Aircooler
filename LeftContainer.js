import React from 'react';
import Header from './Header';
import "./CSS/Home.css"
import "./CSS/Header.css"
import Carousel from 'react-bootstrap/Carousel';
import UncontrolledExample from './UncontrolledExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
// import Button from 'react-bootstrap/Button';
import { MdMail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import SlideSlick from './SlideSlick';
import Projectdeals from './Projectdeals';
import Projectdealspage from './Projectdeals';
import Gridimage from './Gridimage';
import History from './History';
// import LeftContainer from './LeftContainer';

const LeftContainer = () => {
    const gridimage = [
        
                {
                    id:1,
                    image:"../images/smallgrid/01.png"
                },
                {
                    id: '2',
                    image:"../images/smallgrid/02.png"
                },
        
                {
                    id: '3',
                    image: "../images/smallgrid/03.png",
                    
                },
                 {
                    id: '4',
                    image: "../images/smallgrid/04.png",

                },
                {
                    id: '5',
                image: "../images/smallgrid/05.png",

                },
                {
                    id: '6',
                    image: "../images/smallgrid/06.png",

                },
              
            ]
    const services = [

        {
            id: '1',
            image: "../images/gridicons/setup.png",
            title: 'HVAC Design Installation',
            content: 'Lorem ipsum dolor sit amet, cteturs adipiscing elit sedoeiusincididunt ut labore et doloremagna.'
        },
        {
            id: '2',
            image: "../images/gridicons/customer_service.png",
            title: 'Advice Consultation',
            content: 'Lorem ipsum dolor sit amet, cteturs adipiscing elit sedoeiusincididunt ut labore et doloremagna.'
        },

        {
            id: '3',
            image: "../images/gridicons/nohinddenfee.png",
            title: 'No hidden fees',
            content: 'Lorem ipsum dolor sit amet, cteturs adipiscing elit sedoeiusincididunt ut labore et doloremagna.'
        },
        {
            id: '4',
            image: "../images/gridicons/qualitytesting.jpeg",
            title: 'Home Air Quality Testing',
            content: 'Lorem ipsum dolor sit amet, cteturs adipiscing elit sedoeiusincididunt ut labore et doloremagna.'
        },
        {
            id: '5',
            image: "../images/gridicons/heatingservices.png",
            title: 'Heating Services',
            content: 'Lorem ipsum dolor sit amet, cteturs adipiscing elit sedoeiusincididunt ut labore et doloremagna.'
        },
        {
            id: '6',
            image: "../images/gridicons/setting.PNG",
            title: 'Other Services',
            content: 'Lorem ipsum dolor sit amet, cteturs adipiscing elit sedoeiusincididunt ut labore et doloremagna.'
        },

    ]

    const facility = [

        {
            id: '1',
            image: "../images/gridicons/customerservice.jpeg",
            title: '24X7 Support Services',
            content: 'Lorem ipsum dolor sit amet, cteturs adipiscing elit sedoeiusincididunt ut labore et doloremagna.'
        },
        {
            id: '2',
            image: "../images/gridicons/otherservice.png",
            title: 'Good Performance',
            content: 'Lorem ipsum dolor sit amet, cteturs adipiscing elit sedoeiusincididunt ut labore et doloremagna.'
        },

        {
            id: '3',
            image: "../images/gridicons/setup.png",
            title: 'Responsibility',
            content: 'Lorem ipsum dolor sit amet, cteturs adipiscing elit sedoeiusincididunt ut labore et doloremagna.'
        },



    ]
    return (
        <div>
            <div id='leftsubcontainer'
                        style={{
                            // border: '1px solid blue',
                            height: '1000vh',
                            backgroundColor:'green'

                        }}  >
                        <div id='headernav'
                            style={{
                                // border:'1px solid black',
                                height: '190px',
                                width: '100%'
                            }}> <Header /> </div>

                        <div id='headerslide'
                            style={{
                                backgroundColor: 'skyblue',
                                height: '700px',
                                width: '100%',
                                border: '1px solid black',
                            }}>
                            <UncontrolledExample /><br /><br />
                        </div>

                        <div style={{ height: '580px', marginTop: '-250px' }}>

                            <SlideSlick />

                        </div>


                        <div id='videoandcontent' style={{
                            height: '700px', width: '100%',
                            display: 'flex', justifyContent: 'space-evenly'
                        }}>

                            <div id='videoarealeft' style={{
                                // border:'1px solid black',
                                height: '700px',
                                width: '50%'
                            }}>
                                <div style={{ height: '500px', width: '95%' }}>

                                    <div class="about-image">
                                        {/* <div id='playicon'><FaPlay /></div> */}
                                        <div className="vibrate-container">
                                            <div className="vibrate-ring"></div>
                                            <button className="play-button"><FaPlay /></button>
                                        </div>
                                        <div class="hover">
                                            <a href="https://www.youtube.com/watch?v=s6NHxfKUkUo" rel="noopener noreferrer" target="_blank" class="btn-ripple-animate video-play-btn video mfp-iframe">
                                                <i class="fa fa-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id='contentarearight' style={{
                                //  border:'1px solid black',
                                height: '700px',
                                width: '50%'
                            }}>

                                <h5 style={{
                                    textAlign: 'left',
                                    // border:'1px solid black', 
                                    justifyContent: 'left',
                                    margin: '0', color: '#001064'
                                }}> <b style={{ color: 'orangered' }}>|</b> ABOUT THE COOLY <b style={{ color: 'orangered' }}>|</b></h5> <br />

                                <p style={{
                                    fontSize: '40px',
                                    lineHeight: '46px',
                                    fontWeight: '700',
                                    marginTop: '20px',
                                    color: '#001064'
                                }}> <b>
                                        Well done of 18 years experience cooly agency
                                    </b>
                                </p>
                                <br />

                                <div style={{ padding: '20px' }}>
                                    <button id='btnstandser' > <FaPlus id='FaPlus' style={{
                                        border: '1px solid black', backgroundColor: '#001064', color: 'white',
                                        borderRadius: '20px'


                                    }} /> All Standard Services</button>
                                </div>

                                <div style={{ padding: '20px' }}>
                                    <button id='btnstandser' > <FaPlus style={{
                                        border: '1px solid black', backgroundColor: '#001064', color: 'white',
                                        borderRadius: '20px'

                                    }} /> 18+ Years Experience</button>
                                </div>
                                <div style={{ padding: '20px' }}>
                                    <button id='btnstandser' > <FaPlus style={{
                                        border: '1px solid black', backgroundColor: '#001064', color: 'white',
                                        borderRadius: '20px'


                                    }} /> Online Schedule</button>
                                </div>
                                <div style={{ padding: '20px' }}>
                                    <button id='btnstandser' > <FaPlus style={{
                                        border: '1px solid black', backgroundColor: '#001064', color: 'white',
                                        borderRadius: '20px'


                                    }} />Financing Available</button>
                                </div>
                                <div style={{ padding: '20px' }}>
                                    <button id='btnstandser1' > More About Here</button>
                                </div>

                            </div>


                        </div>
                        <br />
                        <div style={{
                            border: '1px solid black',
                            backgroundColor: '#001064',
                            height: '300px',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            // marginTop:'60px',
                            padding: '120px'
                        }}>

                            <div>
                                <h4 style={{
                                    textAlign: 'left',
                                    // border:'1px solid black', 
                                    justifyContent: 'left', color: 'white',
                                    margin: '0   '
                                }}> <b style={{ color: 'orangered' }}>|</b>
                                    Do you have any questions?
                                    <b style={{ color: 'orangered' }}>|</b></h4> <br />

                            </div>
                            <div >
                                <button id='btnaskhere1' > Ask Here</button>
                            </div>

                        </div>

                        <div style={{
                            // border:'1px solid black',
                            height: '1000px',
                            width: '100%'
                        }}>

                            <p style={{

                                // border:'1px solid black', 
                                justifyContent: 'center',
                                textAlign: 'center',
                                marginTop: '100px',
                                // marginLeft:'550px',
                                margin: '0', color: '#001064',
                                fontSize: '18px',

                            }}> <b style={{ color: 'orangered' }}>|</b> SERVICES MAINTAINCE
                                <b style={{ color: 'orangered' }}> |</b>
                            </p>

                            <p style={{
                                // border:'1px solid black',
                                width: '650px',
                                display: 'flex',
                                textAlign: 'center',
                                fontSize: '40px',
                                lineHeight: '46px',
                                fontWeight: '700',
                                marginTop: '20px',
                                color: '#001064',
                                //  marginTop:'200px',
                                marginLeft: '350px',
                            }}> <b>
                                    Our HVAC services to the homes and businesses since 1980
                                </b>
                            </p>

                            <div style={{
                                height: '1000px',
                                width: '100%',
                                // border:'1px solid black'

                            }}>
                                <div style={{
                                    height: '800px',
                                    width: '1100px',
                                    // border:'1px solid black',
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3,1fr)',
                                    marginLeft: '20px',
                                    marginTop: '30px',
                                    justifyContent: 'center',
                                    marginLeft: '100px'
                                }}>

                                    {
                                        services.map((v, i) => {

                                            let { image, id, title, content } = v
                                            return (
                                                <div key={i} id='carddesigngrid' style={{
                                                    // border:'1px solid black',
                                                    width: '21rem',
                                                    height: '350px',
                                                    overflowX: 'none', textAlign: 'center',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-evenly',
                                                    backgroundColor: 'white',
                                                    // marginLeft:'40px'
                                                }}>

                                                    <Card id='carddivgrid' style={{
                                                        width: '20rem', height: '350px',
                                                        fontFamily: ' "Roboto", sans-serif  ', color: '#001064'
                                                    }}>
                                                        <br /><br />  <div id='cardimgdiv'
                                                            style={{
                                                                height: '80px', width: '80px', border: '1px solid #d0c6c6', borderRadius: '10px',
                                                                margin: '7px 6rem 20px 7rem', alignItems: 'center'
                                                            }}>
                                                            <Card.Img variant="top" id='cardimggrid'
                                                                src={require(`../images/gridicons/${image.split("../images/gridicons/")[1]}`)}
                                                                style={{ height: '60px', width: '60px' }} /></div>  {/* top right bottom left */}

                                                        <Card.Body>
                                                            <Card.Title><h4 id='cardgridtitle' style={{ fontWeight: 'bold' }}>{v.title}</h4>
                                                            </Card.Title>
                                                            <Card.Text>
                                                                <p style={{ fontSize: '18px' }}> {v.content}</p>
                                                            </Card.Text>
                                                            {/* <a href="#" style={{textDecoration:'none', color:'#ff800f',fontSize:'18px'}}>Read More</a> */}
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>



                        </div>


                        <div id='branchcalcdiv'
                            style={{
                                // border:'1px solid black',
                                height: '600px',
                                width: '100%',
                                // marginTop'
                            }}>
                            <div id='bgcolorhoverdiv'>

                                <div id='hovrcontentdiv'>
                                    <div style={{
                                        // border:'1px solid black',
                                        height: '230px',
                                        width: '220px',
                                        textAlign: 'center'
                                    }}>
                                        <div id='numbdiv'>854</div>
                                        <div style={{ border: '1px solid white', width: '100px', textAlign: 'center', marginLeft: '60px' }}></div>
                                        <div id='titdiv'><b>Customers</b></div>
                                        <div id='subtitdiv'>Customer very satified with our work</div>
                                        <div id='tilte'><h2 style={{ color: '#ff800f' }}>|</h2></div>
                                    </div>

                                    <div style={{
                                        // border:'1px solid black',
                                        height: '230px',
                                        width: '220px',
                                        textAlign: 'center'
                                    }}>
                                        <div id='numbdiv'>30</div>
                                        <div style={{ border: '1px solid white', width: '100px', textAlign: 'center', marginLeft: '60px' }}></div>
                                        <div id='titdiv'><b>Our Branches</b></div>
                                        <div id='subtitdiv'>45 Branches in NewYork, USA</div><br />
                                        <div id='tilte'><h2 style={{ color: '#ff800f' }}>|</h2></div>
                                    </div>

                                    <div style={{
                                        // border:'1px solid black',
                                        height: '230px',
                                        width: '220px',
                                        textAlign: 'center'
                                    }}>
                                        <div id='numbdiv'>22606</div>
                                        <div style={{ border: '1px solid white', width: '100px', textAlign: 'center', marginLeft: '60px' }}></div>
                                        <div id='titdiv'><b>Successfuly works</b></div>
                                        <div id='subtitdiv'>Customer very satified with our work</div>
                                        <div id='tilte'><h2 style={{ color: '#ff800f' }}>|</h2></div>
                                    </div>


                                </div>
                                <div>
                                    <p style={{
                                        color: 'white', fontSize: '20px', textAlign: 'center',
                                        // border:'1px solid white',
                                        marginLeft: '180px',
                                        width: '70%', marginTop: '0'

                                    }}>
                                        Lorem ipsum dolor sit amet. eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</p>
                                </div>
                                <div style={{ border: '1px solid white', width: '70%', marginLeft: '180px' }} /><br />

                                <div id='btncontacydiv'>
                                    <button id='btncontacy'>Contacy us For Conditioning</button>

                                </div>
                            </div>


                        </div>


                        <div style={{
                            // border:'1px solid black',
                            height: '700px',
                            width: '100%',
                            backgroundColor: '#efefef'
                        }}>

                            <p style={{

                                // border:'1px solid black', 
                                justifyContent: 'center',
                                textAlign: 'center',
                                marginTop: '130px',
                                // marginLeft:'550px',
                                margin: '0', color: '#001064',
                                fontSize: '18px',

                            }}> <b style={{ color: 'orangered' }}>|</b> WHY CHOOSE US
                                <b style={{ color: 'orangered' }}> |</b>
                            </p>

                            <p style={{
                                // border:'1px solid black',
                                width: '850px',
                                display: 'flex',
                                textAlign: 'center',
                                fontSize: '40px',
                                lineHeight: '46px',
                                fontWeight: '700',
                                marginTop: '20px',
                                color: '#001064',
                                //  marginTop:'200px',
                                marginLeft: '350px',
                            }}> <b>
                                    Why Choose Our Service Facilities?
                                </b>
                            </p>

                            <div style={{
                                height: '1000px',
                                width: '100%',
                                // border:'1px solid black'

                            }}>
                                <div style={{
                                    height: '800px',
                                    width: '1100px',
                                    // border:'1px solid black',
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3,1fr)',
                                    marginLeft: '20px',
                                    marginTop: '60px',
                                    justifyContent: 'center',
                                    marginLeft: '100px'
                                }}>

                                    {
                                        facility.map((v, i) => {

                                            let { image, id, title, content } = v
                                            return (
                                                <div key={i} id='carddesigngrid' style={{
                                                    // border:'1px solid black',
                                                    width: '21rem',
                                                    height: '350px',
                                                    overflowX: 'none', textAlign: 'center',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-evenly',
                                                    backgroundColor: 'white',
                                                    // marginLeft:'40px'
                                                }}>

                                                    <Card id='carddivgrid' style={{
                                                        width: '21rem', height: '350px',
                                                        fontFamily: ' "Roboto", sans-serif  ', color: '#001064'
                                                    }}>
                                                        <br /><br />  <div id='cardimgdiv'
                                                            style={{
                                                                height: '80px', width: '80px', border: '1px solid #d0c6c6', borderRadius: '10px',
                                                                margin: '7px 6rem 20px 7rem', alignItems: 'center'
                                                            }}>
                                                            <Card.Img variant="top" id='cardimggrid'
                                                                src={require(`../images/gridicons/${image.split("../images/gridicons/")[1]}`)}
                                                                style={{ height: '60px', width: '60px' }} /></div>  {/* top right bottom left */}

                                                        <Card.Body>
                                                            <Card.Title><h4 id='cardgridtitle' style={{ fontWeight: 'bold' }}>{v.title}</h4>
                                                            </Card.Title>
                                                            <Card.Text>
                                                                <p style={{ fontSize: '18px' }}> {v.content}</p>
                                                            </Card.Text>
                                                            {/* <a href="#" style={{textDecoration:'none', color:'#ff800f',fontSize:'18px'}}>Read More</a> */}
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>



                        </div>


                        <div id='projectdeals' style={{ height: '600px', width: '100%', }}>
                            <div>
                                <div style={{position:'relative'}}>
                                <img src={require(`../images/240_F_1533938191_lMUoEgjPvP2i4nt48TwSB3EJ3bRTFyBp.jpg`)}
                                    alt="" style={{ height: '600px', width: '100vw' }} />
                                <div id='innerdesign'
                                style={{
                                    position: 'absolute',
                                    top: 0, bottom: 0, left: 0, right: 0,
                                    backgroundColor:'rgba(0, 51, 153, 0.9)'
                                    // backgroundColor:'white'
                                }} />
                               

                                <Carousel.Caption style={{
                            //  border:'1px solid red',
                                        height:'80%', 
                                        width:'80%',
                                        marginLeft:'-75px',
                                        display:'flex', justifyContent:'center'
                                        }}>
        
        
                            <div className="content" 
                                   style={{
                                       
                                   }}>

                                        <h6 style={{
                                        textAlign:'center',
                                        // border:'1px solid black', 
                                        justifyContent:'center',
                                        margin:'0   '
                                        }}> <b style={{color:'orangered'}}>|</b> PROJECTS DEALS <b style={{color:'orangered'}}>|</b></h6> <br />
                                        <h5 id='imagecontent' 
                                        style={{
                                             fontFamily: 'sans-serif',
                                             display:'block',
                                        width:'80%',
                                        textAlign:'center',
                                        fontSize:'40px',
                                        fontWeight:'bolder',
                                        marginLeft:'10%'
                                        }}>Awesome Projects</h5>
                                        <p style={{
                                            fontFamily:'sans-serif',
                                        textAlign:'center',
                                            fontSize:'20px'
                                        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci- <br />
                                                didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                        <br />
                                        <div style={{textAlign:'center',
                                            fontFamily:'sans-serif',
                                            fontSize:'20px'
                                        }}>
                                        
                                         <Button id='projectbtn' style={{ border: '1px solid white', width: 'auto' }} >All</Button>
                                            <Button id='projectbtn' style={{ border: '1px solid white', width: 'auto' }}>Remote Air Conditioner</Button>
                                            <Button id='projectbtn' style={{ border: '1px solid white', width: 'auto' }}>Gloves Checks</Button>
                                            <Button id='projectbtn' style={{ border: '1px solid white', width: 'auto' }}>Conditioner Thermometer</Button>
                                     
                                        </div>
                                        </div>


                            </Carousel.Caption>


                                    </div> 

                                   </div>

                                
                        </div>

                       <div id='smallgridimages' style={{ height: '600px', 
                        marginTop: '-150px', position: 'relative',
                             
                            
                            }}>
                         <div style={{ 
                             display:'flex',
                            justifyContent:'center'
                            
                            }}>
                                <div id='gridimagecontainer'>
                                    {
                                        gridimage.map((v,i)=>{
                                            let {id,  image} = v
                                            return(
                                                // <div id='gridcardimage' key={v.id} >
                                                 <div id='image-container'>
                                                     <img style={{height:'200px', width:'300px', }}
                                                     src={require(`../images/smallgrid/${image.split("../images/smallgrid/")[1]}`)} 
                                                      alt="page not loaded" />
                                                 </div>

                                                 
                                                // </div>
                                                    )
                                                })
                                            }
                                           
                                </div>

                                 
                        </div>

                        <div style={{height:'150px', width:'100%', display:'flex',justifyContent:'center'
                       }}>
                           <div id='projectbtndiv' style={{ }}>
                                    <button id='projectbtn' >View All Project</button>
                                </div>
                        </div>
                     </div>



                       <div id='smallcontact' style={{height:'150px', width:'100%', display:'flex',justifyContent:'center'
                       }}>
                        <div  style={{border:'1px solid black', backgroundColor:'#001064', 
                        height:'150px', width:'80%', borderRadius:'100px'  ,              
                       }}>
                      <div id='overallcontainerdiv' style={{height:'100%',width:'100%', display:'flex', justifyContent:'space-around', 
                        marginTop:'30px', marginLeft:'-10px' }}>

                          <div style={{
                            color:'white',display:'flex', justifyContent:'space-around', 
                            width:'45%', height:'100px', alignItems:'center',}}>
                           
                            <div id='btnmailph' style={{border:'1px solid white',height:'70px', width:'70px',
                                 borderRadius:'50px', alignItems:'center', display:'flex', justifyContent:'center', 
                                 alignItems:'center'}}>
                                <MdMail id='mailbtn' /> 
                            </div>
                           <div><h4>AC or Heating Maintenance & <br />Repair Services</h4></div>
                        </div>
                       <div class="vertical-line" style={{}}>

                       </div>
                        <div style={{
                            color:'white',display:'flex', justifyContent:'space-around', 
                            width:'45%', height:'100px', alignItems:'center',}}>
                           
                            <div id='btnmailph' style={{border:'1px solid white',height:'70px', width:'70px',
                                 borderRadius:'50px', alignItems:'center', display:'flex', justifyContent:'center', 
                                 alignItems:'center'}}>
                                 <MdLocalPhone id='mailbtn' /> 
                            </div>
                         <div> <h4>+153-75833808, +99875345 <br />
                            +0612-6373638</h4></div>
                        
                        </div>

                      </div>
                        </div>

                       </div>
                        <br /><br />

                        <div style={{height:'600px', width:'100%', border:'1px solid red', backgroundColor:'yellow'}}>

                        </div>
                       

                        <div style={{height:'600px', width:'100%', border:'1px solid red', backgroundColor:'pink'}}>

                        </div>

 














                        
                    </div>

                    
        </div>
    );
}

export default LeftContainer;

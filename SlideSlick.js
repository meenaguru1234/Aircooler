import React from 'react';
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import "./CSS/Sliderslick.css"
import Slider from "react-slick";

const SlideSlick = () => {

    const data = [
    
            {
                id:1,
                icon: FaHandHoldingUsd,
                title: 'Satisfaction Guarantee',
                description: 'Desktop publishing packages and page editors now use Lorem Ipsu default model text.',
                lable: "Read More"
            },
            {
                id: '2',
                icon: FaPhoneAlt,
                
                // image: "../images/icons/phone.png",
                title: 'Emergency Service',
                description: 'Desktop publishing packages and page editors now use Lorem Ipsu default model text.',
                lable: "Read More"
            },
    
            {
                id: '3',
                icon: IoShieldCheckmarkOutline,
                // image: "../images/icons/guarantee.png",
                title: 'Warantees & Gurantees',
                description: 'Desktop publishing packages and page editors now use Lorem Ipsu default model text.',
                lable: "Read More"
            },
             {
                id: '4',
                  icon: FaHandHoldingUsd,
                title: 'Satisfaction Guarantee',
                description: 'Desktop publishing packages and page editors now use Lorem Ipsu default model text.',
                lable: "Read More"
            },
            {
                id: '5',
               icon: IoShieldCheckmarkOutline,
                title: 'Warantees & Gurantees',
                description: 'Desktop publishing packages and page editors now use Lorem Ipsu default model text.',
                lable: "Read More"
            },
            {
                id: '6',
                icon: FaPhoneAlt,
                title: 'Emergency Service',
                description: 'Desktop publishing packages and page editors now use Lorem Ipsu default model text.',
                lable: "Read More"
            },
            {
                id: '7',
                 icon: FaHandHoldingUsd,
                title: 'Satisfaction Guarantee',
                description: 'Desktop publishing packages and page editors now use Lorem Ipsu default model text.',
                lable: "Read More"
            },
            {
                id: '8',
                icon: IoShieldCheckmarkOutline,
                title: 'Warantees & Gurantees',
                description: 'Desktop publishing packages and page editors now use Lorem Ipsu default model text.',
                lable: "Read More"
            },
        ]

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



    return (
        <>
        <div style={{}}>
             
            <div style={{height:'550px', width:'100%', overflow:'hidden', display:'flex', justifyContent:'center',alignItems:'center', height:'100vh'}}>
<Slider id='sliderbox' style={{ height:'550px', width:'90%', overflow:'hidden', justifyContent:'center'}} {...settings}>
                {
                    data.map((item,index)=>(
                       <div  id='overalldiv' style={{height:'300px', width:'18rem', border:'1px solid red', textAlign:'center', overflow:'hidden'}}>
                         <div id={index} style={{display:'flex !important',  textAlign:'center', overflow:'hidden'}}>
                           <div id='icondiv' style={{height:'60px', width:'60px', border:'1px solid grey', borderRadius:'8px' , overflow:'hidden',display:'flex', justifyContent:'center', marginLeft:'120px'}}>
                             {item.icon && <item.icon id='iconid' style={{height:'30px', width:'30px', overflow:'hidden'}}/>}
                            </div>
                            <div id='contentdiv'>
                                <div><h4 style={{fontWeight:'bold'}}>{item.title}</h4></div>
                                <p style={{fontSize:'20px'}}>{item.description}</p>
                                <div style={{color:'#ff800f', fontSize:'20px'}}>{item.lable}</div>

                            </div>
                           



                        </div>
                       </div>
                    ))
                }

            </Slider>
        </div>
        


        </div>
        
        
        </>
    );
}

export default SlideSlick;

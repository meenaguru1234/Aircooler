import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const History = () => {
    return (
        <div>
            <div id='history' style={{ height: '800px', width: '100%', }}>
                            <div>
                                <div style={{position:'relative'}}>
                                <img src={require(`../images/istockphoto-172665380-612x612.jpg`)}
                                    alt="" style={{ height: '100%', width: '100vw' , }} />
                                <div id='innerdesign'
                                style={{
                                    position: 'absolute',
                                    top: 0, bottom: 0, left: 0, right: 0,
                                    backgroundColor:' rgba(0, 0, 102, 0.6)'
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
                                        }}> <b style={{color:'orangered'}}>|</b> SINCE 1980 SEE HISTORY <b style={{color:'orangered'}}>|</b></h6> <br />
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
                                        
                                        </div>


                            </Carousel.Caption>


                                    </div> 

                                   </div>

                                
                        </div>
        </div>
    );
}

export default History;

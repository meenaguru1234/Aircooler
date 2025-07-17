import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CSS/Gridimage.css"

const Gridimage = () => {

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
    return (
        <div>

            {
                gridimage.map((v,i)=>{
                    let {id,  image} = v
                    return(
                       

                            <div id='gridcardimage' key={v.id} >
                                <div className='image-container'>
                                    <img style={{height:'200px', width:'200px', }}
                                    src={require(`../images/smallgrid/${image.split("../images/smallgrid/")[1]}`)} 
                                     alt="page not loaded" />
                                </div>
                            </div>
                    )
                })
            }
        </div>
    );
}

export default Gridimage;

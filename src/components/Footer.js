import React from 'react'
import apple from '../assets/images/apple.png'
import mongo from '../assets/images/mongodb.svg'
import node from '../assets/images/nodejs-icon.svg'
import react from '../assets/images/reactjs.svg'
import express from '../assets/images/express.svg'
import google from '../assets/images/google-play.svg'
const Footer = () => {
    return (
        <div style={{height:'400px',borderTop:"1px Solid rgba(37,150,190,1)",paddingBottom:"10px"}}>
            <div className='container'style={{height:'100%'}}>

            
            <div className='grid col-2 ' style={{height:'100%'}}>
                <div>
                        <div className='grid col-2' style={{justifyItems:'center'}}>
                            <div><img src={apple}  style={{height:'100px',width:'250px'}} /></div>
                            <div><img src={google}  style={{height:'100px',width:'250px'}}/></div>
                            
                        </div>
                       <div className='grid col-2' style={{justifyItems:'center'}}>

                            <div>
                                    <div>Watch</div>
                                    <div>Tv Show</div>
                                    <div>Movies</div>
                                
                                </div>
                            
                            <div>
                                <div>Featured</div>
                                <div>Featured Movies</div>
                                <div>Featured Tv Show</div>
                            </div>
                       </div>
                       
               </div>
               <div className='grid col-1' style={{justifyItems:'center',alignItems:'end',height:'100%'}}>
                   
                   <div className='grid col-5 mb-4'>
                   <h1 className='mr-2'>Powered By: </h1>
                   <div className='mr-1' style={{height:'50px',width:'50px',borderRadius:'50px',backgroundColor:'white',textAlign:'center',justifySelf:'start'}}><img src={mongo} style={{height:'50px',width:'50px'}} alt="" /></div>
                   <div className='mr-1' style={{height:'50px',width:'50px',borderRadius:'50px',backgroundColor:'white',textAlign:'center',justifySelf:'start'}}><img src={express} alt="" style={{height:'50px',width:'50px'}}/></div>
                   <div className='mr-1' style={{height:'50px',width:'50px',borderRadius:'50px',backgroundColor:'white',textAlign:'center'}}><img src={react} alt="" style={{height:'50px',width:'50px'}}/></div>
                   <div className='mr-1' style={{height:'50px',width:'50px',borderRadius:'50px',backgroundColor:'white',textAlign:'center'}}><img src={node} alt="" style={{height:'50px',width:'50px'}} /></div>
                   
                   
                   </div>
                   
                   
                   
               </div>
            </div>
            </div>
        </div>
    )
}

export default Footer

import React from 'react'
import apple from '../assets/images/apple.png'
import mongo from '../assets/images/mongodb.svg'
import node from '../assets/images/nodejs-icon.svg'
import react from '../assets/images/reactjs.svg'
import express from '../assets/images/express.svg'
import google from '../assets/images/google-play.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div style={{height:'400px',borderTop:"1px Solid rgba(37,150,190,1)",paddingBottom:"10px",backgroundColor:'#081c2c'}}>
            <div className='container'style={{height:'100%'}}>

            
            <div className='grid col-2 ' style={{height:'100%'}}>
                <div>
                        <div className='grid col-2' style={{justifyItems:'center'}}>
                            <div><img src={apple}  style={{height:'100px',width:'250px'}} /></div>
                            <div><img src={google}  style={{height:'100px',width:'250px'}}/></div>
                            
                        </div>
                       <div className='grid col-2' style={{justifyItems:'center'}}>

                            <div className='has-text-white'>
                                    <h1 className='title is-size-4 has-text-white'>Watch</h1>
                                   <Link to='/Tv Shows'> <div>Tv Show</div></Link>
                                    <Link to='/Movies'><div>Movies</div></Link>
                                
                                </div>
                            
                            <div className='has-text-white'>
                                <h1 className='title is-size-4 has-text-white'>Featured</h1>
                                <Link><div>Featured Movies</div></Link>
                                <Link><div>Featured Tv Show</div></Link>
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

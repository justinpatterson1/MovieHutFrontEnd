import React,{useState} from "react";
import Slider from "react-slick";

const Carousel = ()=> {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };


  const [flyer,setFlyer] = useState(
      {slides:[1,2,3,4,5,6]
    })

  return (
    <div style={{width:'70%',margin:'0 auto'}}>

        <Slider {...settings}>
           {
               flyer.slides.map(fly=>(
                   
                       <div>
                          <h3>{flyer.slides}</h3>
                        </div>

                   
               )) 
                  
            }       
            
         </Slider>
    </div>
    
  );
}

export default Carousel;
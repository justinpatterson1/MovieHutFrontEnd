import React,{useContext} from "react";
import Slider from "react-slick";
import FlyerContext from "../Context/FlyerContext";
import Slide from "../components/Slide";

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


  const {flyer,setFlyer} = useContext(FlyerContext)

  return (
    <div style={{width:'70%',margin:'0 auto'}}>

        <Slider {...settings}>
           {/* {
               flyer.slides.map(fly=>(
                   
                       <div>
                          <h3>{flyer.slides}</h3>
                        </div>

                   
               )) 
                  
            }        */
            flyer.map(i=>(<Slide key={i._id} id={i._id} img={i.img}/>))
            }
            
         </Slider>
    </div>
    
  );
}

export default Carousel;
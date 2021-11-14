import React, { useContext, useEffect,useState } from 'react'
import { useParams, useHistory } from 'react-router'
import MovieContext from '../Context/MovieContext'
import LoginContext from '../Context/LoginContext'
import { getNodeText } from '@testing-library/react'


const MovieDescription = () => {

    const [description,setDescription] = useState({})
    const [user,setUser] = useState({})
    const {isLoggedIn} = useContext(LoginContext)
    let genre;


    const {id} = useParams();

    const history = useHistory();

    useEffect(() => {
        
        fetch(`http://localhost:4000/movie/${id}`)
        .then(res => res.json())
        .then((json)=>{
            
            //setDescription(json.data);
            let date = json.data.release_date
            date = date.slice(0,10)
            for(let i = 0; i < json.data.genre.length;i++){
                if(json.data.genre[i]!=null)
                genre = genre+','+json.data.genre[i].name
                
              }

            genre = genre.replace('undefined,','')
            json.data.release_date = date
            json.data.genre = genre

             
            
            setDescription(json.data)
             console.log(genre)
        })
        .catch(err=>{console.log(`Error:${err}`)})
    }, [])

    useEffect(() => {
        
        fetch(`http://localhost:4000/users/${isLoggedIn.user._id}`)
        .then(res=>res.json())
        .then((json)=>{
             setUser( json.data )
             
             
        })
        .catch(err=>{console.log(`Error:${err}`)})
    }, [])


    const imageStyle =
    {
        backgroundImage:`url(${description.poster})`,
        backgroundPosition:`center center`,
        backgroundSize:`cover`,
        backgroundRepeat:`no-repeat`,
        backgroundAttachment:`local`,
        height:'100%'
    

    }

  

   const  addToCart = ()=>{

   
        

        
         const item = 
        {
            _id:description._id,
            name:description.name,
            img:description.img,
            cost:description.price,
            order:"Buy",
            quantity:0

        }


        user.cart.splice(1,0,item)
        console.log(user)
        fetch(`http://localhost:4000/users/${isLoggedIn.user._id}`,{
            method:'PUT',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
   
        
    }

    const addToCartRent=()=>{

        const item = 
        {
            _id:description._id,
            name:description.name,
            img:description.img,
            cost:description.price,
            order:"Rent",
            quantity:0

        }


        user.cart.splice(1,0,item)
        console.log(user)
        fetch(`http://localhost:4000/users/${isLoggedIn.user._id}`,{
            method:'PUT',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
    }

    return (
        <div id="desc">
        <div id='description-page' className='container' style={imageStyle}>
            <div className='p-4' style={{position:'relative'}}>
            
            <div className='above'>
            <div className = 'grid col-1'>
            <div className='grid col-2 ' style={{color:'white', alignItems:'center'}}>
                
                <div className='grid col-2 above'>
                    <img className='pl-3 pt-4' src={description.img} style={{width:"225px",height:"350px"}} alt="" srcset="" />
                    <div>
                        <div className='above'>
                            <h1 className='is-size-3'>{description.name}</h1>
                            <div>
                            {description.genre}|Other|{description.release_date}</div>
                            <p>Rating:{description.rating}/10</p>
                        </div>
                    <div className='mt-4 mb-4 above'>
                            <h2>
                                {description.description}
                                
                            </h2>
                        </div> 
                        <div className='grid col-2 above' style={{columnGap:'20px'}}>
                            <div className='p-2 has-background-primary button' onClick={()=>{
                                addToCartRent()
                                history.push(`/cart/${isLoggedIn.user._id}`)
                            }}>Rent</div>
                            <div className='p-2 has-background-primary button' onClick={()=>{
                            
                                addToCart()
                                history.push(`/cart/${isLoggedIn.user._id}`)
                            }}>Buy ${description.price}</div>
                        </div>
                    </div>
                    
                  
                </div>
                </div>
                  <div  className='pt-3 above ' style={{height:'50%'}}>
                     <iframe width="90%" height="315"
                            src={description.trailer}>
                    </iframe>
                </div>
                </div>

               
            
            </div>
            
            </div>
            <div className='iq'></div>
            </div>
        </div>
        
    )
}

export default MovieDescription

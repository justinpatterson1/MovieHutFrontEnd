import React, { useContext, useEffect,useState } from 'react'
import { useParams, useHistory } from 'react-router'
import MovieContext from '../Context/MovieContext'
import LoginContext from '../Context/LoginContext'


const MovieDescription = () => {

    const [description,setDescription] = useState({})
    const [user,setUser] = useState({})
    const {isLoggedIn} = useContext(LoginContext)


    const {id} = useParams();

    const history = useHistory();

    useEffect(() => {
        
        fetch(`http://localhost:4000/movie/${id}`)
        .then(res => res.json())
        .then((json)=>{

            setDescription(json.data);
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
    

    }

  

   const  addToCart = ()=>{

   
        

        
         const item = 
        {
            _id:description._id,
            name:description.name,
            img:description.img,
            cost:description.price,
            order:"Buy"

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
        <div id='description-page' className='container' style={imageStyle}>
            <div style={{position:'relative'}}>
            
            <div className='grid col-2' style={{color:'white', alignItems:'center'}}>
                
                <div className='grid col-2'>
                    <img src={description.img} style={{width:"225px",height:"350px"}} alt="" srcset="" />
                    <div>
                        <div>
                            <h1 className='is-size-3'>{description.name}</h1>
                            <div>{description.genre}|Other|{description.release_date}</div>
                            <p>Rating:{description.rating}/10</p>
                        </div>
                    <div className='mt-4 mb-4'>
                            <h2>
                                {description.description}
                            </h2>
                        </div> 
                        <div className='grid col-2' style={{columnGap:'20px'}}>
                            <div className='p-2 has-background-primary button'>Rent</div>
                            <div className='p-2 has-background-primary button' onClick={()=>{
                            
                                addToCart()
                                history.push(`/cart/${isLoggedIn.user._id}`)
                            }}>Buy ${description.price}</div>
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

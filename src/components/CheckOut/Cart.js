import React,{useContext,useEffect,useState} from 'react'
import CartList from './CartList'
import { useParams } from 'react-router'
const Cart = () => {

    const {id} = useParams()
    const [cart,setCart] = useState([])

    
    useEffect(()=>{

        fetch(`http://localhost:4000/users/${id}`)
        .then(res => res.json())
        .then((json)=>{

            setCart(json.data.cart)
            console.log(json.data.cart)
        })

    },[])
    return (
        <div>
            <div className='container'>
            <div className='grid col-7 ' style={{textAlign:'center',listStyle:'none'}}>
                <li>NO.</li>
                <li>Image</li>
                <li>Name</li>
                <li>Order</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Delete</li>
            </div>
           
            {
                cart.map(((c,index)=>(<CartList no={index} key={c._id} itemID={c._id} name={c.name} img={c.img} price={c.cost} order={c.order} cart={cart} setCart={setCart}/>)))
            }
            </div>
            
        </div>

    )
}

export default Cart

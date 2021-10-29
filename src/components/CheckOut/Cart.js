import React,{useContext,useEffect,useState} from 'react'
import CartList from './CartList'
import { useParams } from 'react-router'
const Cart = () => {

    const {id} = useParams()
    const [cart,setCart] = useState([])
    const [subtotal,setSubtotal] = useState(0)


    
    useEffect(()=>{

        fetch(`http://localhost:4000/users/${id}`)
        .then(res => res.json())
        .then((json)=>{

            setCart(json.data.cart)
            console.log(json.data.cart)
            let cost = 0;
            let finalItemPrice= 0;
            for(let i = 0; i < json.data.cart.length ;i++){

                

                let quantity = json.data.cart[i].quantity
                let price = json.data.cart[i].cost

                let itemPrice  = quantity * price 

                 cost = cost + itemPrice

                 console.log(cost)

                 console.log(quantity+`quantity:${i}`)
                 console.log(itemPrice +`itemPrice:${i}`)
                 console.log(finalItemPrice +`finalItemPrice:${i}`)
                
            } 
            setSubtotal(cost)
        })

    },[])

   
    return (
        <div>
            <div className='container'>
                <div className='grid cartlayout'>
                    <div>
                    <div className='grid col-7 mt-2 ' style={{textAlign:'center',listStyle:'none',color:'white'}}>
                        <li>NO.</li>
                        <li>Image</li>
                        <li>Name</li>
                        <li>Order</li>
                        <li>Price</li>
                        <li>Quantity</li>
                        <li>Delete</li>
                    </div>
                
                    {
                        cart.map(((c,index)=>(<CartList no={index} key={c._id} itemID={c._id} name={c.name} img={c.img} price={c.cost} order={c.order} q={c.quantity} cart={cart} setCart={setCart} subtotal={subtotal} setSubtotal={setSubtotal}/>)))
                    }
                    </div>
                    <div>
                        <div style={{textAlign:'center'}}> 
                            <h1>Check-Out</h1>
                            <div>Subtotal:{subtotal}</div>
                            <button>Check-Out</button>
                        </div>
                    </div>
                    </div>
                    
            </div>
            
        </div>

    )
}

export default Cart

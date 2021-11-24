import React,{useContext,useEffect,useState,useRef,useLayoutEffect} from 'react'
import CartList from './CartList'
import { useParams } from 'react-router'
import MovieContext from '../../Context/MovieContext'
const Cart = () => {

    const {id} = useParams()
    const [cart,setCart] = useState([])
    const [prac,setPrac] = useState(14.00)
    const {subtotal,setSubtotal} = useContext(MovieContext)

    const paypal = useRef(0)
   
    
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
            // cost  = (Math.round(cost * 100) / 100).toFixed(2)
             setSubtotal(cost)
        })

    },[])

    useLayoutEffect(()=>{
        
        console.log(subtotal)
        window.paypal.Buttons({

            // Sets up the transaction when a payment button is clicked
            createOrder: function(data, actions) {
              return actions.order.create({
                purchase_units: [{
                  intent:'CAPTURE',
                  description:'Cool stuff',
                  amount: {
                    currency_code:'USD',
                    value:subtotal // Can reference variables or functions. Example: `value: document.getElementById('...').value`
                  }
                }]
              });
            },
    
            // Finalize the transaction after payer approval
            onApprove: async (data, actions) =>{
              const order = await actions.order.capture()
              .then(function(orderData) {
                // Successful capture! For dev/demo purposes:
                    console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                    var transaction = orderData.purchase_units[0].payments.captures[0];
                    alert('Transaction '+ transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');
    
                // When ready to go live, remove the alert and show a success message within this page. For example:
                // var element = document.getElementById('paypal-button-container');
                // element.innerHTML = '';
                // element.innerHTML = '<h3>Thank you for your payment!</h3>';
                // Or go to another URL:  actions.redirect('thank_you.html');
              });
            },
            onError:(err)=>{console.log(err)}
          }).render('#check-out');
    
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
                    <div id='check-out' className='mt-4 ml-5 grid col-1' >
                     <div style={{textAlign:'center'}}> 
                            <h1>Check-Out</h1>
                            <div>Subtotal:{subtotal}</div>
                           
                        </div> 

                        
                    </div>
                    </div> 
                    
            </div>
            
        </div>

    )
}

export default Cart

import React,{useContext,useEffect,useState} from 'react'
import LoginContext from '../../Context/LoginContext'
import {AiFillDelete} from 'react-icons/ai'
import { useParams } from 'react-router'
import {AiFillCaretLeft} from 'react-icons/ai'
import {AiFillCaretRight} from 'react-icons/ai'

const CartList = ({no,name,img,price,order,key,itemID,cart,setCart,subtotal,setSubtotal,q}) => {

    

    const {id }= useParams()
    
    const [quantity,setQuantity] = useState(q)
    const {isLoggedIn} = useContext(LoginContext)
    const [cost,setCost] = useState(0)

    // const [cartList, setCartList] = useState([])

    // useEffect(() => {
        
    //     fetch(`http://localhost:4000/users/${id}`)
    //     .then(res=>res.json())
    //     .then((json)=>{
    //          setCartList( json.data.cart)
             
             
    //     })
    //     .catch(err=>{console.log(`Error:${err}`)})
    // }, [])

     console.log(id)

     const setCartItemQty = (q)=>{
        fetch(`http://localhost:4000/users/${id}`)
        .then(res => res.json())
        .then((json)=>{

            console.log(json.data)

          let item = [...cart]

           let updatedItem = item.find((i)=>{return i._id === itemID})

        //    console.log(deletedItem)
        //    setCart(deletedItem)
          // json.data.cart.quantity = quantity

          updatedItem.quantity = q;
           console.log(updatedItem.quantity)
          json.data.cart = cart
           
          let newData = json.data

           
            console.log(newData)
            console.log(itemID)
            console.log(updatedItem)

            fetch(`http://localhost:4000/users/${id}`,{
                method:'PUT',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(newData)
            })
        })
     }
     const addQuantity = ()=>{
    
         let itemQuantity = quantity
         let c = cost

         
         c = c + price ;
         itemQuantity = itemQuantity +1
         let newSub = subtotal+price
       

        
         setQuantity(itemQuantity)

         setSubtotal(newSub)
         setCost(c)

         setCartItemQty(itemQuantity)
         
     }

     const decreaseQuantity = ()=>{
        let itemQuantity = quantity
        let c = cost

      
        
       
       if(quantity!=0){
        let sub = 0
            itemQuantity = itemQuantity - 1
            let newSub = subtotal-price
           

            setQuantity(itemQuantity)
            if(newSub < 0){
                setSubtotal(0)

            }else{
                setSubtotal(newSub)
            }
            setCost(c)
            setCartItemQty(itemQuantity)
       }

          
        
        
    }
    const deleteCartItem =()=>{

        let item ;
        fetch(`http://localhost:4000/users/${id}`)
        .then(res => res.json())
        .then((json)=>{

            console.log(json.data)

           item = [...cart]

           let deletedItem = item.filter((i)=>{return i._id !== itemID})

           console.log(deletedItem)
           setCart(deletedItem)
           json.data.cart = deletedItem

           let newData = json.data

           
            console.log(newData)

            fetch(`http://localhost:4000/users/${id}`,{
                method:'PUT',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(newData)
            })
        })

    }

    return (
        <div id='cart-list'>
            <div >
                <div className='grid col-7 pt-2 mt-2 p-3' style={{textAlign:'center'}}>
                    <div>{no+1}</div>
                    <div><img src={img} style={{height:'100px', width:'100px'}}/> </div>
                    <div>{name}</div>
                    <div>{order}</div>
                    <div>{price}</div>
                    <div className='grid col-3'>

                        <div onClick={()=>{
                                decreaseQuantity()
                            }}>
                            <AiFillCaretLeft/>
                        </div>
                       
                            {quantity}
                            <div onClick={()=>{
                                addQuantity()
                            }}>
                                <AiFillCaretRight/>
                            </div>
                        
                    </div>
                    
                    <div onClick={deleteCartItem} style={{color:'red'}}><AiFillDelete/></div>
                </div>
            </div>
            
        </div>
    )
}

export default CartList

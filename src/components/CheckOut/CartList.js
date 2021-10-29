import React,{useContext,useEffect,useState} from 'react'
import LoginContext from '../../Context/LoginContext'
import {AiFillDelete} from 'react-icons/ai'
import { useParams } from 'react-router'

const CartList = ({no,name,img,price,order,key,itemID,cart,setCart}) => {

    

    const {id }= useParams()
    
    const {isLoggedIn} = useContext(LoginContext)

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
                <div className='grid col-7 pt-2' style={{textAlign:'center'}}>
                    <div>{no+1}</div>
                    <div><img src={img} style={{height:'100px', width:'100px'}}/> </div>
                    <div>{name}</div>
                    <div>{order}</div>
                    <div></div>
                    <div>{price}</div>
                    <div onClick={deleteCartItem}><AiFillDelete/></div>
                </div>
            </div>
            
        </div>
    )
}

export default CartList

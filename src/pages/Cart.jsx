import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../redux/slices/cartSlice"

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart)
  const totalPrice = cart.reduce((total,item)=>total+item.qty*item.price,0)
  
  
  return (
    <div className="mt-20 max-w-screen-2xl mx-auto">

    <div>
       <h1 className="text-2xl font-bold">Total Price : <span className="text-green-500">${totalPrice} </span> </h1>
     </div>
         <div className="flex flex-wrap gap-y-5 gap-x-[5px] ">
      {
        cart.map((item)=>(
          <div key={item.id} className="mb-10 w-96 h-96  pb-5 pt-5 text-center mx-auto shadow-2xl rounded-xl" >
           
            <img className="w-48 h-48 hover:scale-110 duration-500 ease-in-out   mx-auto" src={item.image} alt="" />
           
            <div className="px-5 space-x-2 ">
              <h3 className="font-bold mx-auto leading-2 py-1">{item.title.slice(0,20)}</h3>
              <div className="flex justify-between items-center">
              <span className="text-xl uppercase text-gray-600 font-semibold">{item.category}</span>
              <h3 className="font-bold text-red-500"> ${item.price} <span className="font-bold text-green-800">item : {item.qty}</span></h3>

              </div>
             
              <button onClick={()=>dispatch(removeFromCart(item))} className="bg-red-600 hover:bg-gray-500 hover:text-white w-full mt-2 text-gray-900 font-mono font-semibold  py-1 px-2 rounded-xl">Remove</button>

            </div>

          </div>
        ))
      }
     </div>
    
    </div>
  )
}

export default Cart
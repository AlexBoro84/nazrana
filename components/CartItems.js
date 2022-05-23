import React, { useEffect, useState} from 'react'
import {IoCloseOutline} from 'react-icons/io5'
import { useDispatch} from 'react-redux'
import {deleteCartItem, addCartItems } from '../redux/cartSlice'


const CartItems = ({name, price, image, id, productId, quantity}) => {
  
  const dispatch = useDispatch()

  const [qty, setQty] = useState(quantity)

  const handleQtyChange = (value) => {
    setQty(value)
    if(value <= 0 || value >= 10){
        dispatch(addCartItems(productId, 1))
    }else{
        dispatch(addCartItems(productId, parseInt(value)))
    }
  }

  const handleItemRemove = () => {
    dispatch(deleteCartItem(id))   
  }


  return (
   <>
       <div className='flex relative items-center border-b border-gray-200 py-4'>
           <div className='w-24 md:mr-6 mr-6'>
                <img src={image} className='rounded-md h-auto max-w-full'/> 
           </div>
            <div className='w-full'>
                <div className='flex items-center relative'>
                    <h3 className='text-gray-800 md:font-semibold md:w-full w-11/12'>{name}</h3>
                    <button className="cursor-pointer absolute md:-right-10 lg:-right-0 right-0 top-0" onClick={handleItemRemove}>
                        <IoCloseOutline className='text-gray-800 text-2xl ml-5'/>
                    </button>
                </div>
                <p className='text-gray-800 md:font-semibold'>{price}</p>
                <div className='flex mt-2 justify-between items-center'>
                    <select value={qty} onChange={(e) => handleQtyChange(e.target.value)} className=" w-20 border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none bg-white block p-1" >
                        <option value="1">Qty: 1</option>
                        <option value="2">Qty: 2</option>
                        <option value="3">Qty: 3</option>
                        <option value="4">Qty: 4</option>
                        <option value="5">Qty: 5</option>
                        <option value="6">Qty: 6</option>
                        <option value="7">Qty: 7</option>
                        <option value="8">Qty: 8</option>
                        <option value="9">Qty: 9</option>
                    </select>
                    <h4>Total: ₹2000</h4>
                </div>         
            </div>
       </div>
   </>
  )
}

export default CartItems
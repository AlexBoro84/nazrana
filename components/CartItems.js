import React, { useState } from 'react'
import {IoCloseOutline} from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import {deleteCartItem} from '../redux/cartSlice'

const CartItems = ({name, price, image, id}) => {


  const dispatch = useDispatch()
  const [qty, setQty] = useState(1)

  const handleQtyChange = (quantity) => {
    if(qty === 1){
        setQty(1)
    }else{
        setQty(quantity)
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
                    <button className="cursor-pointer absolute md:-right-10 lg:-right-10 right-0 top-0" onClick={handleItemRemove}>
                        <IoCloseOutline className='text-gray-800 text-2xl ml-5'/>
                    </button>
                </div>
                <p className='text-gray-800 md:font-semibold'>{price}</p>
                <div className='flex mt-2 justify-between items-center'>
                    <div className='border border-gray-200 rounded-sm'>
                        <button className='px-2'  onClick={() => handleQtyChange(qty--)}>-</button>
                        <input type="text" name="qty" value={qty} className="w-12 text-center outline-none text-sm" onChange={handleQtyChange}/>
                        <button className='px-2 py-1' onClick={() => handleQtyChange(qty++)}>+</button>
                    </div>
                    <h4>Total: ₹2000</h4>
                </div>
                        
            </div>
       </div>
   </>
  )
}

export default CartItems
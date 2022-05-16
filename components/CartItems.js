import React from 'react'
import {IoCloseOutline} from 'react-icons/io5'

const CartItems = ({name, price, image}) => {

  const handleQtyChange = () => {
      
  }

  return (
   <div>
       <div className='flex relative w-full'>
           <div className='w-24 md:mr-6 mr-6'>
                <img src={image} className='rounded-md h-auto max-w-full'/> 
           </div>
            <div>
                <div className='flex items-center relative'>
                    <h3 className='text-gray-800 md:font-semibold md:w-full w-11/12'>{name}</h3>
                    <button className="cursor-pointer absolute md:-right-10 lg:-right-20 right-0 top-0">
                        <IoCloseOutline className='text-gray-800 text-2xl ml-5'/>
                    </button>
                </div>
                <p className='text-gray-800 md:font-semibold'>{price}</p>
                <div className='flex mt-2 justify-between items-center'>
                    <div className='border border-gray-200 rounded-sm'>
                        <button className='px-2'>-</button>
                        <input type="text" name="qty" value="1" className="w-12 text-center outline-none text-sm" onChange={handleQtyChange}/>
                        <button className='px-2 py-1'>+</button>
                    </div>
                    <h4>Total: ₹2000</h4>
                </div>
                        
            </div>
       </div>
   </div>
  )
}

export default CartItems
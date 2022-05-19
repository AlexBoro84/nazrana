import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CartItems from '../../components/CartItems'
import {useRouter} from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import {getCartItems} from '../../redux/cartSlice'
import axios from 'axios'

const Cart = () => {

  const router = useRouter()
  const dispatch = useDispatch()

  const {loading, cartItems} = useSelector((state) => state.cart)
  
  useEffect(() => {
    dispatch(getCartItems())
  },[])

  const handleCheckoutClick = async() => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/Order`, {}, {headers: {'Content-Type': 'application/json'}})
    router.push('/checkout')
  }

  return (
    <>
      <div>
        <Navbar/>
          <div className="lg:w-9/12 md:w-11/12 w-11/12 mx-auto my-10 bg-white">
            <h2 className='text-gray-800 text-4xl font-bold'>Your bag</h2>
            <div className='flex md:flex-row flex-col mt-6 justify-between'>
              <div className='md:mr-4 mr-0 md:w-6/12 w-full'>
                  {cartItems && Object.keys(cartItems).map(item => (
                    <CartItems key={cartItems[item].id} image={cartItems[item].product.image} id={cartItems[item].id} name={cartItems[item].product.title} price={cartItems[item].product.price} />
                  ))}
              </div>

              <div className='flex justify-center md:w-5/12 w-full rounded-sm md:mt-0 mt-8 md:px-5 lg:px-0'>
                <div className='bg-gray-100 lg:px-10 md:px-5 px-6 pt-6 pb-10 w-full'>
                  <h3 className='text-gray-700 md:font-semibold font-bold md:text-2xl text-xl'>Order Summary</h3> 
                  <div className='mt-6'>
                    <div className='flex justify-between'>
                      <p className='font-semibold text-gray-700'>Subtotal</p>
                      <p className='font-semibold text-gray-700'>₹ 4000</p>
                    </div>
                    <div className='flex justify-between my-4'>
                      <p className='font-semibold text-gray-700'>Discount</p>
                      <p className='font-semibold text-gray-700'>No Discount</p>
                    </div>
                  </div>
                  <div className='flex justify-between mb-6 lg:mt-32 mt-14'>
                    <p className='font-semibold text-lg text-gray-700'>Total Price</p>
                    <p className='font-semibold text-lg text-gray-700'>₹4000</p>
                  </div>
                   {Object.keys(cartItems).length !== 0 && (
                    <button className="px-6  w-full py-3 text-sm text-white bg-indigo-500 hover:bg-indigo-600" onClick={handleCheckoutClick}>
                      Proceed to Checkout
                    </button>
                   )}
                </div>  
               
              </div>
            </div>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default Cart
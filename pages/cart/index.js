import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CartItems from '../../components/CartItems'
import {useRouter} from 'next/router'

const Cart = () => {

  const router = useRouter()

  const handleCheckoutClick = () => {
    router.push('/checkout')
  }

  return (
    <div>
      <main>
        <Navbar/>
          <div className="lg:w-9/12 md:w-11/12 w-11/12 mx-auto my-10 bg-white">
            <h2 className='text-gray-800 text-4xl font-bold'>Your bag</h2>
            <div className='flex md:flex-row flex-col mt-10 justify-between'>
              <div className='md:mr-4 mr-0'>
                  <CartItems image='/img/LS005Blue.jpg' name='Premium Leather Stroller - Medium - Red' price='₹2700' />
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
                      <p className='font-semibold text-gray-700'>20 %</p>
                    </div>
                  </div>
                  <div className='flex justify-between mb-6 lg:mt-32 mt-14'>
                    <p className='font-semibold text-lg text-gray-700'>Total Price</p>
                    <p className='font-semibold text-lg text-gray-700'>₹4000</p>
                  </div>
                   
                    <button className="px-6  w-full py-3 text-sm text-white bg-indigo-500 hover:bg-indigo-600" onClick={handleCheckoutClick}>
                      Proceed to Checkout
                    </button>
                </div>  
               
              </div>
            </div>
          </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Cart
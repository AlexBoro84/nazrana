import Footer from "../../components/Footer";
import Link from 'next/link'
import {IoMdArrowBack} from 'react-icons/io'

export default function Checkout(){
  return (
    <>
      <main>
        <div className="flex md:flex-row flex-col">

          <div className="md:w-6/12 w-full">
            <div className="lg:w-8/12 w-10/12  mx-auto my-10">
              <Link href='/cart'>
                <a className="text-gray-600 flex mb-2 items-center"><IoMdArrowBack className="mr-2 text-sm"/> Go Back</a>
              </Link>
              <h2 className='md:text-3xl text-2xl md:font-bold font-semibold text-gray-800 mb-4'>Checkout</h2>  
              <h3 className="mt-8 text-gray-800 font-semibold text-lg">Shipping Details</h3>

              <form className="my-6">
                    <input type="text" name="name" className="placeholder:text-gray-600 block py-3 px-4 rounded-md w-full text-sm text-gray-800 bg-transparent border border-gray-300 focus:outline-none mb-5" placeholder="Full Name" required />

                    <input type="email" name="email" className="placeholder:text-gray-600 block py-3 mb-5 px-4 rounded-md w-full text-sm text-gray-800 bg-transparent border border-gray-300 focus:outline-none " placeholder="Email" required />

                    <input type="text" name="address" className="placeholder:text-gray-600 block py-3 px-4 mb-5 rounded-md w-full text-sm text-gray-800 bg-transparent border border-gray-300 focus:outline-none " placeholder="Address" required />

                    <input type="number" name="mobile" className="placeholder:text-gray-600 block py-3 px-4 mb-5 rounded-md w-full text-sm text-gray-800 bg-transparent border border-gray-300 focus:outline-none " placeholder="Mobile Number" required />

                    <div className="flex">
                      <input type="text" name="city" className="placeholder:text-gray-600 block py-3 px-4 mb-5 rounded-md w-full text-sm text-gray-800 bg-transparent border border-gray-300 focus:outline-none mr-2" placeholder="City" required />
                      <input type="text" name="mobile" className="placeholder:text-gray-600 block py-3 px-4 mb-5 rounded-md w-full text-sm text-gray-800 bg-transparent border border-gray-300 focus:outline-none ml-2" placeholder="State" required />
                    </div>

                    <div className="flex">
                      <input type="number" name="zip" className="placeholder:text-gray-600 block py-3 px-4 mb-5 rounded-md w-full text-sm text-gray-800 bg-transparent border border-gray-300 focus:outline-none mr-2" placeholder="Zip" required />
                      <input type="text" name="country" className="placeholder:text-gray-600 block py-3 px-4 mb-5 rounded-md w-full text-sm text-gray-800 bg-transparent border border-gray-300 focus:outline-none ml-2" placeholder="Country" required />
                    </div>
                
                    <div className="flex items-center">
                      <input id="saveInfo" type='checkbox' className="cursor-pointer"/>
                      <label htmlFor="saveInfo" className="text-sm text-gray-600 ml-3">Save this information for next time</label>
                    </div>

                    <button className="px-6  mt-10  w-full py-3 text-sm text-white bg-indigo-500 hover:bg-indigo-600">
                        Proceed to Payment
                    </button>
                </form>
              </div> 
          </div>

          <div className="md:w-6/12 w-full bg-[#fafbfd]">
            <div className="md:w-8/12 w-10/12  mx-auto mt-20 md:mb-0 mb-20">
              <h3 className="text-gray-800 font-semibold text-lg mb-8">Shipping Details</h3>
              
              <ShippingItems name='Travel Kit Classic - Brown' price='₹3950' image='/img/TK1Brown.jpg' qty='2' />
              <ShippingItems name='Travel Kit Classic - Brown' price='₹3950' image='/img/TK1Brown.jpg' qty='2'  />
              <ShippingItems name='Travel Kit Classic - Brown' price='₹3950' image='/img/TK1Brown.jpg' qty='2'  />

              <div className='flex justify-between mt-10'>
                <p className='font-semibold text-gray-700'>Subtotal</p>
                <p className='font-semibold text-gray-700'>₹ 4000</p>
              </div>

              <div className='flex justify-between mt-4 border-b border-gray-200 pb-10'>
                <p className='font-semibold text-gray-700'>discount</p>
                <p className='font-semibold text-gray-700'>20%</p>
              </div>

              <div className='flex justify-between mt-4'>
                <p className='font-semibold text-xl text-gray-700'>Total</p>
                <p className='font-semibold text-xl text-gray-700'>₹ 2000</p>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

const ShippingItems = ({name, price, image, qty}) => {
  return(
    <div className="flex mt-6 border-b border-gray-200 pb-4">
      <img src={image} className='rounded-sm w-12 h-auto object-cover'/>
      <div className="ml-4 w-full">
        <div className="flex justify-between">
          <h4 className="font-semibold text-gray-700">{name}</h4>
          <p className="text-sm font-semibold text-gray-600 mt-0.5 ml-4">x{qty}</p>
        </div>
        <p className="text-sm font-semibold text-gray-600">{price}</p>
      </div>
    </div>  
  )
}



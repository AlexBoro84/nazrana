import Footer from "../../components/Footer";
import Link from 'next/link'
import {IoMdArrowBack} from 'react-icons/io'
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import {useRouter} from 'next/router'
import { axiosWrapper } from "../../utils/axiosWrapper";
import { toast } from "react-toastify";
import Loader from '../../components/Loader'


const loadScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    document.body.appendChild(script);
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
  })
}

export default function Checkout(){
  const router = useRouter()
  const {authenticated} = useSelector((state) => state.auth)

  const [items, setItems] = useState(null)
  const [subTotal, setSubTotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [razorKey, setRazorKey] = useState(null)

  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [number, setNumber] = useState(null)
  const [landmark, setLandmark] = useState(null)
  const [street, setStreet] = useState(null)
  const [building, setBuilding] = useState(null)
  const [loading, setLoading] = useState(false)

  const displayRazorpay = async () => {
    const res = await loadScript()

    if(!res){
      return
    }
      var options = {
        "key": razorKey,
        "currency": "INR",
        "amount": total * 100, 
        "name": "The Nazrana",
        "description": "Thank you for your test donation",
        "image": "https://www.thenazrana.in/logo.png",
        "handler": async function (response) {

          setLoading(true)

          const data = {
              Name: name,
              Email: email,
              Mobile: number,
              Street: street,
              Landmark: landmark,
              Building: building
          }
          try {
            const res = await axiosWrapper(`/Order/Confirm/${router.query.id}/${response.razorpay_payment_id}`, 'post', data)
            if(res.data.status === true){
              setLoading(false)
              toast.success('Payment Successful')
              router.push('/')
            }
          } catch (error) {
            toast.error('Payment Failed')
            setLoading(true)
          }
        },
        "prefill": {
          "name": name, 
          "email": email,
          "contact": number
        },
      }
      const paymentObject = new window.Razorpay(options)
		  paymentObject.open()
  } 

  const getOrder = async () => {
    const res = await axiosWrapper(`/Order/${router.query.id}`, 'get') 
    if(res.data){
      setItems(res.data.items)
      setSubTotal(res.data.subTotal)
      setTotal(res.data.total)
      setDiscount(res.data.discount)
      setRazorKey(res.data.payment.key)
      setRazorKey(res.data.payment.key)
    }
  }

  useEffect(() => {
    if(authenticated === false){
      router.push('/login')
    }else{
      getOrder()
    }
  }, [router.query.id])

  const handlePayment = (e) => {
    e.preventDefault()
    if(!name) return toast.error('Name is required')
    if(!number) return toast.error('Phone Number is required')
    if(!street) return toast.error('Street is required')
    if(!landmark) return toast.error('Landmark is required')
    if(!building) return toast.error('Building is required')

    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) === false) return toast.error('Please enter a valid email')
    if(/^\d{10}$/.test(number) == false) return toast.error('Please enter a valid mobile number') 
    displayRazorpay()
  }

  return (
    <>
      {loading ? 
        <div className="h-screen w-full flex justify-center items-center">
          <Loader /> 
        </div>
      : (
        <div>
          <div className="flex md:flex-row flex-col">
            <div className="md:w-6/12 w-full">
              <div className="lg:w-8/12 w-10/12  mx-auto my-10">
                <Link href='/cart'>
                  <a className="text-gray-600 flex mb-2 items-center"><IoMdArrowBack className="mr-2 text-sm"/> Go Back</a>
                </Link>
                <h2 className='md:text-3xl text-2xl md:font-bold font-semibold text-gray-800 mb-4'>Checkout</h2>  
                <h3 className="mt-8 text-gray-800 font-semibold text-lg">Shipping Details</h3>

                <form className="my-6">
                      <input type="text" name="name" onChange={(e) => setName(e.target.value)} className="placeholder:text-gray-600 block py-3 px-4 rounded-md w-full text-sm text-gray-800 bg-transparent border border-gray-300 focus:outline-none mb-5" placeholder="Full Name" required />
                      <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="placeholder:text-gray-600 block py-3 mb-5 px-4 rounded-md w-full text-sm text-gray-800 bg-transparent border border-gray-300 focus:outline-none " placeholder="Email" />
                      <input type="number" name="mobile"onChange={(e) => setNumber(e.target.value)}  className="placeholder:text-gray-600 block py-3 px-4 mb-5 rounded-md w-full text-sm text-gray-800 bg-transparent border border-gray-300 focus:outline-none " placeholder="Mobile Number" required />
                      <input type="text" name="street" onChange={(e) => setStreet(e.target.value)} className="placeholder:text-gray-600 block py-3 px-4 mb-5 rounded-md w-full text-sm text-gray-800 bg-transparent border border-gray-300 focus:outline-none " placeholder="Street" required />
                      <input type="text" name="landmark" onChange={(e) => setLandmark(e.target.value)} className="placeholder:text-gray-600 block py-3 px-4 mb-5 rounded-md w-full text-sm text-gray-800 bg-transparent border border-gray-300 focus:outline-none " placeholder="Landmark" required />                 
                      <input type="text" name="building" onChange={(e) => setBuilding(e.target.value)} className="placeholder:text-gray-600 block py-3 px-4 mb-5 rounded-md w-full text-sm text-gray-800 bg-transparent border border-gray-300 focus:outline-none " placeholder="Building" required />                  
                      <button className="px-6  mt-10  w-full py-3 text-sm text-white bg-indigo-500 hover:bg-indigo-600" onClick={handlePayment}>
                          Proceed to Payment
                      </button>
                  </form>
                </div> 
            </div>

            <div className="md:w-6/12 w-full bg-[#fafbfd]">
              <div className="md:w-8/12 w-10/12  mx-auto mt-20 md:mb-0 mb-20">
                <h3 className="text-gray-800 font-semibold text-lg mb-8">Shipping Details</h3>
                
                {items && (
                  Object.values(items).map((item, id) => (
                    <ShippingItems key={id} name={item.product.title} price={item.amount} image={item.product.image} qty={item.quantity} />
                  ))
                )}           

                <div className='flex justify-between mt-10'>
                  <p className='font-semibold text-gray-700'>Subtotal</p>
                  <p className='font-semibold text-gray-700'>{subTotal}</p>
                </div>

                <div className='flex justify-between mt-4 border-b border-gray-200 pb-10'>
                  <p className='font-semibold text-gray-700'>discount</p>
                  <p className='font-semibold text-gray-700'>{discount}</p>
                </div>

                <div className='flex justify-between mt-4'>
                  <p className='font-semibold text-xl text-gray-700'>Total</p>
                  <p className='font-semibold text-xl text-gray-700'>{total}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      )}
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



import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import ButtonBlue from '../../components/buttons/ButtonBlue'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { axiosWrapper } from '../../utils/axiosWrapper'
import {useRouter} from 'next/router'

export default function Track(){

  const router = useRouter()
  const query = router.query
  const [orderId, setOrderID] = useState(query.order_id)
  const [orderDetail, setOrderDetail] = useState(null)

  useEffect(() => {
    fetchTrackOrderDetails(query.order_id)
  },[query])

  const fetchTrackOrderDetails = async(id) => {
      if(id){
        const res = await axiosWrapper(`/Track/${id}`, 'get')
        if(res.data){
          setOrderDetail(res.data)
        }else{
          toast.error('Invalid Order ID')
          setOrderDetail(null)
        }  
      }
  }

  const handleTrackOrder = async (e) => {
    e.preventDefault()
    if(orderId){
      router.push({
        pathname: '/track',
        query: {order_id: orderId}   
      });
    }else{
      router.push({
        pathname: '/track',
      });
      setOrderDetail(null)
    }
  }


  return (
    <>
      <div>
        <Navbar/>
        <div className='md:w-9/12 w-10/12 mx-auto md:my-28 my-14'>
          <p className='md:w-10/12 w-full sm:text-base text-sm text-gray-700'>To track your order please enter your Order ID in the box below and press the Track button. This was given to you on your receipt and in the confirmation email you should have received.</p>
          <form className='mt-8 md:w-8/12 w-full'>
            <input className='px-4 py-3 border-2 w-full rounded-full sm:text-base text-sm' value={orderId} onChange={(e) => setOrderID(e.target.value)} placeholder='Order ID'/>
            <div className='mt-4'>
              <ButtonBlue text='Track Order' onClick={handleTrackOrder}/>
            </div>
          </form>
          
          {orderDetail && (
            <div className='mt-20'>
              <div className='flex md:flex-row flex-col'>
                <div className='md:w-8/12 w-full'>
                    {orderDetail.items.map((item, i) => (
                      <div key={i} className='flex items-center'>
                        <div className='h-20 w-20 rounded-md mr-6'>
                          <img src={item.product.image} className="h-full w-full object-contain"/>
                        </div>
                        <div>
                          <h5 className='font-semibold font-gray-800 sm:text-base text-sm'>{item.product.title}</h5>
                          <h5 className='text-sm font-gray-400 sm:text-base'>Total: {item.amount}</h5>
                          <h5 className='text-sm font-greay-400 sm:text-base '>Qty: {item.quantity}</h5>
                        </div>
                      </div>
                    ))}

                    <div className='mt-10'>
                      <h3 className='text-xl text-gray-700 font-semibold border-b border-[#d7d7d7] py-4 w-10/12'>Shipping Details</h3>
                      <div className='mt-6'>
                        <p className='font-semibold text-gray-700 mb-2 sm:text-base text-sm'>Name:  <span className='font-normal ml-2'>{orderDetail.address.name}</span></p>
                        <p className='font-semibold text-gray-700 mb-2 sm:text-base text-sm'>Email:  <span className='font-normal ml-2'>{orderDetail.address.email}</span></p>
                        <p className='font-semibold text-gray-700 mb-2 sm:text-base text-sm'>Mobile:  <span className='font-normal ml-2'>{orderDetail.address.mobile}</span></p>
                        <p className='font-semibold text-gray-700 mb-2 sm:text-base text-sm'>Address: <span className='font-normal ml-2'>{orderDetail.address.building}, {orderDetail.address.landmark}, {orderDetail.address.street} </span></p>
                      </div>
                    </div>  
                    <div className='mt-10'>
                      <h3 className='text-xl text-gray-700 font-semibold border-b border-[#d7d7d7] py-4 w-10/12'>Total Amount Paid</h3>
                      <div className='mt-6'>
                        <p className='font-semibold text-gray-700 mb-2 sm:text-base text-sm'>Total:  <span className='font-normal ml-2'>₹{orderDetail.total}</span></p>
                      </div>
                    </div>  
                </div>
                <div className='md:w-4/12 w-full md:mt-0 mt-14'>
                  <div className='flex'>
                    <div className='flex flex-col items-center'>
                      <div className={`h-7 w-7 relative rounded-full ${orderDetail.events[0].completed === true ? 'bg-[#6569f4]' : 'bg-[#9ea1fa] ' } flex items-center justify-center`}>
                        <div className='h-2 w-2 rounded-full bg-white'></div>
                      </div>
                      <div className={`h-20 w-0.5 ${orderDetail.events[0].completed === true ? 'bg-[#6569f4]' : 'bg-[#9ea1fa] '}`}></div>
                    </div>
                    <div className='ml-4'>
                      <p className='text-gray-600 font-semibold text-sm'>Ordered</p>
                      <p className='text-xs text-gray-400'>{orderDetail.events[0].date.split('.')[0]}</p>
                    </div>
                  </div>

                  <div className='flex'>
                    <div className='flex flex-col items-center'>
                      <div className={`h-7 w-7 relative rounded-full ${orderDetail.events[1].completed === true ? 'bg-[#6569f4]' : 'bg-[#9ea1fa] ' } flex items-center justify-center`}>
                        <div className='h-2 w-2 rounded-full bg-white'></div>
                      </div>
                      <div className={`h-20 w-0.5 ${orderDetail.events[1].completed === true ? 'bg-[#6569f4]' : 'bg-[#9ea1fa] '}`}></div>
                    </div>
                    <div className='ml-4'>
                      <p className='text-gray-600 text-sm font-semibold'>Shipped</p>
                      <p className='text-xs text-gray-400'>{orderDetail.events[1].date && orderDetail.events[1].date.split('.')[0]}</p>
                    </div>
                  </div>

                  <div className='flex'>
                    <div className='flex flex-col items-center'>
                      <div className={`h-7 w-7 relative rounded-full ${orderDetail.events[2].completed === true ? 'bg-[#6569f4]' : 'bg-[#9ea1fa] ' } flex items-center justify-center`}>
                        <div className='h-2 w-2 rounded-full bg-white'></div>
                      </div>
                      <div className={`h-20 w-0.5 ${orderDetail.events[2].completed === true ? 'bg-[#6569f4]' : 'bg-[#9ea1fa] '}`}></div>
                    </div>
                    <div className='ml-4'>
                      <p className='text-gray-600 text-sm font-semibold'>In Transit</p>
                      <p className='text-xs text-gray-400'>{orderDetail.events[2].date && orderDetail.events[2].date.split('.')[0]}</p>
                    </div>
                  </div>

                  <div className='flex'>
                    <div className='flex flex-col items-center'>
                      <div className={`h-7 w-7 relative rounded-full ${orderDetail.events[3].completed === true ? 'bg-[#6569f4]' : 'bg-[#9ea1fa] ' } flex items-center justify-center`}>
                        <div className='h-2 w-2 rounded-full bg-white'></div>
                      </div>
                      <div className={`h-20 w-0.5 ${orderDetail.events[3].completed === true ? 'bg-[#6569f4]' : 'bg-[#9ea1fa] '}`}></div>
                    </div>
                    <div className='ml-4'>
                      <p className='text-gray-600 text-sm font-semibold'>Delivered</p>
                      <p className='text-xs text-gray-400'>{orderDetail.events[3].date && orderDetail.events[3].date.split('.')[0]}</p>
                    </div>
                  </div>

                  <div className='flex'>
                    <div className='flex flex-col items-center'>
                      <div className={`h-7 w-7 relative rounded-full ${orderDetail.events[3].completed === true ? 'bg-[#6569f4]' : 'bg-[#9ea1fa] ' } flex items-center justify-center`}>
                        <div className='h-2 w-2 rounded-full bg-white'></div>
                      </div>
                    </div>
                    <div className='ml-4'>
                      <p className='text-gray-600 text-sm font-semibold'>Completed</p>
                      <p className='text-xs text-gray-400'>{orderDetail.events[4].date && orderDetail.events[4].date.split('.')[0]}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          )}
        </div>
      </div>

      <Footer/>
    </>
  )
}

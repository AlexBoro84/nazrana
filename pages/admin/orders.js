import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify'
import AdminNav from '../../components/AdminNav'
import SideBar from '../../components/SideBar'
import { axiosWrapper } from '../../utils/axiosWrapper'
import {FiTrash} from 'react-icons/fi'
import {FaRegEdit} from 'react-icons/fa'
import {GoPrimitiveDot} from 'react-icons/go'


const Orders = () => {

  const [showProducts, setShowProducts] = useState({show: false, id: null})
  const [orders, setOrders] = useState(null)
  const [showOrderUpdate, setShowOrderUpdate] = useState({show: false, id: null})
  const [orderDetail, setOrderDetail] = useState(null)


  const getOrders = async () => {
    try {
      const res = await axiosWrapper(`/Admin/orders`, 'get')
      if(res.data){
        setOrders(res.data)
      }
    } catch (error) {
      toast.error('Orders fetch failed')
    }
  }


  useEffect(() => {
    getOrders()
  },[])


  const handleUpdateStatus = async(id) => {
    try {
      const res = await axiosWrapper(`/Admin/updateOrder/${id}`, 'post')
      if(res.data){
        if(res.data.status === true){
          toast.success('Update Success')
          const res = await axiosWrapper(`/Track/${id}`, 'get')
          setOrderDetail(res.data)
          getOrders()
        }
      }
    } catch (error) {
      toast.error('Update Failed')  
    }
  }

  const handleCancelOrder = async(id) => {
    try {
      const res = await axiosWrapper(`/Admin/cancelOrder/${id}`, 'post')
      if(res.data.status === true){
        toast.success('Update Success')
        getOrders()
      }
    } catch (error) {
      toast.error('Update Failed')  
    }
  }


  const handleOrderUpdateStatus = async(id) => {
    if(id){
      const res = await axiosWrapper(`/Track/${id}`, 'get')
      if(res.data){
        setOrderDetail(res.data)
        setShowOrderUpdate({show: !showOrderUpdate.show, id})
        getOrders()
      }else{
        toast.error('Invalid Order ID')
        setOrderDetail(null)
      }  
    }
  }



  return (
    <div className='h-screen'>
      <AdminNav/>
      <div className='flex md:pb-0 mb-16 h-full'>
        <SideBar/>
        <div className=' w-full rounded-xl px-4 md:px-10 lg:mr-8 py-4 bg-[#f3f3fe]'>
          <h2 className='text-xl font-semibold text-gray-700'>Orders</h2> 
          <div className='mt-4 '>
              <div className='bg-white px-4 py-3 rounded-md hidden md:flex'>
                <h4 className='md:text-sm text-xs text-gray-500 font-semibold w-1/12'>Id</h4>
                <h4 className='md:text-sm text-xs text-gray-500 font-semibold w-5/12'>Address</h4>
                <div className='w-6/12 flex'>
                  <h4 className='md:text-sm text-xs text-gray-500 font-semibold w-3/12'>Status</h4>
                  <h4 className='md:text-sm text-xs text-gray-500 font-semibold w-3/12'>total</h4>
                  <div className='w-6/12 flex'>
                      <h4 className='md:text-sm text-xs text-gray-500 font-semibold w-6/12'>Products</h4>
                      <div className='w-4/12 flex'>
                      </div>
                  </div>
                </div>
              </div>

              <div className='mt-4'>
                  {orders && orders.map(order => (
                    <div key={order.id} className='border-b border-gray-10'>
                      <div className='bg-white px-4 py-4 flex md:flex-row flex-col'>
                        <h4 className='md:text-sm text-xs text-gray-500 font-semibold w-1/12 items-center md:block hidden md:mr-2 mr-0'>{order.id}</h4>
                        <h4 className='md:text-sm text-xs text-gray-500 font-semibold md:w-5/12 w-full flex items-center'>{order.address.building}, {order.address.landmark}, {order.address.street}</h4>
                        <div className='w-full md:w-6/12 md:flex '>
                          <h4 className='md:text-sm text-xs text-gray-500 font-semibold md:w-3/12 w-full flex items-center'><span className='md:hidden block md:mr-0 mr-1'>Status: </span><GoPrimitiveDot className={`${order.status === 'Cancelled' ? "text-red-500" : "text-green-600"} text-lg mr-1 md:hidden block`}/> {order.status}</h4>
                          <h4 className='md:text-sm text-xs text-gray-500 font-semibold md:w-3/12 w-full flex items-center'><span className='md:hidden block md:mr-0 mr-1'>Total: </span>{order.total}</h4>
                          <div className='flex md:justify-start md:w-6/12 justify-between w-full md:mt-0 mt-2'>
                              <div className='md:text-sm text-xs text-gray-500 font-semibold md:w-6/12 md:mr-0 mr-5'>
                                  <button className='bg-[#6569f4] py-1.5 hover:bg-[#575cf4] text-xs font-semibold px-4 rounded-full text-white' onClick={() => (setShowProducts({show: !showProducts.show, id: order.id }), setShowOrderUpdate({show: false, id: null}))}>x {order.items.length}</button>
                              </div>
                              <div className='flex md:w-6/12  relative'>    
                                {
                                  order.status !== 'Cancelled' && (
                                     <button className={`text-md text-[#4d52f8] font-semibold flex items-center w md:w-6/12 cursor-pointer md:mr-0 mr-6`} onClick={() => (handleOrderUpdateStatus(order.id), setShowProducts({show: false, id: null }))}><FaRegEdit/></button>                                
                                   )
                                }
                                {
                                  order.status !== 'Completed' &&  order.status !== 'Cancelled' && 
                                  (<button className='text-md text-red-500 font-semibold md:w-6/12 flex items-center cursor-pointer' onClick={() => handleCancelOrder(order.id)}><FiTrash/></button>)
                                } 
                              </div>
                          </div>
                        </div>
                      </div>

                       <div className='bg-white px-4 border-t border-gray-100'>
                         {showProducts.show && showProducts.id === order.id && order.items.map((item, id) => (
                           <div key={id} className='flex py-4'>
                                <div className='h-14 w-14'>
                                  <img src={item.product.image} className='w-full h-full object-contain'/>
                                </div>
                                <div className='ml-4'>
                                  <h4 className='md:text-sm text-xs text-gray-500 font-semibold'>{item.product.title}</h4>
                                  <h4 className='text-xs text-gray-500 font-semibold mr-4'>price: {item.amount}</h4>
                                  <h4 className='text-xs text-gray-500 font-semibold'>qty:{item.quantity}</h4>  
                                </div>
                           </div>
                         ))}


                         {showOrderUpdate.show && showOrderUpdate.id === order.id && orderDetail && (
                           <div className='py-10'>
                                <div className='flex justify-center'>
                                  <div className='flex items-center'>
                                      <div className={`md:h-6 md:w-6 w-5 h-5 relative rounded-full ${orderDetail.events[0].completed === true ? 'bg-[#6569f4]' : 'bg-[#9ea1fa] '} flex items-center justify-center`}>
                                        <div className='md:h-2 md:w-2 h-1 w-1 rounded-full bg-white'></div>
                                        <p className='absolute md:text-sm text-xs text-gray-600 top-7'>Ordered</p>
                                      </div>
                                    <div className={`h-0.5 md:w-36 w-16 ${orderDetail.events[0].completed === true ? 'bg-[#6569f4]' : 'bg-[#9ea1fa] '}`}></div>
                                  </div> 
                                  <div className='flex items-center'>
                                    <div className={`md:h-6 md:w-6 w-5 h-5 relative rounded-full ${orderDetail.events[1].completed === true ? 'bg-[#6569f4]' : 'bg-[#9ea1fa] '} flex items-center justify-center`}>
                                      <div className='md:h-2 md:w-2 h-1 w-1 rounded-full bg-white'></div>
                                      <p className='absolute md:text-sm text-xs text-gray-600 top-7'>Shipped</p>
                                    </div>
                                    <div className={`h-0.5 md:w-36 w-16 ${orderDetail.events[1].completed === true ? 'bg-[#6569f4]' : 'bg-[#9ea1fa] '}`}></div>
                                  </div>

                                  <div className='flex items-center'>
                                    <div className={`md:h-6 md:w-6 w-5 h-5 relative rounded-full ${orderDetail.events[2].completed === true ? 'bg-[#6569f4]' : 'bg-[#9ea1fa] '} flex items-center justify-center`}>
                                      <div className='md:h-2 md:w-2 h-1 w-1 rounded-full bg-white'></div>
                                      <p className='absolute md:text-sm text-xs text-gray-600 top-7'>InTransit</p>
                                    </div>
                                    <div className={`h-0.5 md:w-36 w-16 ${orderDetail.events[2].completed === true ? 'bg-[#6569f4]' : 'bg-[#9ea1fa] '}`}></div>
                                  </div>

                                   <div className='flex items-center'>
                                    <div className={`md:h-6 md:w-6 w-5 h-5 relative rounded-full ${orderDetail.events[3].completed === true ? 'bg-[#6569f4]' : 'bg-[#9ea1fa] '} flex items-center justify-center`}>
                                      <div className='md:h-2 md:w-2 h-1 w-1 rounded-full bg-white'></div>
                                      <p className='absolute md:text-sm text-xs text-gray-600 top-7'>Delivered</p>
                                    </div>
                                  </div>                                  
                              </div>
                              <div className='mt-14 mx-auto flex justify-center'>
                               {order.status !== 'Completed' && order.status !== 'Canceled' && <button className='bg-[#6569f4] hover:bg-[#777bfa] text-white text-xs font-semibold rounded-full px-5 py-2' onClick={() => handleUpdateStatus(order.id)}>Update</button>}
                              </div>
                  
                           </div>
                         )}

                       </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Orders
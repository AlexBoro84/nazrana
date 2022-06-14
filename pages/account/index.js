import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { axiosWrapper } from '../../utils/axiosWrapper'
import {FiEdit} from 'react-icons/fi'
import {GoPrimitiveDot} from 'react-icons/go'
import {useRouter} from 'next/router'
import Modal from '../../components/Modal'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {BiImageAdd} from 'react-icons/bi'
import { toast } from 'react-toastify'
 
const Account = () => {

  const router = useRouter()

  const [orders, setOrders] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [dob, setDOB] = useState(null)
  const [imgBlob, setImgBlob] = useState(null)
  const [profileImg, setProfileImg] = useState(null)
  const [name, setName] = useState(null)

  const handleDateChange = (date) => {
    setDOB(date)
  }

  useEffect(() => {
    const getOrders = async () => {
      try {
        setLoading(true)
        const orderRes = await axiosWrapper('/Account/orders', 'get')
        const accountRes = await axiosWrapper('/Account', 'get')  
        if(orderRes.data){
          setOrders(orderRes.data)
        }
        if(accountRes.data){
          setProfile(accountRes.data)
          setName(accountRes.data.name)
          setImgBlob(accountRes.data.imageUri)
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    getOrders()
  }, [showModal])

  const handleMoreDetails = (orderId) => {
    router.push({
      pathname: '/track',
      query: {order_id: orderId}   
    });
  }

  const dateFormat = (date) => {
    const offset = date.getTimezoneOffset()
    let yourDate = new Date(date.getTime() - (offset*60*1000))
    return yourDate.toISOString().split('T')[0]
  }

  const handleUpdateSubmit = async (e) => {
    e.preventDefault()
    
    try {
      let data = new FormData();
      data.append('NAME', name);
      data.append('DOB', dateFormat(dob));
      data.append('Image', profileImg); 

      const res = await axiosWrapper('/Account', 'post', data, true)
      if(res.data){
        toast.success('Update Success')
        setShowModal(false)
      }else{
        toast.error('Update Failed')
      }
    } catch (error) {
      toast.error('Update Failed')
    }
  }

  const handleProfileImageChange = (e) => {
    const files = e.target.files
    if(files){
      if(files[0].size > 100000){
        toast.error('Image size less than 100kb')
      }else{
        setImgBlob(URL.createObjectURL(files[0]))
        setProfileImg(files[0])
      }
    }
  }


  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <Modal onClose={() => setShowModal(false)} show={showModal}>
          <form className="my-6">
            <input type='file' id='image-file' accept="image/*" className='hidden' onChange={handleProfileImageChange}/>
            <div className='flex'>
              <div className='w-full md:w-4/12 '>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 ml-0.5 mt-4">Profile Image</label>
                <label htmlFor='image-file' className='cursor-pointer flex items-center border-2 border-dashed w-10/12 justify-center py-8'>
                  <BiImageAdd  className='text-6xl text-gray-400'/>
                </label>
              </div>
              <div className='w-full md:w-8/12 flex items-end'>
                {imgBlob && 
                  (
                    <div className='h-32 w-36'>
                      <img src={imgBlob} alt='profile-img' className='h-full w-full object-cover'/> 
                    </div>
                  )
                }
              </div>
            </div>
            <label htmlFor="name"  className="block text-sm font-medium text-gray-700 mb-2 ml-0.5 mt-4">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="placeholder:text-gray-600 block py-3 px-4 rounded-md w-full text-sm text-gray-800 bg-transparent border border-gray-300 focus:outline-none mb-5" placeholder="Full Name"/>
            
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 ml-0.5">Date Of Birth</label>
            <DatePicker placeholderText={new Date().toISOString().split('T')[0]} selected={dob} onChange={handleDateChange} className="placeholder:text-gray-600 block py-3 px-4 rounded-md w-full text-sm text-gray-800 bg-transparent border border-gray-300 focus:outline-none mb-5" placeholder="Full Name"/>
            
            <button className="mt-6 w-full py-3 text-sm text-white bg-indigo-500 hover:bg-indigo-600" onClick={handleUpdateSubmit}>Update</button>
          </form>
      </Modal>

      <div className='md:py-4 py-0'>
        <div className='md:w-9/12 w-11/12 mx-auto'>
          <div className='mt-10'>
            <div className='border-gray-100'>
              <div className='bg-white px-6 md:py-0 py-5 relative'>
                <div className='flex md:flex-row flex-col md:mt-8 mt-0 py-2 md:items-center items-start md:justify-between'>
                  {
                    profile && (
                      <>
                        <div className='flex md:flex-row flex-col items-center'>
                          <div className='w-12 h-12 rounded-full overflow-hidden md:static absolute -top-6 left-1/2 right-1/2 transform md:translate-x-0 -translate-x-1/2'>
                            <img src={`${profile.imageUri ? profile.imageUri : 'img/default.png'}`} alt='default' className="object-cover h-full w-full"/>
                          </div>
                          <div className='md:ml-5 flex md:flex-col items-center'>
                            <h5 className='md:text-xs text-sm mr-3 md:mr-0 text-gray-500 font-semibold col-span-2'>name:</h5>
                            <h4 className='md:text-sm text-xs font-semibold text-gray-600'>{profile.name}</h4>  
                          </div>
                        </div>
                        <div className='flex md:flex-col items-center'>
                          <h5 className='md:text-xs text-sm mr-3 md:mr-0 text-gray-500 font-semibold col-span-2'>username:</h5>
                          <h4 className='md:text-sm text-xs font-semibold text-gray-600'>{profile.userName}</h4>                  
                        </div>
                        <div className='flex md:flex-col items-center'>
                          <h5 className='md:text-xs text-sm mr-3 md:mr-0 text-gray-500 font-semibold col-span-2'>email:</h5>
                          <h4 className='md:text-sm text-xs font-semibold text-gray-600'>{profile.email}</h4>     
                        </div>
                        {
                          profile.dob && (
                              <div className='flex md:flex-col items-center'>
                                <h5 className='md:text-xs text-sm mr-3 md:mr-0 text-gray-500 font-semibold col-span-2'>dob:</h5>
                                <h4 className='md:text-sm text-xs font-semibold text-gray-600'>{profile.dob.split('T')[0]}</h4>     
                              </div>
                          )
                        }
                        <FiEdit className='cursor-pointer md:static absolute right-4 top-4' onClick={() => setShowModal(true)}/>             
                      </>
                    )
                  }
                  </div>  
              </div>
            </div>

            <div className='border border-gray-100 pb-10 rounded-sm mt-4'>             
              <h4 className='pt-6 pb-4 text-lg font-semibold bg-white px-6'>Order List</h4>
                  {orders ? (
                    <>
                      <div className='pb-4 md:flex hidden bg-white px-6'>
                        <h5 className='text-xs text-gray-500 font-semibold w-2/12 '>Order Id</h5>
                        <h5 className='text-xs text-gray-500 font-semibold w-6/12 '>Address</h5>
                        <h5 className='text-xs text-gray-500 font-semibold w-1/12 '>Price</h5>
                        <h5 className='text-xs text-gray-500 font-semibold w-2/12 '>Status</h5>
                        <h5 className='text-xs text-gray-500 font-semibold w-2/12 '>Track Order</h5>
                      </div>
                      {orders.map((order) => (
                          <div key={order.id} className='flex md:flex-row flex-col py-6 px-6 bg-white mt-1'>
                            <h4 className='text-sm font-semibold text-gray-600 w-full md:w-2/12 md:mt-0 mt-1.5'>
                              <span className='md:hidden mr-1'>Order ID: </span> {order.id}
                            </h4>
                            <h4 className='text-sm font-semibold text-gray-600 w-full md:w-6/12  md:mt-0 mt-1.5'>
                              <span className='md:hidden mr-1'>Address: </span>
                              {order.address.building}, <span className='font-semibold text-gray-500 text-xs'> {order.address.landmark}, {order.address.street}</span></h4>
                            <h4 className='text-sm font-semibold text-gray-600 w-full md:w-1/12  md:mt-0 mt-1.5'>
                              <span className='md:hidden md:mr-0 mr-2'>total: </span>
                              {order.total}
                            </h4>
                            <h4 className='text-sm font-semibold text-gray-600 w-full md:w-2/12  md:mt-0 mt-1.5'>
                              <div className='flex items-center'>
                                <span className='md:hidden mr-1'>Status: </span>
                                <GoPrimitiveDot className='text-green-600 text-lg mr-1'/> 
                                {order.status}
                              </div>
                            </h4>
                            <div className='w-full md:w-2/12 md:mt-0 mt-1.5'>
                              <h4 className='text-xs font-semibold text-white cursor-pointer py-1 w-14 text-center rounded-full bg-[#6569f4] hover:bg-[#5459ef]' onClick={() => handleMoreDetails(order.id)}>Track</h4>
                            </div>
                          </div>
                      ))}
                    </>
                  ): (
                    <p className='text-center text-gray-500 bg-white px-6'>No orders available</p>
                  )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
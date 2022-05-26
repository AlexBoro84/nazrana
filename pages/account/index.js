import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { axiosWrapper } from '../../utils/axiosWrapper'

const Account = () => {

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axiosWrapper('Account/orders', 'get')
        // console.log(res.data)  
      } catch (error) {
        console.log(error)  
      }
    }
    getOrders()
  }, [])

  return (
    <>
      <Navbar />
      <div className='bg-gray-100 h-screen py-10'>
        <div className='w-9/12 mx-auto'>
          <div className='mt-10'>

            <div className='border-gray-100'>
              <div className='bg-white px-6'>
                <h4 className='text-lg font-semibold py-6'>Profile</h4>
                <div className='flex flex-col mt-8 items-center'>
            
                </div>  
              </div>
            </div>

            <div className='bg-white border border-gray-100 px-6 pb-10 rounded-sm mt-10'>             
              <h4 className='py-6 text-lg font-semibold border-b border-gray-200'>Order List</h4>
              <div className='mt-10'>
                  <p className='text-center text-gray-500'>No orders available</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Account
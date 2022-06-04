import React from 'react'
import AdminNav from '../../components/AdminNav'
import SideBar from '../../components/SideBar'

const orders = () => {
  return (
    <div className='h-screen'>
      <AdminNav/>
      <div className='flex'>
        <SideBar/>
        <div className='bg-[#f3f3fe] w-full rounded-xl px-4 md:px-10 lg:mr-8 py-4'>
          <h2 className='text-xl font-semibold text-gray-700'>Orders</h2> 
          <div className='mt-4 '>
              <div className='bg-white px-4 py-3 rounded-md hidden md:flex'>
                <h4 className='md:text-sm text-xs text-gray-500 font-semibold w-1/12'>Id</h4>
                <h4 className='md:text-sm text-xs text-gray-500 font-semibold w-1/12'>Image</h4>
                <div className='w-10/12 flex'>
                  <h4 className='md:text-sm text-xs text-gray-500 font-semibold w-5/12'>Title</h4>
                  <h4 className='md:text-sm text-xs text-gray-500 font-semibold w-2/12'>Price</h4>
                  <h4 className='md:text-sm text-xs text-gray-500 font-semibold w-2/12'>Sold</h4>
                  <div className='w-4/12 flex'>
                    <h4 className='md:text-sm text-xs text-gray-500 font-semibold w-4/12'>Stock</h4>
                    <div className='w-8/12 flex'>
                      <h4 className='md:text-sm text-xs text-gray-500 font-semibold w-6/12'>Update</h4>
                      <h4 className='md:text-sm text-xs text-gray-500 font-semibold w-6/12'>Delete</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default orders
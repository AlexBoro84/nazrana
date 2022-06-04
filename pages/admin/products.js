import React, {useState, useEffect} from 'react'
import AdminNav from '../../components/AdminNav'
import SideBar from '../../components/SideBar'
import {axiosWrapper} from '../../utils/axiosWrapper'
import {FiTrash} from 'react-icons/fi'
import {FaRegEdit} from 'react-icons/fa'

const Admin = () => {

  const [products, setProducts] = useState(null)

  const getProducts = async () => {
    try {
      const res = await axiosWrapper('/Admin/products', 'get')
      if(res.data){
        setProducts(res.data)
      }
    } catch (error) {
    }
  }

  useState(() => {
    getProducts()
  },[])

  return (
    <div>
      <AdminNav/>
      <div className='flex'>
        <SideBar/>
        <div className='bg-[#f3f3fe] w-full rounded-xl lg:mr-8 px-4 md:px-10 py-4'>
          <h2 className='text-xl font-semibold text-gray-700'>Products</h2> 
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

              <div className='mt-4'>
                  {products && products.map(product => (
                    <div key={product.id}>
                      <div className='bg-white px-4 py-4 border-b border-gray-100 flex'>
                        <h4 className='md:text-sm text-xs text-gray-500 font-semibold w-1/12 items-center md:block hidden'>{product.id}</h4>
                        <div className='md:text-sm text-xs text-gray-500 font-semibold md:w-1/12 md:mr-0 mr-5'>
                          <div className='h-16 w-16 md:h-10 md:w-10 rounded-sm overflow-hidden'>
                            <img src={product.image} alt='product image' className='h-full w-full object-cover'/>
                          </div>
                        </div>
                        <div className='w-full md:w-10/12 md:flex '>
                          <h4 className='md:text-sm text-xs text-gray-500 font-semibold md:w-5/12 w-full flex items-center'>{product.title}</h4>
                          <h4 className='md:text-sm text-xs text-gray-500 font-semibold md:w-2/12 w-full flex items-center'><span className='md:hidden block md:mr-0 mr-1'>Price: </span>{product.price}</h4>
                          <h4 className='md:text-sm text-xs text-gray-500 font-semibold md:w-2/12 w-full flex items-center'><span className='md:hidden block md:mr-0 mr-1'>Sold: </span>{product.sold}</h4>
                          <div className='flex md:justify-start md:w-4/12 justify-between w-full'>
                            <h4 className='md:text-sm text-xs text-gray-500 font-semibold md:w-4/12 w-full  flex items-center'><span className='md:hidden block md:mr-0 mr-1'>Stock: </span>{product.stock}</h4>
                            <div className='flex md:w-8/12'>
                              <div className='text-md text-[#4d52f8] font-semibold flex items-center w-full md:w-6/12 cursor-pointer md:mr-0 mr-2'><FaRegEdit/></div>
                              <div className='text-md text-red-500 font-semibold md:w-6/12 w-full flex items-center cursor-pointer'><FiTrash/></div>
                            </div>
                          </div>
                        </div>
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

export default Admin
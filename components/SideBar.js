import React from 'react'
import {BsBagFill, BsFillCartFill} from 'react-icons/bs'
import {AiOutlineLogout, AiFillPieChart} from 'react-icons/ai'
import {useRouter} from 'next/router'
import Link from 'next/link'

const SideBar = () => {

  const router = useRouter()
  

  return (
    <aside className="lg:w-60 md:w-14 md:h-full fixed bottom-0 md:sticky md:top-20 bg-white md:shadow-none shadow-2xl w-full">
        <div className="p-2 lg:p-4 ">
            <ul className="md:space-y-2 md:mt-6 mt-0 md:flex-col flex justify-around">
                <li>
                    <div className="flex items-center p-2 text-base text-gray-600 font-normal rounded-lg ">
                        <AiFillPieChart className="flex-shrink-0 w-6 h-6 transition duration-75" />
                        <span className="ml-3 hidden lg:block">Dashboard</span>
                    </div>
                </li>
                <li>
                    <Link href='/admin/products'>
                        <a href="#" className={`${router.pathname === '/admin/products' ? 'bg-[#6569f4] text-white' : 'text-gray-600'} flex items-center p-2 text-base font-normal  rounded-lg hover:bg-[#6569f4] hover:text-white`}>
                            <BsFillCartFill className="flex-shrink-0 w-6 h-5  transition duration-75" />
                            <span className="ml-3 hidden lg:block">Products</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/admin/orders'>
                        <a href="#" className={`${router.pathname === '/admin/orders' ? 'bg-[#6569f4] text-white' : 'text-gray-600'} flex items-center p-2 text-base font-normal rounded-lg hover:bg-[#6569f4] hover:text-white`}>
                            <BsBagFill className="flex-shrink-0 w-6 h-5 transition duration-75 " />
                            <span className="ml-3 hidden lg:block">Orders</span>
                        </a>
                    </Link>
                   
                </li>
                <li>
                    <div href="#" className="flex items-center p-2 text-base font-normal text-gray-600 rounded-lg hover:bg-[#6569f4] hover:text-white">
                        <AiOutlineLogout className="flex-shrink-0 w-6 h-5 transition duration-75"/>
                        <span className="ml-3 hidden lg:block">Logout</span>
                    </div>
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default SideBar
import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import Link from 'next/link'
import Image  from 'next/image'
import {BsPinMap} from 'react-icons/bs'
import {AiOutlineShopping, AiOutlineLogin} from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi'
import { useRouter } from 'next/router'
import { axiosWrapper } from '../utils/axiosWrapper'
import { toast } from 'react-toastify'

const Navbar = () => {

  const router = useRouter()
  
  const [showMenu, setShowMenu] = useState(false)
  const [search, setSearch] = useState('')


  const handleSearch = (e) => {
    e.preventDefault()
    router.push({
      pathname: '/products',
      query: search ? { s: search } : null
    })
  }

  const MobileNavItems = () => {
    return(
      <ul className="text-sm font-medium md:hidden block mt-4 ml-1 mx-auto">
        <li className='flex'>
          <Link href='/track'>
            <a className='flex items-center'>
              <BsPinMap className='mr-3 text-[#384aeb]'/>
              Track order
            </a>
          </Link>  
        </li>
        <li className='flex my-3'>
          <Link href='/cart'>
            <a className='flex items-center'>
              <AiOutlineShopping className='mr-3 text-[#384aeb]'/>
              Cart
            </a>
          </Link>  
        </li>
        <li className='flex mb-2'>
          <Link href='/login'>
            <a className='flex items-center'>
              <AiOutlineLogin className='mr-3 text-[#384aeb]'/>
              Login
            </a>
          </Link>  
        </li>
      </ul>
    ) 
  }

  
  const handleCheckoutClick = async() => {
    const res =  await axiosWrapper('/Order', 'post', {})
    if(res.data.status === true){
      router.push(`/checkout/${res.data.data.id}`)
    }else{
      toast.success('Cart is empty')
      router.push('/')
    }
  }

  return (
    <nav className="bg-white py-4 border-b-2 shadow-sm sticky top-0 z-20">
        <div className="flex lg:w-9/12 md:w-11/12 w-10/12 mx-auto flex-wrap justify-between items-center">
            <div className='flex'>
              <Link href="/" >
                <a>
                  <Image src="/img/logo.png" alt="me"  width='130' height='50' className=' cursor-pointer'/>
                </a>
              </Link>

              <form className='lg:w-72 md:w-64 md:block hidden'>   
                <div className="ml-8 relative">
                    <input type="search" className="block w-full py-3 pr-3 pl-6 focus:outline-none text-sm text-gray-900 rounded-full border border-gray-500" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <button  className="absolute right-2.5 bottom-2.5 focus:outline-none text-lg rounded-lg px-4 py-1 text-gray-700" onClick={handleSearch}>
                      <FiSearch/>
                    </button>
                </div>
              </form>
            </div>

            <div className='flex items-center'>
              <div className='block md:hidden'>
                <Link href='/products'>
                  <a>
                    <FiSearch className='text-lg cursor-pointer'/>
                  </a>
                </Link>

              </div>
              <GiHamburgerMenu className="md:hidden block text-xl ml-4" onClick={() => setShowMenu(!showMenu)}/>
            </div>

            <div className='items-center md:flex hidden'>
              <ul className="md:text-sm md:font-medium md:flex">
                <li className='mx-3'>
                  <Link href="/track" >
                    <div className={`p-2.5 ${router.pathname === '/track' ? 'bg-[#6569f4] hover:bg-[#384aeb]': ''}} rounded-full cursor-pointer shadow-md`}>
                      <BsPinMap className={`text-base ${router.pathname === '/track' ? 'text-white' : ''}`}/>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/cart" >
                    <div className={`p-2.5 ${router.pathname === '/cart' ? 'bg-[#6569f4] hover:bg-[#384aeb]': ''}} rounded-full  cursor-pointer shadow-md`}>
                      <AiOutlineShopping className={`text-base ${router.pathname === '/cart' ? 'text-white' : ''}`}/>
                    </div>
                  </Link>
                </li>
                <li className='mx-3'>
                  <Link href="/login" >
                    <div className={`p-2.5 rounded-full  cursor-pointer shadow-md`}>
                      <AiOutlineLogin className='text-base'/>
                    </div>
                  </Link>
                </li>
              </ul>
              <button className='lg:ml-10 md:ml-2 border border-gray-150 px-9 py-2.5 rounded-full font-semibold hover:border-[#384aeb] transition' onClick={handleCheckoutClick}>Buy Now</button>
            </div>
        </div>
        <div className='w-9/12 mx-auto'>
          {showMenu && <MobileNavItems/>}
        </div>
    </nav>
  )
}



export default Navbar
import Link from 'next/link'
import {BsPinMap} from 'react-icons/bs'
import {FiSmartphone} from 'react-icons/fi'
import {MdOutlineMailOutline} from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='bg-[#012346] pt-16 md:pt-36'>
      <div className='md:w-9/12 w-10/12 mx-auto md:mt-10 mt-0 flex md:flex-row flex-col justify-between text-white'>
        <div className='md:w-64 w-full'>
          <h2 className='text-4xl font-semibold'>Our Mission</h2>
          <p className='text-gray-400 mt-4 text-normal'>Our Mission The Nazrana is about showcasing affection, care, and gratitude for the institute which had played a vital role in one's learning curve. The store is an effort to bring those memories back through select souvenir products. The products can be used as a unique gifting solution for inspiring others and showing your eternal bond with your alma-mate.</p>
        </div>
        <div>
          <h4 className='text-xl font-semibold md:mt-0 mt-6'>Quick Links</h4>
          <ul className='mt-4 text-gray-400 md:block flex'>
            <li className='cursor-pointer'>
              <Link href='/'>Home</Link>
            </li>
            <li className='md:my-4 md:mx-0 mx-6 cursor-pointer'>
              <Link href='/cart'>Buy</Link>
            </li>
            <li className='cursor-pointer'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className='md:w-64 w-full md:mt-0 mt-6'>
          <h4 className='text-xl font-semibold'>Contact Us</h4>
          <div className='flex mt-4'>
            <div className='p-2 h-full bg-[#6569f4] rounded-full hover:bg-[#384aeb] cursor-pointer shadow-md mr-3'>
              <BsPinMap className='text-white text-sm'/>
            </div>
            <div>
              <h5>Head Office</h5>
              <p className='text-gray-400 mt-1'>PLOT No 15, Krishna Colony, IIM Road LKO, LUCKNOW, Lucknow, Uttar Pradesh, 226020</p>
            </div>
          </div>
          <div className='flex mt-4'>
            <div className='p-2 h-full bg-[#6569f4] rounded-full hover:bg-[#384aeb] cursor-pointer shadow-md mr-3'>
              <FiSmartphone className='text-white text-sm'/>
            </div>
            <div>
              <h5>Phone Number</h5>
              <p className='text-gray-400 mt-1'>+91040-48523191</p>
            </div>
          </div>
          <div className='flex mt-4'>
            <div className='p-2 h-full bg-[#6569f4] rounded-full hover:bg-[#384aeb] cursor-pointer shadow-md mr-3'>
              <MdOutlineMailOutline className='text-white text-sm'/>
            </div>
            <div>
              <h5>Email</h5>
              <p className='text-gray-400 mt-1'>support@thenazrana.in</p>
            </div>
          </div>
        </div>
      </div>
        <div className='py-8 bg-[#04264B] text-white text-center md:mt-20 mt-10'>
          <p className='text-md'>© THE NAZRANA, ALL RIGHTS RESERVED</p>
        </div>
    </footer>
  )
}

export default Footer
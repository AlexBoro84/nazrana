import {AiOutlineShopping} from 'react-icons/ai'
import {BsFillHeartFill} from 'react-icons/bs'
import { useState } from 'react'
import Link from 'next/link'


const Product = ({series, name, price, image}) => {

  const [show, setShow] = useState(false)

  return (
    <div className='w-full'>
        <div className="relative">
          <Link href='/product/1'>
            <img src={image} className='w-full h-full object-contain cursor-pointer rounded-sm'  onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}/>
          </Link>
            {show && (
              <div className="bg-[#ffffff6f] absolute w-full flex justify-center py-6 bottom-0" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                <div className='bg-[#8894ff] p-3 rounded-sm mr-4 cursor-pointer hover:bg-[#384aeb]'>
                  <BsFillHeartFill className='text-white'/>
                </div>
                <div className='bg-[#8894ff] p-3 rounded-sm mr-4 cursor-pointer hover:bg-[#384aeb]'>
                  <AiOutlineShopping className='text-white'/>
                </div>
              </div>
            )}
        </div>
        <Link href='/product/1'>
          <div className='text-center mt-4 cursor-pointer'>
              <p className='text-gray-400 md:text-base text-sm'>{series}</p>
              <h3 className='md:text-xl text-base text-gray-800'>{name}</h3>
              <h5 className='md:text-lg text-base text-gray-400'>{price}</h5>
          </div>
        </Link>
    </div>
  )
}

export default Product
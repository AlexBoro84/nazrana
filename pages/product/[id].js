import Navbar from '../../components/Navbar'
import ButtonBlue from '../../components/buttons/ButtonBlue'
import {BsShareFill, BsFillHeartFill} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import Footer from '../../components/Footer'
import axios from 'axios'
import {addCartItems} from '../../redux/cartSlice'
import { useState } from 'react'

const Product = ({product}) => {

const dispatch = useDispatch()

const [qty, setQty] = useState(1)

  
const handleAddToCart = () => {
    dispatch(addCartItems(product.id, qty))
}

  return (
    <>
        <Navbar />
        <div className='flex md:flex-row flex-col lg:w-9/12 md:w-11/12 w-10/12 mx-auto my-10'>
            <img  src={product.medias[0]} className='w-full h-auto'/>
            <div className='flex flex-col mt-10'>
                <div className='md:w-11/12 lg:w-10/12 w-full self-end'>
                    <div className='text-2xl font-bold'>
                        <h3 className='text-gray-700'>{product.title}</h3>
                        <h3 className='text-[#384aeb] my-4'>₹ {product.mrp}</h3>
                    </div>
                    <div className='text-gray-500'>
                        <p>Category : <span className='ml-4'>{product.brand}</span></p>
                        <p>Availibility : <span className='ml-4'>In Stock</span></p>
                        <p className='md:mt-10 md:w-10/12 w-full mt-6'>
                            Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter.
                        </p>
                    </div>
                    <div className='flex lg:flex-row md:flex-col flex-col lg:items-center my-6'>
                        <select onChange={(e) => setQty(e.target.value)} className="block bg-white lg:mr-6 mr-0 lg:mb-0 mb-6 border border-gray-200 text-gray-700 py-3 px-2 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500" >
                            <option value='1'>Qty 1</option>
                            <option value='2'>Qty 2</option>
                            <option value='3'>Qty 3</option>
                            <option value='4'>Qty 4</option>
                            <option value='5'>Qty 5</option>
                            <option value='6'>Qty 6</option>
                            <option value='7'>Qty 7</option>
                            <option value='8'>Qty 8</option>
                            <option value='9'>Qty 9</option>
                        </select>
                        <ButtonBlue text="Add to Bag" onClick={handleAddToCart}/>
                    </div>
                    <div className='flex items-center'>
                        <div className='bg-[#e8f0f2] p-3 rounded-sm mr-4 cursor-pointer'>
                            <BsShareFill className='text-[#384aeb]'/>
                        </div>
                        <div className='bg-[#e8f0f2] p-3 rounded-sm mr-4 cursor-pointer'>
                            <BsFillHeartFill className='text-[#384aeb]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export async function getServerSideProps(ctx) {
    
    const res = await axios.get(`http://api.thenazrana.in/${ctx.query.id}`, {headers: {'Content-Type': 'application/json'}})
    
    if(!res.data){
        return { 
            notFound: true
          }
    }
    return {
      props: {product: res.data},
  }
}

export default Product
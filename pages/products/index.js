import Navbar from '../../components/Navbar'
import { useState } from 'react'
import Product from '../../components/Product'
import Footer from '../../components/Footer'
import ButtonBlue from '../../components/buttons/ButtonBlue'
import {FiSearch} from 'react-icons/fi'

const Products = ({dummyData}) => {

  const [filter, setFilter] = useState('min')
  const [color, setColor] = useState('black')

  const handleFilterChange = () => {

  }

  const handleColorChange = () => {

  }

  return (
    <>
        <Navbar/>
        <main className='lg:w-9/12 w-10/12  mx-auto mb-20'>
            <h2 className='md:text-3xl text-2xl md:font-bold font-semibold text-gray-800 md:mt-10 mt-4 mb-4'>Shop</h2>  
            <form className='lg:w-72 md:w-64 md:hidden block'>   
                <div className="relative">
                    <input type="search" className="block w-full py-3 pr-3 pl-6 focus:outline-none text-sm text-gray-900 rounded-sm border border-gray-300" placeholder="Search..."/>
                    <button className="absolute right-2.5 bottom-2.5 focus:outline-none text-lg rounded-lg px-4 py-1 text-gray-700">
                      <FiSearch/>
                    </button>
                </div>
              </form>
            <div className='flex mt-4'>
                <select id="countries" className=" w-40 border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none  block p-2 " onChange={handleFilterChange} >
                    <option value="">Filter</option>
                    <option value="US">min</option>
                    <option value="CA">max</option>
                </select>
                <select id="countries" className="mx-4 w-40 border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none  block p-2 "  onChange={handleColorChange}>
                    <option value="">Colour</option>
                    <option value="US">red</option>
                    <option value="CA">green</option>
                    <option value="CA">blue</option>
                </select>
              
            </div>  
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-10 md:gap-10 gap-4 mb-14'>
                {dummyData.map((product, i) => (
                    <Product key={`${product.name}-${i}`} series={product.series} name={product.name}  price={product.price} image={product.image}/>   
                    ))}
            </div>
            <div className='text-center'>
                <ButtonBlue text='Load More'/>
            </div>
        </main>
        <Footer/>
    </>
  )
}

export default Products

Products.getInitialProps = async (ctx) => {
    const dummyData = [
      {series: 'Premium Leather Series', name: 'Travel Kit Classic - Brown', price: '₹3950', image: 'img/TK1Brown.jpg'},
      {series: 'Premium Leather Series', name: 'Premium Leather Stroller - Small - Brown', price: '₹ 10500', image: 'img/SLBBrown.jpg'},
      {series: 'Premium Leather Series', name: 'Leather Sling - Black', price: '₹2550', image: 'img/LS003Black.jpg'},
      {series: 'Premium Leather Series', name: 'Premium Leather Stroller - Medium - Black', price: '₹12500', image: 'img/MLBBlack.jpg'},
      {series: 'Premium Leather Series', name: 'Leather Sling - Blue', price: '₹1850', image: 'img/LS005Blue.jpg'},
      {series: 'Premium Leather Series', name: 'Leather Sling - Black', price: '₹1850', image: 'img/LS005Black.jpg'},
      {series: 'Premium Leather Series', name: 'Leather Sling - Black', price: '₹2650', image: 'img/Ls002Black.jpg'},
      {series: 'Premium Leather Series', name: 'Travel Kit - DarkBrown', price: '₹4300', image: 'img/TKDarkBrown.jpg'},
    ]
  
    return {dummyData}
  
  } 
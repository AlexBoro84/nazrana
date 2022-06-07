import Navbar from '../../components/Navbar'
import { useEffect, useState } from 'react'
import Product from '../../components/Product'
import Footer from '../../components/Footer'
import ButtonBlue from '../../components/buttons/ButtonBlue'
import {FiSearch} from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import {getSearchProducts, loadMoreSearchProducts} from '../../redux/productsSlice'
import {useRouter} from 'next/router'

const Products = () => {
  const router = useRouter()
  const {query} = router
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')

  const {loading, products, total, nextPage, error, hasMore} = useSelector((state) => state.products)

  useEffect(() => {
      dispatch(getSearchProducts(query.s, query.filter, null, query.priceRange))
  },[query])


  const handleShowMore = () => {
    dispatch(loadMoreSearchProducts(query.s, query.filter, nextPage, query.priceRange))  
  } 

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    router.push({
      pathname: '/products',
      query: search ? { s: search, filter: "Latest" } : {filter: 'Latest'}
    })
  }



  return (
    <>
        <Navbar/>
        <div className='lg:w-9/12 w-10/12  mx-auto mb-20'>
            <h2 className='md:text-3xl text-2xl md:font-bold font-semibold text-gray-800 md:mt-10 mt-4 mb-4'>Shop</h2>  
            <form className='lg:w-72 md:w-64 md:hidden block'>   
                <div className="relative">
                    <input type="search" value={search} className="block w-full py-3 pr-3 pl-6 focus:outline-none text-sm text-gray-900 rounded-sm border border-gray-300" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}/>
                    <button className="absolute right-2.5 bottom-2.5 focus:outline-none text-lg rounded-lg px-4 py-1 text-gray-700" onClick={handleSearchSubmit}>
                      <FiSearch/>
                    </button>
                </div>
              </form>
            <div className='flex mt-4'>
                <select value={query.filter} onChange={(e) => router.push({pathname: window.location.pathname, query: {filter: e.target.value}})} className=" w-40 border border-gray-300 cursor-pointer text-gray-900 text-sm rounded-sm focus:outline-none bg-white block p-2" >
                    <option value="Latest">Latest</option>
                    <option value="PriceLowToHigh">Price: Low To High</option>
                    <option value="PriceHighToLow">Price: High To Low</option>
                </select>   
                <select value={query.priceRange} onChange={(e) => router.push({pathname: window.location.pathname, query: e.target.value !== 'any' ? {priceRange: e.target.value} : null})} className=" w-40 border ml-4 border-gray-300 cursor-pointer text-gray-900 text-sm rounded-sm focus:outline-none bg-white block p-2" >
                    <option value="any">Price: Any Price</option>
                    <option value="1000-5000">Price: 1000-5000</option>
                    <option value="5000-10000">Price: 5000-10000</option>
                    <option value="10000-15000">Price: 10000-15000</option>
                    <option value="15000-20000">Price: 15000-20000</option>
                </select>   
            </div>  
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-10 md:gap-10 gap-4 mb-14'>
                {products && products.map((product, i) => (
                  <Product key={`${product.title}-${i}`} id={product.id} series={product.brand} name={product.title} price={product.price} image={product.image}/>   
                ))}
            </div>
            {hasMore && (
              <div className='text-center'>
                  <ButtonBlue text='Load More' onClick={handleShowMore}/>
              </div>
            )}
        </div>
        <Footer/>
    </>
  )
}


export default Products

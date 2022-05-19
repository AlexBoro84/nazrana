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


  const [filter, setFilter] = useState('')
  const [search, setSearch] = useState('')


  const {loading, products, total, nextPage, error, hasMore} = useSelector((state) => state.products)

  useEffect(() => {
      dispatch(getSearchProducts(query.s))
  },[query])


  const handleShowMore = () => {
    dispatch(loadMoreSearchProducts(query.s, nextPage))  
  } 

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    router.push({
      pathname: '/products',
      query: search ? { s: search } : null
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
                <select id="countries" onChange={(e) => setFilter(e.target.value)} className=" w-40 border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none  block p-2" >
                    <option defaultValue="" disabled hidden>Filter</option>
                    <option value="min">Price: Low To High</option>
                    <option value="max">Price: High To Low</option>
                </select>
              
            </div>  
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-10 md:gap-10 gap-4 mb-14'>
                {products && products.map((product, i) => (
                  <Product key={`${product.title}-${i}`} id={product.id} series={product.brand} name={product.title}  price={product.price} image={product.image}/>   
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

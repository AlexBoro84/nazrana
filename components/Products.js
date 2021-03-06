import Product from '../components/Product'

const Products = ({dummyData}) => {

  return (
    <div id='products-section' className='md:w-9/12 w-10/12 mx-auto'>
        <div className='mt-20'>
            <p className='text-gray-600'>Popular Item in the market</p>
            <h2 className='text-4xl font-bold py-2'>Trending <span className='border-b-2 border-[#384aeb] pb-2'>Product</span></h2>
          </div>
          <div className='mt-20'>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-x-8 gap-y-10 md:gap-x-8 md:gap-y-20'>
              {dummyData.map((product, i) => (
                <Product key={`${product.name}-${i}`} id={product.id} series={product.series} name={product.name}  price={product.price} image={product.image}/>   
              ))}
            </div>
          </div>
    </div>
  )
}

export default Products
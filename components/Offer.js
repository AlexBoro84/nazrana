import ButtonBlue from '../components/buttons/ButtonBlue'


const Offer = () => {
  return (
    <section className="md:py-40 py-32 mt-20 bg-[url('/img/shopping-cart.png')] bg-cover bg-center" >
         <div className='felx flex-col md:w-9/12 w-10/12 mx-auto'>
            <h2 className='text-6xl font-bold text-gray-800'>Heavy Discount</h2>
            <h4 className='text-3xl text-gray-800 mt-2'>Winter Sale</h4>
            <p className='text-gray-800 mt-4'>Him she'd let them sixth saw light</p>
            <div className='mt-10'>
                <ButtonBlue text='Shop Now'/>
            </div>
        </div>
    </section>
  )
}

export default Offer
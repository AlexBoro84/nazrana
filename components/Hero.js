import ButtonBlue from '../components/buttons/ButtonBlue'
//  bg-[rgb(56,74,235)]


const Hero = () => {
  return (
    <section className='flex bg-gray-100 relative'>
      <div className='bg-[rgb(56,74,235)] md:w-3/12 lg:4/12  w-4 absolute h-full'></div>
      <div className='lg:w-9/12 md:w-10/12 mx-auto flex relative z-10'>
        <div className='pt-16 lg:w-10/12 md:w-11/12 md:block hidden'>
          <img src='/img/hero-banner.png' alt='hero-banner' className='max-w-full'/>
        </div>

        <div className=' flex flex-col justify-center items-center'>
            <div className='md:w-10/12 lg:w-9/12 w-9/12 md:py-0 py-14'>
              <h4 className='text-gray-600 text-2xl lg:text-3xl'>Shop is fun</h4>
              <h1 className='md:text-4xl lg:text-5xl text-5xl font-bold my-3 text-gray-800'>BROWSE OUR <br/> PREMIUM PRODUCT</h1>
              <p className='mb-10 mt-6 text-gray-600 leading-6'>The store is an effort to bring those memories back through select souvenir products. The products can be used as a unique gifting solution for inspiring others and showing your eternal bond with your alma-mate</p>
              <ButtonBlue text='Browse Now'/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
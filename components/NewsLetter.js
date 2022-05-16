import ButtonBlue from '../components/buttons/ButtonBlue'

const NewsLetter = () => {
  return (
    <>
         <div className='md:w-9/12 md:p-0 md:px-6 px-0 w-10/12 mx-auto md:shadow-xl shadow-none md:h-96 h-full md:mb-20 flex flex-col justify-center items-center relative z-10 bg-white rounded-md md:mt-24 my-10'>
                <h2 className="font-bold md:text-4xl text-3xl">GET UPDATE FROM ANYWHERE</h2>
                <p className='text-gray-500 mt-4'>Bearing Void gathering light light his eavening unto dont afraid</p>
                <div className='flex md:flex-row flex-col mt-10 md:w-10/12 w-full mx-auto justify-center'>
                  <input type='text' className='border-2 border-gray-300 placeholder:tex-gray-500 rounded-full md:w-6/12 w-full px-6 py-3' placeholder='Enter your email'/>
                  <div className='md:ml-4 ml-0 md:mt-0 mt-4'>
                    <ButtonBlue text='Subscribe Now'/>
                  </div>
                </div>
          </div>
    </>
  )
}

export default NewsLetter
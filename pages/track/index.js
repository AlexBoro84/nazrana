import ButtonBlue from '../../components/buttons/ButtonBlue'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

export default function Track(){
  return (
    <div>
      <main>
        <Navbar/>

        <div className='md:w-9/12 w-10/12 mx-auto md:my-28 my-14'>
          <p className='md:w-10/12 w-full text-gray-700'>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
          <div className='mt-8 md:w-8/12 w-full'>
            <input className='px-4 py-3 border-2 w-full rounded-full' placeholder='Order ID'/>
            <div className='mt-4'>
              <ButtonBlue text='Track Order'/>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  )
}

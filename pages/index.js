import { useRef } from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Offer from '../components/Offer'
import Products from '../components/Products'

export default function Home({dummyData}) {

  const productsRef = useRef(null)

  const handleOnClickBrowse = () => {
    window.scrollTo({ behavior: 'smooth', top: productsRef.current.offsetTop })
  }


  return (
    <>
        <Navbar />
        <Hero onClickBrowse={handleOnClickBrowse}/>
        <section ref={productsRef}>
          <Products dummyData={dummyData}/>
        </section>
        <Offer/>
        <NewsLetter/>
        <div className='md:-mt-40 mt-0'>
          <Footer/>  
        </div>
    </>
  )
}

Home.getInitialProps = async (ctx) => {
  const dummyData = [
    {id: 1, series: 'The Nazrana', name: 'Leather Sling - Black', price: '₹2650', image: 'https://ik.imagekit.io/3jw2q3z4w7h/LS002Black.jpg'},
    {id: 2, series: 'The Nazrana', name: 'Leather Sling - Blue', price: '₹ 10500', image: 'https://ik.imagekit.io/3jw2q3z4w7h/LS002Blue.jpg'},
    {id: 3, series: 'The Nazrana', name: 'Leather Sling - Cammel', price: '₹2550', image: 'https://ik.imagekit.io/3jw2q3z4w7h/LS002Cammel.jpg'},
    {id: 4, series: 'The Nazrana', name: 'Leather Sling - Brown', price: '₹12500', image: 'https://ik.imagekit.io/3jw2q3z4w7h/LS002Brown.jpg'},
    {id: 5, series: 'The Nazrana', name: 'Leather Sling - Maroon', price: '₹1850', image: 'https://ik.imagekit.io/3jw2q3z4w7h/LS001Maroon.jpg'},
    {id: 6, series: 'The Nazrana', name: 'Leather Sling - Black', price: '₹1850', image: 'https://ik.imagekit.io/3jw2q3z4w7h/LS001Black.jpg'},
    {id: 7, series: 'The Nazrana', name: 'Leather Sling - Blue', price: '₹2650', image: 'https://ik.imagekit.io/3jw2q3z4w7h/LS001Brown.jpg'},
    {id: 8, series: 'The Nazrana', name: 'Leather Sling - Brown', price: '₹4300', image: 'https://ik.imagekit.io/3jw2q3z4w7h/LS001DarkBrown.jpg'},
  ]
  return {dummyData}

} 

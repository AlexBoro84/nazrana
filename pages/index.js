import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Offer from '../components/Offer'
import Products from '../components/Products'

export default function Home({dummyData}) {

  return (
    <div>
        <Navbar />
        <Hero/>
        <Products dummyData={dummyData}/>
        <Offer/>
        <NewsLetter/>
        <div className='md:-mt-40 mt-0'>
          <Footer/>  
        </div>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
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

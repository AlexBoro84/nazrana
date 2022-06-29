import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Footer from '../../components/Footer'
import { toast } from 'react-toastify'
import { axiosWrapper } from '../../utils/axiosWrapper'

const SignUp = () => {

 const router = useRouter()

 const [username, setUsername] = useState('')
 const [email, setEmail] = useState('')
 const [name, setName] = useState('')
 const [password, setPassword] = useState('')

 const {authenticated} = useSelector((state) => state.auth)
 
 useEffect(() => {
    if(authenticated === true){
        router.push('/')
    }
 },[authenticated])

 

 const handleSubmit = async (e) => {
    e.preventDefault()

    if(!username || !email || !name || !password){
        toast.error('All fields are required')    
    }else{
        try {
            const res = await axiosWrapper('/register', 'post',  {name, userName: username, email, password})
            if(res.data.status === true){
                router.push('/login')
            }else{toast.error(res.data.msg)}
        } catch (error) {
            toast.error('Server Error')
        }
    }
 }


  return (
      <div>
        <div className="flex md:items-center mt-20 justify-center md:h-screen md:my-0 my-28">
            <div className="md:shadow-lg shadow-none md:py-12 md:px-20 px-7 lg:w-5/12 md:w-9/12 w-full">
                <div className='flex flex-col items-center'>
                    <Link href='/'>
                        <a>
                        <Image width="120" height="50" src="/img/logo.png" className='cursor-pointer'/>
                        </a>
                    </Link>
                    <h2 className="mt-6 text-center md:text-3xl text-2xl font-bold text-gray-800">Create an account</h2>
                </div>
                <form className="mt-8" >
                    <div className="rounded-md shadow-sm">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input id="name" name="text" type="name" onChange={(e) => setName(e.target.value)} value={name} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Full Name"/>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input id="username" name="username" type="text" onChange={(e) => setUsername(e.target.value)} value={username} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username"/>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input id="email" name="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email"/>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
                        </div>
                    </div>
            
                    <button onClick={handleSubmit} className="mt-8 w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Sign up
                    </button>
                
                    <p className='text-sm text-center mt-4'>
                        Already have an account? <Link href='/login'><span className='cursor-pointer text-indigo-600'>sign in</span></Link>
                    </p>  
                </form>
            </div>
        </div>
        <Footer/>
      </div>
  )
}

export default SignUp

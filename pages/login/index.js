import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import axios from 'axios'
import Footer from '../../components/Footer'

const Login = () => {

 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')

 const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post('http://api.thenazrana.in/login', {userName: username, password}, {headers: {'Content-Type': 'application/json'}})
    console.log(res.data)
 }

  return (
      <main>
        <div className="flex items-center justify-center h-screen">
            <div className="md:shadow-lg shadow-none md:py-12 md:px-20 px-7 lg:w-5/12 md:w-9/12 w-full">
                <div className='flex flex-col items-center'>
                    <Link href='/'>
                        <a>
                            <Image width="120" height="50" src="/img/logo.png" alt="logo" className='cursor-pointer'/>
                        </a>
                    </Link>
                    <h2 className="mt-6 text-center md:text-3xl text-2xl font-bold  text-gray-800">Sign in to your account</h2>
                </div>
                <form className="mt-8" >
                    <div className="rounded-md shadow-sm">
                        <div>
                            <label htmlFor="user-name" className="sr-only">Username</label>
                            <input onChange={(e) => setUsername(e.target.value)} id="user-name" name="username" type="text" value={username} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username"/>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
                        </div>

                        <div className="text-sm">
                            <Link href="/password_reset" className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"> Forgot your password? </Link>
                        </div>
                    </div>
                    <button onClick={(e) => handleSubmit(e)} className="mt-8 w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Sign in
                    </button>
                
                    <p className='text-sm text-center mt-4'>
                        Dont have an account? <Link href='/signup'><span className='cursor-pointer text-indigo-600'>create a new account</span></Link>
                    </p>
                    
                </form>
            </div>
        </div>
        <Footer/>
      </main>
  )
}

export default Login
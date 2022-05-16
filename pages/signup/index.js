import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Footer from '../../components/Footer'

const SignUp = () => {

 const router = useRouter()

 const [username, setUsername] = useState('')
 const [email, setEmail] = useState('')
 const [name, setName] = useState('')
 const [password, setPassword] = useState('')

 const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await axios.post('http://api.thenazrana.in/register', {name, userName: username, email, password}, {headers: {'Content-Type': 'application/json'}})
    console.log(res.data)
    if(res.data.status === true){
        router.push('/signin')
    }
 }


  return (
      <main>
        <div className="flex items-center justify-center h-screen">
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
                    <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
                        </div>

                    </div>
                    <button onClick={handleSubmit} className="mt-8 w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Sign in
                    </button>
                
                    <p className='text-sm text-center mt-4'>
                        Already have an account? <Link href='/login'><span className='cursor-pointer text-indigo-600'>sign in</span></Link>
                    </p>  
                </form>
            </div>
        </div>
        <Footer/>
      </main>
  )
}

export default SignUp
import Image from 'next/image'
import Link from 'next/link'

const PasswordReset = () => {
  return (
    <div className="flex items-center justify-center h-screen">
        <div className="shadow-lg py-12 px-20 w-5/12">
            <div className='flex flex-col items-center'>
                <Link href='/'>
                    <a>
                        <Image width="120" height="50" src="/img/logo.png" className='cursor-pointer'/>
                    </a>
                </Link>
                <h2 className="mt-6 text-center text-3xl font-bold text-gray-800">Reset your password</h2>
                <p className='mt-4 text-sm text-gray-700'>Enter your user accounts verified email address and we will send you a password reset link.</p>
            </div>
            <form className="mt-8" >
                <div className="rounded-md shadow-sm">
                    <div>
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input id="email-address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
                    </div>
                </div>
              
                <button type="submit" className="mt-8 w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Send password reset email
                </button>
                
            </form>
        </div>
    </div>
  )
}

export default PasswordReset
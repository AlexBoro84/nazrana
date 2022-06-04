import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { checkAuth } from '../redux/authSlice';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from 'next/router'

const Layout = ({children}) => {

  const router = useRouter()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth())  
  },[router.pathname])

  return (
    <>
        <Head>
            <title>Nazrana</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <main>
        <ToastContainer 
          position="top-center"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
        />
        {children}
      </main>
    
    </>
  )
}

export default Layout
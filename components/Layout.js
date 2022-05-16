import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { checkAuth } from '../redux/authSlice';

const Layout = ({children}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(checkAuth())  
  },[])

  return (
    <>
        <Head>
            <title>Nazrana</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <div>{children}</div>
    
    </>
  )
}

export default Layout
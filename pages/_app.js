import '../styles/globals.css';
import "../styles/nprogress.css";
import nProgress from "nprogress";
import Router from 'next/router'
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import store from '../redux/store'

function MyApp({ Component, pageProps }) {

  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeError", nProgress.done);
  Router.events.on("routeChangeComplete", nProgress.done);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp

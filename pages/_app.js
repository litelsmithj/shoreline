import Layout from '../components/Layout'
import {Toaster} from 'react-hot-toast'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Toaster/>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

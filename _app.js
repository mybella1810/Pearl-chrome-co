import '../styles.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({Component,pageProps}){
  return <>
    <Header/>
    <main style={{padding:20,minHeight:'60vh'}}>
      <Component {...pageProps} />
    </main>
    <Footer/>
  </>
}

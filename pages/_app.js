
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
    <main className="w-full mx-auto">
      <div className="max-w-6xl mx-auto">
        <Component {...pageProps} />
      </div>
    </main>  
    <Footer />
    </>
  )
}

export default MyApp


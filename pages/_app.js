import '../styles/globals.css'

import NavBar from "../components/primitives/NavBar/NavBar"
import Footer from "../components/primitives/Footer/Footer"

function MyApp({ Component, pageProps }) {
  return <>
  <NavBar/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp

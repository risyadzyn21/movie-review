import Footer from "../footer/Footer"
import Navbar from '../navbar/Navbar'



function Layout(props) {
  return (
    <>
      <Navbar />

      {props.children}

      <Footer />
    </>
  )
}

export default Layout
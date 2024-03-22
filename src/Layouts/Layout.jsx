import Navbar from '../Components/Navbar.jsx'
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import { Outlet, Link } from "react-router-dom";
const Layout = ({children}) => {
 return (
  <div>
    <Navbar />
    <Header />
    <main>{children}=</main>
    <Footer />
  </div>
 )
}
export default  Layout

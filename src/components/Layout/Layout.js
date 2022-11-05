import Navbar from "../navbar"
import Footer from "../Footer"
import './Layout.scss'
import { Outlet } from "react-router-dom"
import ScrollToTop from "../ScrollToTop"

const Layout = () => {
    return(
        <div className="App">
        <ScrollToTop />
        <Navbar />
        <div className="page">
          
          <Outlet className="data" />
          
        </div>
        <Footer className="Footer" />
      </div>
            
        
    )
}
export default Layout
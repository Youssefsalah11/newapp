import Loader from 'react-loaders'
import { NavLink } from 'react-router-dom'
import './index.scss'
const Footer = () => {
    return(
        
        <footer className='fixed-bottom'>
            <div className='footer-logos'>

            <a href='https://www.instagram.com/bigbee.eg/'><i className="fa-brands fa-instagram fa-2x"></i></a> 
                
           <a href='https://www.linkedin.com/company/bigbee-eg/'><i className="fa-brands fa-linkedin-in fa-2x"></i></a> 
            </div>
         
        <span>© 2022 BigBee For Marketing. Registered in Egypt.</span>
        
       
        
        </footer>
    
)

}
 

export default Footer
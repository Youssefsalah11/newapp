
import img3 from '/Users/youssefsalah/div/new/newapp/src/assets/images/faf.jpg'
import img5 from '/Users/youssefsalah/div/new/newapp/src/assets/images/Screenshot 2022-10-06 at 1.36.35 AM.png'
import img1 from '/Users/youssefsalah/div/new/newapp/src/assets/images/307423106_788322962402429_2099619974517769041_n (1).jpg'
import img4 from '/Users/youssefsalah/div/new/newapp/src/assets/images/output-onlinepngtools.png'
import { Fade,Slide } from "react-awesome-reveal";
import img11 from '/Users/youssefsalah/div/new/newapp/src/assets/images/img1.jpg'
import img22 from '/Users/youssefsalah/div/new/newapp/src/assets/images/img2.jpg'
import img33 from '/Users/youssefsalah/div/new/newapp/src/assets/images/img3.jpg'

import "animate.css/animate.min.css";

import './index.scss'
import { NavLink } from 'react-router-dom';
import { BrowserView, isMobile, MobileView } from 'react-device-detect';
import Loader from 'react-loaders';
function Home() {
    
    return(
        <main> 
            
        <div className="carousel-inner" >
            <div className="item active">
            <img src={img3} alt="Los Angeles"/>
            <div className='page-open' >
              
                    <img className='title' src={img4}/>

                
                <div className='buttons'>
                    <a className="btn  btn-outline btn-warning call" href="tel:01553689004">Call Us</a>
                    <NavLink className="btn  btn-outline btn-warning call2" to='/contact'>Call Us</NavLink>
                    <a  className="btn  btn-outline btn-warning"  href='mailto:info@bigbee-eg.com
'>Email Us</a>
                </div>
                
                <h1 className="title">A Full Integrated Marketing Services Agency  </h1>                
            </div>
            
            </div>

            <div className="item">
            <img src={img3} alt="Chicago"/>
            </div>
            <div className="item">
            <img src={img3} alt="Chicago"/>
            </div>
            
        </div>
        
       
         <BrowserView>
            <Fade duration={1000}  >
            <div   className="open" >
            <div className='left-div'>
             <h1 className='opening'>WELCOME TO BIGBEE COMPANY </h1> 
             <div className='open-border'></div>
            <h4 className='about-title'> About Us:</h4>
            <p id='about-p'>
                Building a cherished brand isn’t just about the item or administration a business moves, however the associations it makes with the general population who love and trust it.

                <br/>
                <br/>At BigBee, we trust there’s no place this is more critical today than on social media.

                Our suite of profound tuning in and investigation, social administration, client care and promotion arrangements empower associations and brands of all sizes to be increasingly open, genuine, and compassionate on social and make the sort of genuine association with their purchasers that drives their organizations forward.

                </p>
            </div>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        
                        {/* <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol> */}

                        
                        <div className="carousel-inner">
                            <div className="item active">
                            <img id='item-active'  src={img5} alt="Los Angeles"/>
                            </div>
                            {/* <div className="item">
                            <img id='item-active'  src={img5} alt="Los Angeles"/>
                            </div>
                            <div className="item">
                            <img id='item-active'  src={img5} alt="Los Angeles"/>
                            </div> */}

                        
                            
                        </div>

                        {/* <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>     */}
                </div>
            </div> 
            </Fade>
        </BrowserView>
        <MobileView>
            <div  >
            <div   className="open" >
            <div className='left-div'>
             <h1 className='opening'>WELCOME TO BIGBEE COMPANY </h1> 
             <div className='open-border'></div>
            <h4 className='about-title'> About Us:</h4>
            <p id='about-p'>Preparation distinguished graduate capable of keep pace with global technological in various disciplines that meet the needs of local and regional markets, and can conduct scientific research and applied through the creation of appropriate conditions for faculty members and their assistants and students, and to provide educational programs in advanced undergraduate and graduate studies and continuing education, and the establishment of advisory centers and research labs, including sophisticated contribute to community service and to meet its needs.</p>
            </div>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>

                        
                        <div className="carousel-inner">
                            <div className="item active">
                            <img id='item-active'  src={img5} alt="Los Angeles"/>
                            </div>
                            <div className="item">
                            <img id='item-active'  src={img5} alt="Los Angeles"/>
                            </div>
                            <div className="item">
                            <img id='item-active'  src={img5} alt="Los Angeles"/>
                            </div>

                        
                            
                        </div>

                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>    
                </div>
            </div> 
            </div>
        </MobileView>
        <BrowserView>
        <div className="fixed-bg">
                
                <h4 className='service-title'>Our Services</h4>
                <div className='service-border'></div>
                <div className='service-content'>
                    
                    <Slide direction='left' className='service-square' >
                        <NavLink className='service-square-t' to='/services'>
                        
                        <i className="fa-solid fa-handshake fa-10x"></i>
                        <h4>Public Relations</h4>
                       
                        </NavLink>
                        
                        
                    </Slide>
                    
                    
                    <Slide direction='up' className='service-square'>
                    <NavLink className='service-square-t' to='/services'>
                    <h5></h5>
                    <i className="fa-solid fa-palette fa-9x"></i>
                     <h4>Art Direction</h4>
                     
                     
                     </NavLink>
                    </Slide>
                    <Slide direction='right' className='service-square' >
                    
                    <NavLink className='service-square-t' to='/services'>
                    <h5></h5>
                    <i className="fa-solid fa-bullseye fa-9x"></i>
                    <h4>E-Marketing</h4>
                   
                    
                    
                     </NavLink>
                    </Slide>

                </div>
            </div>
        </BrowserView>
        <MobileView>
        <div className="fixed-bg">
                
                <h4 className='service-title'>Our Services</h4>
                <div className='service-border'></div>
                <div className='service-content'>
                    
                    <div direction='left' className='service-square' >
                        <NavLink className='service-square-t' to='/services'>
                        
                        <i className="fa-solid fa-handshake fa-5x"></i>
                        <h4>Public Relations</h4>
                       
                        </NavLink>
                        
                        
                    </div>
                    
                    
                    <div direction='up' className='service-square'>
                    <NavLink className='service-square-t' to='/services'>
                    <h5></h5>
                    <i className="fa-solid fa-palette fa-5x"></i>
                     <h4>Art Direction</h4>
                     
                     
                     </NavLink>
                    </div>
                    <div direction='right' className='service-square' >
                    
                    <NavLink className='service-square-t' to='/services'>
                    <h5></h5>
                    <i className="fa-solid fa-bullseye fa-5x"></i>
                    <h4>E-Marketing</h4>
                   
                    
                    
                     </NavLink>
                    </div>

                </div>
            </div>
        </MobileView>
        
            
        
          
       
            <div className='news-events'>
            <h1 className='opening'>OUR LASTEST EVENTS </h1>
            <div className='news-border'></div>

            <div className='carousel2'>
            <div id="myCarousel2" className="carousel slide" data-ride="carousel">
                        
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel2" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel2" data-slide-to="1"></li>
                            <li data-target="#myCarousel2" data-slide-to="2"></li>
                        </ol>

                        
                        <div className="carousel-inner">
                            {/* 632 x 414 */}
                            <div className="item active">
                           <a href='#'>
                           <img id='item-active'  src={img22} alt="Los Angeles"/>
                           </a> 
                            <div className="carousel-caption">
                            <h3>Hardee's</h3>
                            
                            </div>
                            </div>

                            <div className="item">
                            <a href='#'>
                            <img id='item-active'  src={img11} alt="Los Angeles"/>
                            </a> 
                            <div className="carousel-caption">
                            <h3>Hardee's</h3>
                            <p></p>
                            </div>
                            </div>
                            <div   className="item">
                            <a href='#'>
                            <img id='item-active'  src={img33} alt="Los Angeles"/>
                            </a> 
                            <div className="carousel-caption">
                            <h3>Hardee's</h3>
                            <p></p>
                            </div>
                            </div>
                            
                        </div>

                        <a className="left carousel-control" href="#myCarousel2" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel2" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>    
                </div>
                </div>
            </div>
       
            
    
    </main>
    )
}
export default Home
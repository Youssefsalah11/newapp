import { MapContainer, Marker, Pane, Popup, Rectangle, SVGOverlay, TileLayer } from 'react-leaflet'
import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
const Contact= ()=>{
  const inner = [
    [30.016992, 31.444112],
    [30.006653, 31.465113],
  ]
    const position = [29.999895,31.454050]
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_84e3jdh', 'template_b577jlt', form.current, 'XGEMBbyJzb4ZClQyT')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    return(
        <div className='services-wrapper'>
         <div className="services-title">
            <h1>Contact Us</h1>
        </div>
        <div className="contact-content">
            <div className='contact-info'>
            <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
            
          </div>
            </div>
          
              
            <div className='map-wrapper'>
                
            <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              
              <Pane>
              <div className="info-map">
                
                Gamal Abdel Nasser St. 
                <br />
                New Cairo,
               
                <br />
                Cairo
                <br />
                Egypt 
                <br />
                +201553689004
                <br/>
                info@bigbee-eg.com
              </div>
              </Pane>
                <Marker position={position}>
                 <Popup>
                  
                 <a href='https://maps.google.com/?q=29.999895,31.454050'>Navigate to BigBee</a><br />
                </Popup>
             </Marker>
            
             </MapContainer>
                
              
            </div>
            
        </div>
        <Loader type='ball-rotate'  />

        </div>
       
    )
}

export default Contact
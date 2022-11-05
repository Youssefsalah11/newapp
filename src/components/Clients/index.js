import Loader from 'react-loaders'
import './index.scss'

const Clients = () => {
    return(
        <>
        <div className="services-title">
           <h1>Clients</h1>
       </div>
       <div className="clients-content">
        <h1>under constraction</h1>
        <img className="undercon" src="https://media.istockphoto.com/id/931042070/vector/website-construction-line-style-illustration.jpg?s=612x612&w=0&k=20&c=nEB37_J5y3j08MKqhAGlgK7OmBwPFoEsU_JuTrOaIh4="/>
        </div>
        <Loader type='ball-rotate'  />
        
       </>
    )
}
export default Clients
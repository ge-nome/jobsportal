// @ts-nocheck
import hero from '../assets/imagex/heromain.png'

const Hero = ({height, children}) => {
    console.log();
    
  return (
    <div style={{height:height}}>
        {children}
        <img src={hero} alt="" className='w-[100%] h-[100%] object-cover'/>
        
    </div>
  )
}

export default Hero

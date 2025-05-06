import Footer from "./components/footer"
import Hero from "./components/hero"
import InfoBlock from "./components/infoblock"
import {Applicant, JobDisplay} from "./components/jobcard"
import Navbar from "./components/navbar"
import phone from "./assets/imagex/phone.svg"
import pin from "./assets/imagex/map-pin.svg"
import mail from "./assets/imagex/mail.svg"
import clock from "./assets/imagex/clock.svg"
const Contact = () => {
    
  return (
    <div>
      <Navbar></Navbar>
      <Hero height={'300px'}>
        <div className='absolute w-[100%] h-[300px] grid content-center '>
            <h2 className="m-auto w-100 font-bold text-white text-center text-[2vw] my-12">Contact Us</h2>
        </div>
      </Hero>
      <div>
        <div>
            <h2>Reach Out, We are here to help you.</h2>
            <p>Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in lectus tincidunt tincidunt ultrices. Diam convallis morbi pellentesque adipiscing </p>
            <div className="grid grid-cols-2">
                <div>
                    <img src={phone} alt="" />
                    <h3>Call for Inquiry</h3>
                    <p>(+234) 80 000 000 00</p>
                </div>
                <div>
                    <img src={mail} alt="" />
                    <h3>Send us email</h3>
                    <p>Job@gmail.com</p>
                </div>
                <div>
                    <img src={clock} alt="" />
                    <h3>Opening hours</h3>
                    <p>Mon - Fri: 10AM - 10PM </p>
                </div>
                <div>
                    <img src={pin} alt="" />
                    <h3>Office</h3>
                    <p>Somewhere, Someplace, Nigeria.</p>
                </div>
            </div>
        </div>
      </div>
      <InfoBlock></InfoBlock>
      <Footer></Footer>
    </div>
  )
}

export default Contact

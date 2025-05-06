// @ts-nocheck
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
      <div className="grid grid-cols-2 justify-between w-[90%] m-auto py-10 gap-15">
        <div className="grid gap-9">
            <h2 className="font-bold text-[3vw]">Reach Out, We are here to help you.</h2>
            <p>Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in lectus tincidunt tincidunt ultrices. Diam convallis morbi pellentesque adipiscing </p>
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <img src={phone} alt="" />
                    <h3 className="font-bold">Call for Inquiry</h3>
                    <p>(+234) 80 000 000 00</p>
                </div>
                <div>
                    <img src={mail} alt="" />
                    <h3 className="font-bold">Send us email</h3>
                    <p>Job@gmail.com</p>
                </div>
                <div>
                    <img src={clock} alt="" />
                    <h3 className="font-bold">Opening hours</h3>
                    <p>Mon - Fri: 10AM - 10PM </p>
                </div>
                <div>
                    <img src={pin} alt="" />
                    <h3 className="font-bold">Office</h3>
                    <p>Somewhere, Someplace, Nigeria.</p>
                </div>
            </div>
        </div>
        <div>
            <form action="" className=" grid gap-6 rounded-lg bg-[#EBF5F4] p-10">
                <h2 className="text-center font-bold text-[2vw]">Contact Info</h2>
                <p>Nibh dis faucibus proin lacus tristique</p>

                <div className="grid gap-5">
                <div className="grid gap-3 grid-cols-2">
                    <div className="grid">
                        <label htmlFor="" className="font-bold">First Name</label>
                        <input type="text" placeholder='Your name' className="bg-white rounded-md border p-2 border-gray-300"/>
                    </div>
                    <div className="grid">
                        <label htmlFor="" className="font-bold">Last Name</label>
                        <input type="text" placeholder='Your last name' className="bg-white rounded-md border p-2 border-gray-300"/>
                    </div>
                </div>
                <div className="grid gap-5">
                    <div className="grid">
                        <label htmlFor="" className="font-bold">Email Address</label>
                        <input type="text" placeholder='Your E-mail address' className="bg-white rounded-md border p-2 border-gray-300"/>
                    </div>
                    <div className="grid">
                        <label htmlFor="" className="font-bold">Message</label>
                        <text   className="bg-white rounded-md bg-white rounded-md border border-gray-300 h-[150px] p-3">Your message...</text>
                    </div>
                </div>
                <div>
                    <button className="bg-[#309689] text-white w-[200px] p-2 rounded-md font-bold">Send message</button>
                </div>

                </div>
            </form>
        </div>
        <div>

        </div>
      </div>
      <div>
      <div className='w-[90%] m-auto rounded-md'><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" className="rounded-xl" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d984.8196738436685!2d7.362478515117603!3d9.129281220563083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDcnMzYuOSJOIDfCsDIxJzQ1LjUiRQ!5e0!3m2!1sen!2sng!4v1746569474152!5m2!1sen!2sng"></iframe></div>
      </div>
      <InfoBlock></InfoBlock>
      <Footer></Footer>
    </div>
  )
}

export default Contact

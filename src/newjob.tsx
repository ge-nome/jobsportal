// @ts-nocheck
import { useNavigate } from "react-router-dom"
import Footer from "./components/footer"
import Hero from "./components/hero"
import InfoBlock from "./components/infoblock"
import Navbar from "./components/navbar"
import { useEffect } from "react"

const Newjob = () => {
    const navigate = useNavigate()
    useEffect(()=>{
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
  return (
    <div>
        <Navbar></Navbar>
        <Hero height={'900px'}>
            <div className="absolute w-[100%] h-[800px] grid justify-center items-center gap-10">
                <div className="grid grid-cols-2 w-[80%] gap-20 m-auto items-center mt-40">
                    <div className="text-white">
                        <h2 className="text-[3vw]">Setup your posting</h2>
                        <p>
                            Your ideal candidate is 
                            researching your company. 
                            Show top talent why they 
                            want to work for you.
                        </p>
                    </div>
                    <div>
                        <form action="" className="py-7 px-5 bg-white grid gap-6">
                            <div className="grid gap-3 grid-cols-2">
                                <div className="grid">
                                    <label htmlFor="">First Name</label>
                                    <input type="text" className="border p-1 border-gray-300"/>
                                </div>
                                <div className="grid">
                                    <label htmlFor="">Last Name</label>
                                    <input type="text" className="border p-1 border-gray-300"/>
                                </div>
                            </div>
                            <div className="flex gap-3 items-end">
                                <div className="grid w-[70%]">
                                    <label htmlFor="">Company Name</label>
                                    <input type="text" className="border p-1 border-gray-300"/>
                                </div>
                                <div className="flex gap-3 w-[30%] items-center">
                                    <span className="text-[2vw]">+</span>
                                    <p>Company Logo</p>
                                </div>
                            </div>
                            <div className="grid gap-3 grid-cols-2 gap-3">
                                <div className="grid">
                                    <label htmlFor="">Official Job  Title</label>
                                    <input type="text" className="border p-1 border-gray-300"/>
                                </div>
                                <div className="grid">
                                    <label htmlFor=""># of Open Spots</label>
                                    <input type="number" className="border border-gray-300"/>
                                </div>
                            </div>
                            <div>
                                <div className="grid">
                                    <label htmlFor="">Work Email Adress</label>
                                    <input type="text" className="border p-1 border-gray-300"/>
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div className="flex items-start gap-3">
                                    <input type="checkbox" />
                                    <p>
                                        I confirm I represent HR/Personnel, Recruiting, Marketing, PR, or am an
                                        executive at my company and I agree to Glassdoor's Terms of Use acknowledge its 
                                        Privacy Policy on behalf of my company. 
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <input type="checkbox" />
                                    <p>
                                        Click here if you do not want to receive marketing emails from Glassdoor
                                        and affiliates 
                                    </p>
                                </div>
                            </div>
                            <button className="bg-[#6c757d] text-white px-5 py-2 rounded w-[150px] m-auto" onClick={(e)=>{e.preventDefault(); navigate('/new2')}}>Create Post</button>
                            <p>Already have an account? Sign In</p>
                        </form>
                    </div>
                </div>
            </div>
            
        </Hero>
      <InfoBlock/>
      <Footer/>
    </div>
  )
}

export default Newjob

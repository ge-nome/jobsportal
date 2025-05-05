// @ts-nocheck
import Footer from "./components/footer"
import Hero from "./components/hero"
import InfoBlock from "./components/infoblock"
import Navbar from "./components/navbar"
import complogo from './assets/imagex/Rectangle 7.svg'
import pers from './assets/imagex/pers.png'
import idea from './assets/imagex/idea.png'
import loca from './assets/imagex/loca.png'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Newjob2 = () => {
    const navigate = useNavigate()
    useEffect(()=>{
                window.scrollTo({ top: 0, behavior: 'smooth' });
            })
  return (
    <div>
        <Navbar></Navbar>
        <Hero height={'1200px'}>
            <div className="absolute w-[100%] h-[1000px] grid justify-center items-center gap-10">
                <div className="flex w-[80%] gap-10 m-auto items-start mt-40">
                    <div className="w-[60%]">
                        <form action="" className="py-7 px-5 bg-white grid gap-6 rounded">
                            <h2 className="text-[2vw]">Add Pay And Benefits</h2>
                            <div className="grid gap-3 mb-10 text-[#002160]">
                                <div className="grid">
                                    <label htmlFor="">Job Type*</label>
                                </div>
                                <div className="h-[70px] flex flex-wrap gap-4 ">
                                    <p className="p-2 px-3 rounded-full border border-[#002160] border-2 text-[#002160] cursor-pointer">+ Full time</p>
                                    <p className="p-2 px-3 rounded-full border border-[#002160] border-2 text-[#002160] cursor-pointer">+ Part Time</p>
                                    <p className="p-2 px-3 rounded-full border border-[#002160] border-2 text-[#002160] cursor-pointer">+ Fresher</p>
                                    <p className="p-2 px-3 rounded-full border border-[#002160] border-2 text-[#002160] cursor-pointer">+ Part Time</p>
                                    <p className="p-2 px-3 rounded-full border border-[#002160] border-2 text-[#002160] cursor-pointer">+ Internships</p>
                                    <p className="p-2 px-3 rounded-full border border-[#002160] border-2 text-[#002160] cursor-pointer">+ Temporary</p>
                                    <p className="p-2 px-3 rounded-full border border-[#002160] border-2 text-[#002160] cursor-pointer">+ Freelance</p>
                                    <p className="p-2 px-3 rounded-full border border-[#002160] border-2 text-[#002160] cursor-pointer">+ Volunteer</p>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="">Is there a planned start date for this job?</label>
                                <div className="flex border border-gray-300 p-1 w-[100%] gap-2">
                                    <input type="radio" className="border border-gray-300 p-1"/> <label htmlFor="">Yes</label>
                                </div>
                                <div className="flex border border-gray-300 p-1 w-[100%] gap-2">
                                    <input type="radio" className="border border-gray-300 p-1"/> <label htmlFor="">No</label>
                                </div>
                            </div>
                            <div>
                                <div className="grid">
                                    <label htmlFor="">Number of people you wish to hire for this job *</label>
                                    <select className="border border-gray-300 p-1">
                                        <option value="">Range</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className="grid">
                                    <label htmlFor="">Recruitment timeline for this job *</label>
                                    <select className="border border-gray-300 p-1">
                                        <option value="">Range</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-3 justify-center mt-[50px]">
                                <p className="w-[5px] h-[5px] bg-gray-400 rounded-full"></p>
                                <p className="w-[5px] h-[5px] bg-gray-700 rounded-full"></p>
                                <p className="w-[5px] h-[5px] bg-gray-400 rounded-full"></p>
                                <p className="w-[5px] h-[5px] bg-gray-400 rounded-full"></p>
                            </div>
                            <div className="flex justify-between">
                                <button onClick={(e)=>{e.preventDefault(); navigate('/new')}}>Back</button>
                                <div className="flex gap-3">
                                    <button className="bg-[#6c757d] text-white px-5 py-2 rounded" onClick={(e)=>{e.preventDefault(); navigate('/job2')}}>Next</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className=" w-[40%] grid gap-8">
                        <div className="bg-white grid gap-2 p-7 rounded-lg">
                            <div className="flex gap-4">
                                <div>
                                    <img src={complogo} alt="" />
                                </div>
                                <div>
                                    <h2 className="text-[2vw] text-[#002160]">UI/UX Design</h2>
                                    <h4 className="opacity-40">Company</h4>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <img src={pers} className="w-[30px]" alt="" />
                                    <p className="text-[#002160]">5 people required</p>
                                </div>
                                <div className="flex items-center  opacity-40">
                                    <img src={loca} className="w-[30px]" alt="" />
                                    <p>Location of the Company</p>
                                </div>
                            </div>
                            <p className="text-[#1F78FF] justify-self-end underline mt-2">Save as Draft</p>
                        </div>
                        <div className="bg-white grid gap-2 p-7 rounded-lg">
                            <img src={idea} className="w-[30px] opacity-40" alt="" />
                            <p>Clearly outlining the role's responsibilities and objectives attracts suitable candidates and sets realistic expectations, ensuring a better fit for both parties.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </Hero>
      <InfoBlock/>
      <Footer/>
    </div>
  )
}

export default Newjob2

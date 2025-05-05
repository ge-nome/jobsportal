// @ts-nocheck
import Navbar from "./components/navbar";
import Cardone from './components/cardone'
import CategoryCard from './components/categorycard'
import InfoBlock from './components/infoblock'
import JobCard from './components/jobcard'
import { useEffect, useState } from 'react'
import Footer from './components/footer'
import Hero from './components/hero'
import search from './assets/imagex/search.svg'

const Home = () => {
    const [box, setbox] = useState([1,2,3,4,5])

    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    
    const pop = () => {
        setbox([1,2,'a','f',8])
    }
    const cards = [
        {
            id:1,
            img:'Profile in the mobile app.svg',
            title:'Setup New Posting!',
            par:'Start by creating an job posting with basic details. Enter the job title, describe the role and its responsibilities, and list required skills. ',
            link:'/new'
        },
        {
            id:1,
            img:'Man multitasking on a job.svg',
            title:'Customize job Postings',
            par:'Simply enter the job title, describe the role and its responsibilities, and list required skills. It\'s as straightforward as that!',
            link:'/#'
        },
        {
            id:1,
            img:'Learning the instructions.svg',
            title:'Search some talents!',
            par:'Browse through profiles, filter by skills or experience, and find the perfect match for your job. It\'s effortless and efficient!',
            link:'/'
        },
    ]
    const jobs = [
        {
            id:1,
            days:'10', 
            title:'Project Manager', 
            img:'Logo.svg',
            org:'Stable Shield Solutions', 
            field:'Software & Tech.', 
            hours:'Full time', 
            pay:'N400000-N420000', 
            location:'Abuja, Nigeria'
        },
        {
            id:2,
            days:'15', 
            title:'Regional Creative Facilitator', 
            img:'Logo-1.svg',
            org:'Wisozk - Becker Co', 
            field:'Media', 
            hours:'Part time', 
            pay:'N280000-N320000', 
            location:'Lagos, Nigeria'
        },
        {
            id:3,
            days:'15', 
            title:'Regional Creative Facilitator', 
            img:'Logo-2.svg',
            org:'Wisozk - Becker Co', 
            field:'Media', 
            hours:'Part time', 
            pay:'N280000-N320000', 
            location:'Lagos, Nigeria'
        },
        {
            id:4,
            days:'15', 
            title:'Regional Creative Facilitator', 
            img:'Logo-3.svg',
            org:'Wisozk - Becker Co', 
            field:'Media', 
            hours:'Part time', 
            pay:'N280000-N320000', 
            location:'Lagos, Nigeria'
        }
    ]
    const categories = [
        {
            id:1,
            count:'17786', 
            title:'Agriculture',  
            img:'g520.png' 
        },
        {
            id:2,
            count:'140', 
            title:'Metal Production',  
            img:'agriculture 2.png' 
        },
        {
            id:3,
            count:'324', 
            title:'Commerce',  
            img:'agriculture 2-1.png' 
        },
        {
            id:4,
            count:'790322', 
            title:'Construction',  
            img:'agriculture 2-2.png' 
        },
        {
            id:5,
            count:'10', 
            title:'Hotels & Tourism',  
            img:'agriculture 2-3.png' 
        },
        {
            id:6,
            count:'3020', 
            title:'Education',  
            img:'agriculture 2-4.png' 
        },
        {
            id:7,
            count:'1022', 
            title:'Financial Resources',  
            img:'agriculture 2-5.png' 
        },
        {
            id:8,
            count:'5410', 
            title:'Transport',  
            img:'agriculture 2-6.png' 
        },
    ]
    return (
        <div>
            <Navbar></Navbar>
            <Hero height={'600px'}>
                <div className='absolute w-[100%] h-[600px] grid justify-center content-center '>
                    <div className='mb-10 text-white'>
                        <h1 className='text-[4vw] text-center font-[800]'>Admin Portal View</h1>
                        <p className='text-center'>Connecting Talent with Opportunity: Your Gateway to Career Success</p>
                    </div>
                    <div className=' flex'>
                        <div className='bg-white  rounded-l-xl p-4'>
                            <select name="" className='mx-2 px-2'>
                                <option value="" className='text-red-700'>Job title or Company</option>
                            </select>
                            <select name="" className='border-l-1 border-black px-2 mx-2'>
                                <option value="">Select Location</option>
                            </select>
                            <select name="" className='mx-2 border-l-1 px-2'>
                                <option value="">Job title or category</option>
                            </select>
                        </div>
                        <button className='bg-[#309689] cursor-pointer rounded-r-xl p-4 flex gap-3 px-6'>
                            <img src={search} alt="" />
                            <span className='text-white'>Search Job Applications</span>
                        </button>
                    </div>
                </div>
            </Hero>
            <div className='flex gap-20 justify-center m-10 '>
               {
                    cards.map(({id, img,title,par, link})=>(
                        <Cardone key={id} img={img} title={title} desc={par} link={link}></Cardone>
                    ))
                } 
            </div>
            <div className='w-[90vw] m-auto my-20 grid gap-5'>
                <h2 className='text-[2vw] font-bold'>You Job Postings</h2>
                <div className='flex justify-between'>
                    <p>At eu lobortis pretium tincidunt amet lacus ut aenean alique</p>
                    <button className='text-[1vw] text-[#309689]'>View all</button>
                </div>
            </div>
            <div className='w-[90vw] m-auto my-20 grid gap-10'>
                {
                    jobs.map(({id, days, title, img, org, field, hours, pay, location})=>(
                        <JobCard key={id} img={img} days={days} title={title} org={org} field={field} hours={hours} pay={pay} location={location}/>
                    ))
                }
            </div>
            <div className=' bg-[#3096891A] pb-30'>
                <div className='w-[90vw] m-auto py-20 grid gap-5 grid text-center'>
                    <h2 className='text-[3vw] font-bold'>Browse Categories</h2>
                    <p>At eu lobortis pretium tincidunt amet lacus ut aenean alique amet lacus ut aenean alique amet lacus ut aenean alique</p>
                </div>
                <div className='w-[90vw] m-auto my-20px grid grid-cols-4 gap-10 justify-between'>
                    {
                        categories.map(({id, img, title, count})=>(
                            <CategoryCard key={id} img={img} title={title} count={count}></CategoryCard>
                        ))
                    }                    
                </div>
            </div>
            
            <InfoBlock></InfoBlock>
            <Footer></Footer>
        </div>
    )
}
export default Home
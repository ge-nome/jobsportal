// @ts-nocheck
import Footer from "./components/footer"
import Hero from "./components/hero"
import InfoBlock from "./components/infoblock"
import {Applicant, JobDisplay} from "./components/jobcard"
import Navbar from "./components/navbar"

const Applicants = () => {
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
  return (
    <div>
      <Navbar></Navbar>
      <Hero height={'1700px'}>
        <div className='absolute w-[100%] h-[1700px] grid content-center '>
            <div className="w-[90%] m-auto grid">
                {
                    jobs.slice(0,1).map(({id, days, title, img, org, field, hours, pay, location})=>(
                        <JobDisplay key={id} img={img} days={days} title={title} org={org} field={field} hours={hours} pay={pay} location={location}/>
                    ))
                }
                <h2 className="m-auto w-100 font-bold text-white text-center text-[2vw] my-8">Applicants</h2>
                <div className="grid gap-10">
                    {
                        jobs.slice(0,3).map(({id, days, title, img, org, field, hours, pay, location})=>(
                            <Applicant key={id} img={img} days={days} title={title} org={org} field={field} hours={hours} pay={pay} location={location}/>
                        ))
                    }
                </div>
            </div>
            
        </div>
      </Hero>
      <InfoBlock></InfoBlock>
      <Footer></Footer>
    </div>
  )
}

export default Applicants

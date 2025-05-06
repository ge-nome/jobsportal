// @ts-nocheck
import bookmark from '../assets/imagex/g875.svg'
import group from '../assets/imagex/Group 6.svg'
import orgicon from '../assets/imagex/Logo.svg'
import tagone from '../assets/imagex/briefcase(2) 2.svg'
import tagtwo from '../assets/imagex/clock.svg'
import tagthree from '../assets/imagex/g135.svg'
import tagfour from '../assets/imagex/map-pin.svg'
import facecard from '../assets/imagex/Mask group.svg'
import { Link } from 'react-router-dom'
export const JobCard = ({img, days, title, org, field, hours, pay, location:loc}) => {

    const location = window.location.origin    
    const host = location+"/src/assets/imagex/"
    
    return(
        <div className='p-[40px] shadow-lg rounded-lg grid gap-7 bg-white'>
            <div className='flex justify-between'>
                <p className='text-center bg-[#3096891A] text-[#309689] px-3 py-1 rounded'>{days} days ago</p>
                <img src={bookmark} alt="" />
            </div>
            <div className='flex gap-4'>
                <img src={`${host}${img}`} alt="" className='w-[50px]'/>
                <div>
                    <h2 className='text-[3vw] font-bold'>{title}</h2>
                    <p>{org}</p>
                </div>
            </div>
            <div className='flex justify-between items-center w-[100%]' >
                <div className='flex gap-7'>
                    <div className='flex gap-1 align-center'>
                        <img src={tagone} alt="" />
                        <p>{field}</p>
                    </div>
                    <div className='flex gap-1 align-center'>
                        <img src={tagtwo} alt="" />
                        <p>{hours}</p>
                    </div>
                    <div className='flex gap-1 align-center'>
                        <img src={tagthree} alt="" />
                        <p>{pay}</p>
                    </div>
                    <div className='flex gap-1 align-center'>
                        <img src={tagfour} alt="" />
                        <p>{loc}</p>
                    </div>
                </div>
                <button className='rounded-md bg-[#309689] text-white px-4 py-3'>View Applicants</button>
            </div>
        </div>
    )
}

export const JobDisplay = ({img, days, title, org, field, hours, pay, location:loc}) => {

    const location = window.location.origin    
    const host = location+"/src/assets/imagex/"
    
    return(
        <div className='p-[40px] shadow-lg rounded-lg grid gap-7 bg-white'>
            <div className='flex justify-between'>
                <p className='text-center bg-[#3096891A] text-[#309689] px-3 py-1 rounded'>{days} days ago</p>
                <img src={bookmark} alt="" />
            </div>
            <div className='flex gap-4'>
                <img src={`${host}${img}`} alt="" className='w-[50px]'/>
                <div>
                    <h2 className='text-[3vw] font-bold'>{title}</h2>
                    <p>{org}</p>
                </div>
            </div>
            <div className='flex justify-center items-center w-[100%]' >
                <div className='flex gap-7'>
                    <div className='flex gap-1 align-center'>
                        <img src={tagone} alt="" />
                        <p>{field}</p>
                    </div>
                    <div className='flex gap-1 align-center'>
                        <img src={tagtwo} alt="" />
                        <p>{hours}</p>
                    </div>
                    <div className='flex gap-1 align-center'>
                        <img src={tagthree} alt="" />
                        <p>{pay}</p>
                    </div>
                    <div className='flex gap-1 align-center'>
                        <img src={tagfour} alt="" />
                        <p>{loc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Applicant = ({img, days, title, org, field, hours, pay, location:loc}) => {

    const location = window.location.origin    
    const host = location+"/src/assets/imagex/"
    
    return(
        <div className='p-[15px] shadow-lg rounded-lg grid gap-7 bg-white'>
            <div className='flex justify-between items-start'>
                <div className='flex gap-4'>
                    <img src={facecard} alt="" className='w-[50px]'/>
                    <div>
                        <h2 className='text-[1.5vw] font-bold'>Some Body</h2>
                        <p className='text-[1vw] opacity-60'>Location</p>
                    </div>
                </div>
                <div className='flex justify-end gap-2 items-center'>
                    <p className='text-[#FF7F37] w-[100px]' >70% match</p>
                    <img src={group} alt="" className=''/>
                </div>
            </div>
            
            <div className="flex flex-wrap gap-4 ">
                <p className="p-2 px-3 rounded-full border border-gray-300 border-2 text-[#002160] cursor-pointer bg-gray-200">+ Monday to Friday</p>
                <p className="p-2 px-3 rounded-full border border-gray-300 border-2 text-[#002160] cursor-pointer bg-gray-200">+ Evening shift</p>
                <p className="p-2 px-3 rounded-full border border-gray-300 border-2 text-[#002160] cursor-pointer bg-gray-200">+ Weekend availability</p>
            </div>

            <div>
                <h3 className='text-[1.2vw] font-[500]'>Have worked with</h3>
                <p>NovoTech Solutions, BrightWorks Innovations, StellarEdge Enterprises, QuantumLeap Technologies, and EliteSphere Solutions.</p>
            </div>
            
            <div className="flex flex-wrap gap-4 ">
                <p className="p-2 px-3 rounded-full font-bold text-[#002160] cursor-pointer bg-gray-200">Designer</p>
            </div>
            <Link to={'#'} className='justify-self-end underline text-blue-500'>See more</Link>
        </div>
    )
}
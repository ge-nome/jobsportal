// @ts-nocheck
import bookmark from '../assets/imagex/g875.svg'
import orgicon from '../assets/imagex/Logo.svg'
import tagone from '../assets/imagex/briefcase(2) 2.svg'
import tagtwo from '../assets/imagex/clock.svg'
import tagthree from '../assets/imagex/g135.svg'
import tagfour from '../assets/imagex/map-pin.svg'
const JobCard = ({img, days, title, org, field, hours, pay, location}) => {

    const host = "http://localhost:5173/src/assets/imagex/"
    console.log(img);
    
    return(
        <div className='p-[40px] shadow-lg rounded-lg grid gap-7'>
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
            <div className='flex justify-between items-center'>
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
                        <p>{location}</p>
                    </div>
                </div>
                <button className='rounded-md bg-[#309689] text-white px-4 py-3'>View Applicants</button>
            </div>
        </div>
    )
}
export default JobCard
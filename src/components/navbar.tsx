// @ts-nocheck
import checkbag from '../assets/imagex/check(1) 1.svg'
import notification from '../assets/imagex/BellRinging.svg'
import facecard from '../assets/imagex/Mask group.svg'
const Navbar = () => {
    return(
        <div className='w-[100%] text-white absolute left-0 top-0'>
            <div className='flex justify-between w-[90%] m-auto items-center py-4'>
                <div className='flex justify-between gap-5 items-center'>
                    <img src={checkbag} alt="" className='w-[30 px]'/>
                    <h1>Job Portal</h1>
                </div>
                <div className='flex justify-between gap-7'>
                    <nav>Home</nav>
                    <nav className='opacity-70'>Jobs</nav>
                    <nav className='opacity-70'>Contact Us</nav>
                </div>
                <div className='flex justify-between gap-5'>
                    <img src={notification} alt="" />
                    <img src={facecard} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Navbar
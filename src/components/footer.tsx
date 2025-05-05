// @ts-nocheck
import checkbag from '../assets/imagex/check(1) 1.png'
const Footer = () => {
    return(
        <div className="bg-black text-white pt-[100px]">
            <div className='flex justify-between w-[90vw] m-auto mb-18'>
                <div className='w-[40vw] '>
                    <div className='flex justify-start gap-2 items-center mb-4'>
                        <img src={checkbag} alt="" className='w-[20px]'/>
                        <h1>Job</h1>
                    </div>
                    <p>Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris dui nullam et.</p>
                </div>
                <div>
                    <h2 className='font-bold mb-2'>Company</h2>
                    <p>About Us</p>
                    <p>Our Team</p>
                    <p>Partners</p>
                    <p>For Candidates</p>
                    <p>For Employers</p>
                </div>
                <div>
                    <h2 className='font-bold mb-2'>Job Categories</h2>
                    <p>Telecommunications</p>
                    <p>Hotels & Tourism</p>
                    <p>Construction</p>
                    <p>Education</p>
                    <p>Financial Services</p>
                </div>
            </div>
            <div className='flex justify-between gap-5 items-center w-[90vw] m-auto pb-[20px]'>
                <p className='opacity-70'> © Copyright Job Portal  2025. Designed by Tisan</p>
                <div className='flex gap-5'>
                <a href="">Privacy</a>
                <a href="">Terms & Conditions</a>
                </div>
            </div>
        </div>
    )
}
export default Footer
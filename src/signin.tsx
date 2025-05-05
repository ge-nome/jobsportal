// @ts-nocheck
import logo from './assets/VintflixLOGO2.svg'
import bg from './assets/damla-ozkan-KKCYmdyWaPU-unsplash 1.svg'


const Signin = () => {

    return (
        <div>
            <div className='grid w-[100%] h-[100vh] items-center bg-[#32261B]'>
                <div className='flex items-start absolute top-0 left-0 w-[100vw]'>
                    <img src={bg} alt="" className='w-[100%]'/>
                </div>
                <div className='flex items-start absolute top-0 left-0 w-[120px] my-8 mx-6'>
                    <img src={logo} alt="" className='w-[100%]'/>
                </div>
                <div className='flex items-start absolute top-0 left-0 h-[700px] w-[100vw] bg-gradient-to-b to-[#32261B]'></div>
                <div className='relative text-white mx-6 mt-[300px]'>
                    <h2 className='text-3xl mb-4 font-bold'>Good old movies</h2>
                    <h4 className='text-lg'>Watch selected great, old and evergreen Nigerian movies, relish the good old days.</h4>
                    <div className='my-12'>
                        <button className='w-[100%] h-[56px] bg-white text-black rounded-4xl font-boldac'>Start watching</button>
                    </div>
                    <div>
                        <p className='text-[#AFABA3] text-sm'>Photo by Damla Özkan on Unsplash</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Signin
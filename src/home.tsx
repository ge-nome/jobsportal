import woman from './assets/2a.jpg'
import women from './assets/3.jpg'
import womenbanner from './assets/celeb.jpg'
import logo from './assets/VintflixLOGO.svg'
import iwd from './assets/WTM-IWD25-SocialBanners-LinkedIn-1024x173.png'
import iwd2 from './assets/hERO.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Home = () => {

    return (
        <div>
            <div className='grid w-[100%] h-[100vh] items-center bg-[#32261B]'>
                <div className='flex items-center' style={{margin:'auto'}}>
                    <img src={logo} alt="" className='w-[200px]'/>
                </div>
            </div>
        </div>
    )
}
export default Home
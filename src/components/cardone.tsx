// @ts-nocheck
import { Link } from 'react-router-dom'

const Cardone = ({img, title, desc, link}) => {
    const host = "http://localhost:5173/src/assets/imagex/"
    console.log(link);
    
    return(
        <div>
            <Link to={link}>
            <div className='w-[20vw] grid justify-items-center shadow-lg p-8 gap-3 rounded-lg h-full' >
                <img src={host+img} alt="" />
                <h2 className='font-bold text-xl'>{title}</h2>
                <p className='text-center'>{desc}</p>
            </div>
            </Link>
        </div>
    )
}
export default Cardone
// @ts-nocheck
const CategoryCard = ({img, title, count}) => {
    const host = "http://localhost:5173/src/assets/imagex/"
    
    return(
        <div>
            <div className='w-full aspect-square grid justify-items-center items-center shadow-lg p-8 gap-3 rounded-lg bg-white' >
                <img src={`${host}${img}`} alt="" />
                <h2 className='font-bold text-xl'>{title}</h2>
                <p className='text-center bg-[#3096891A] text-[#309689] px-3 py-1 rounded'>{count} jobs</p>
            </div>
        </div>
    )
}
export default CategoryCard
// @ts-nocheck
const InfoBlock = ({dataclass}) => {
    // take the dataclass array, destructure it and map
    return(
        <div className='grid grid-cols-3 items-around gap-[200px] p-20'>
            <div className='text-left grid justify-items-start items-center gap-1' >
                <h2 className='text-[2vw] font-bold text-[#309689]'>12k+</h2>
                <h2 className='font-bold text-xl'>Clients worldwide</h2>
                <p className=''>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque rhoncus</p>
            </div>
            <div className='text-left grid justify-items-start items-center gap-1' >
                <h2 className='text-[2vw] font-bold text-[#309689]'>12k+</h2>
                <h2 className='font-bold text-xl'>Clients worldwide</h2>
                <p className=''>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque rhoncus</p>
            </div>
            <div className='text-left grid justify-items-start items-center gap-1' >
                <h2 className='text-[2vw] font-bold text-[#309689]'>12k+</h2>
                <h2 className='font-bold text-xl'>Clients worldwide</h2>
                <p className=''>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque rhoncus</p>
            </div>
        </div>
    )
}
export default InfoBlock
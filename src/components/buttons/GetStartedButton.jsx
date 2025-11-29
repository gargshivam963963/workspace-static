

const GetStartedButton = () => {
    return <button className="bg-secondary group  hover:bg-secondary/90 transform transition ease-in-out duration-700  rounded-ten p-1 flex justify-end items-center font-grotesk  tracking-wide text-white text-lg font-bold h-[54px] md:w-[254px] w-[240px]  cursor-pointer ">
        <span className='flex-1 text-center'>Get Started Free</span>
        <div className='w-[46px] h-[46px] rounded-ten   bg-white flex justify-center items-center'>
            <img className='transform group-hover:-rotate-45 duration-700 ease-in-out' src={`${import.meta.env.VITE_ICONS_S3_URL}/blue-arrow.svg`}></img>
        </div>
    </button>
}

export default GetStartedButton;
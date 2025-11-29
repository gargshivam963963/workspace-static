
import Marquee from "react-fast-marquee"

const CustormerStoryCard = () => {

    return <div className=' relative  w-full   flex flex-col xl:flex-row  justify-center  items-center gap-6  '>
        {/* <div className='absolute z-50 h-full left-0 top-0 w-[300px]   bg-gradient-to-r from-white to-transparent '></div>
        <div className='absolute z-50 h-full right-0 top-0 w-[300px]  bg-gradient-to-l from-white to-transparent '></div> */}

        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[50px]  lg:w-[650px] -translate-x-2  blur-xs z-20 bg-gradient-to-r from-white to-transparent"></div>

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[50px] lg:w-[650px] translate-x-2 blur-xs  z-20 bg-gradient-to-l from-white to-transparent"></div>
        <div className=" absolute  -z-50  bottom-0 translate-y-[50%]  translate-x-[10%] animate-breathe delay-500 bg-gradient-to-r from-[#5175FF90] to-white h-[427px] w-[427px] rounded-full blur-3xl rotate-45  "></div>

        <Marquee speed={45} pauseOnHover={true} gradient={false} data-marquee autoFill={true} style={{
            zIndex: 10,
            position: "relative"
        }} >
            {[1, 2, 3].map(item => {
                return <SingleStoryCard kry={item}></SingleStoryCard>
            })}
        </Marquee>
    </div>
}

const SingleStoryCard = ({ emphasis }) => {
    return <div className={` ${emphasis && "scale-110 m-6"} m-3 rounded-2xl   bg-glass flex flex-col p-6 border-[1px] border-white/50  gap-6  w-[90%]  max-w-[473px] lg:min-w-[300px]  lg:min-h-[295px] max-h-fit`}>
        <img className='w-[31px] h-[25px]' src={`${import.meta.env.VITE_ICONS_S3_URL}/customer-story.svg`} alt="quotes"></img>
        <p className="font-outfit text-primary text-base md:text-lg max-w-md break-words">
            This platform has completely streamlined our workflow. Our team collaborates faster, and projects move smoothly from start to finish. Highly recommend!
        </p>
        <section className='w-fit flex gap-4'>
            <div className=' w-[54px] h-[54px] rounded-full overflow-hidden'>
                <img src="https://i.pinimg.com/236x/6b/97/87/6b97876bf6b12c51d96f3266ef993262.jpg" className='w-[100%] h-[100%]  object-cover' alt="profile-pic"></img>

            </div>
            <div className='flex flex-col  text-impact '>
                <span className='font-bold'>Sachin Dangi</span>
                <span>PMG Engineering</span>
            </div>

        </section>

    </div>
}


export default CustormerStoryCard
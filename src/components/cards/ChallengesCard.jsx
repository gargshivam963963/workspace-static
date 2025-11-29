
const ChallengesCard = () => {
    return (
        <div className='transition duration-200 ease-in-out hover:scale-105 bg-glass shadow-[inset_0_4px_6px_rgba(0,0,0,0.04)] rounded-ten p-6 flex flex-col gap-4 max-w-[350px] md:max-w-[390px] border-[1px] border-white'>
            <img src={`${import.meta.env.VITE_ICONS_S3_URL}/challenge.svg`} alt="challenge" width={50} height={50}></img>
            <section className='flex flex-col gap-2'>
                <span className='font-grotesk text-impact text-lg md:text-[20px] font-bold'>Efficiency Considerations</span>
                <p className='font-outfit text-primary  text-base'>
                    This tool assigns clear ownership, driving accountability and proactive task management.
                </p>
            </section>
        </div>
    )
}

export default ChallengesCard
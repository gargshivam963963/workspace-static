const Carousel = ({ activeTab, setActiveTab, options }) => {

    const handlePrev = () => {
        const index = options.findIndex(ele => ele === activeTab)
        const prevIndex = (index - 1 + options.length) % options.length;
        setActiveTab(options[prevIndex]);

    }
    const handleNext = () => {
        const index = options.findIndex(ele => ele === activeTab)
        setActiveTab(options[(index + 1) % options.length]);
    }
    return (
        <div className="w-full lg:hidden h-fit flex flex-col gap-8 ">
            <div className="h-4 py-[1px] w-full  flex gap-1.5 justify-between items-center">
                {options.map((ele, index) => {
                    return <LineItem activeTab={activeTab} setActiveTab={setActiveTab} key={ele} option={ele}></LineItem>
                })}
            </div>
            <section className="w-full flex justify-end items-center gap-10 ">
                <div onClick={handlePrev} className="w-[44px] h-[44px] bg-[#4755691A] rounded-full flex justify-center items-center cursor-pointer">
                    <img src={`${import.meta.env.VITE_ICONS_S3_URL}/down-arrow.svg`} alt="prev" width={12} height={7} className="rotate-90" ></img>
                </div>
                <div onClick={handleNext} className="w-[44px] h-[44px] bg-[#4755691A] rounded-full flex justify-center items-center cursor-pointer">
                    <img src={`${import.meta.env.VITE_ICONS_S3_URL}/down-arrow.svg`} alt="next" width={12} height={7} className="-rotate-90" ></img>
                </div>

            </section>
        </div>
    )
}

const LineItem = ({ option, activeTab, setActiveTab }) => {
    return <span onClick={() => setActiveTab(option)} className={`${activeTab === option ? "bg-secondary" : "bg-[#D9D9D9]"} rounded-full h-0.5 w-full`}></span>
}

export default Carousel
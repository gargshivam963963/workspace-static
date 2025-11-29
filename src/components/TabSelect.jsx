
const TabSelect = ({ activeTab, setActiveTab, options }) => {
    return (
        <div className=" hidden  w-full h-fit  lg:flex justify-center font-outfit text-base">
            <div className="w-fit rounded-full border-[1px] border-[#DDEBFF] h-full  p-[7px] flex justify-between gap-4">
                {options.map(option => {
                    return <TabItem setActiveTab={setActiveTab} activeTab={activeTab} text={option} key={option} ></TabItem>
                })}
            </div>
        </div>
    )
}

const TabItem = ({ text, activeTab, setActiveTab }) => {
    return <button onClick={() => setActiveTab(text)} className={` cursor-pointer rounded-full flex justify-center items-center px-3 py-2.5 min-h-10 h-fit ${activeTab === text ? "bg-secondary/10 text-secondary font-semibold" : "text-primary font-medium"}`}>{text}</button>
}

export default TabSelect
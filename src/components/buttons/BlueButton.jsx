
const BlueButton = ({ className = "", text = "", icon = null, onClick = () => { } }) => {
    if (icon) {
        return <button onClick={onClick} className="bg-secondary lg:hidden  hover:bg-secondary/90 transform transition ease-in-out duration-700 rounded-ten h-10 w-10 p-2.5 font-grotesk  tracking-wide text-white text-lg font-bold cursor-pointer ">
            <img src={icon} alt="icon"></img>
        </button>
    }
    return (
        <button onClick={onClick} className={`${className} bg-secondary hover:bg-secondary/90 transform transition ease-in-out duration-700 rounded-ten h-[44px] font-grotesk  tracking-wide text-white text-base md:text-lg font-bold min-h-fit  min-w-[160px] w-fit cursor-pointer `}>
            {text}
        </button>
    )
}

export default BlueButton

const Heading = ({ text = "" }) => {
    return (
        <h2 className="font-grotesk text-[32px] md:text-[40px] font-bold text-impact w-full text-center">
            {text}
        </h2>
    )
}

export default Heading
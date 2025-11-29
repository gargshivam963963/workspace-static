import BlueButton from "../buttons/BlueButton"

const ContactUsCard = ({ heading, subheading, className = "" }) => {
    return (
        <div className={`${className} h-[222px h-fit w-full md:w-[75%] xl:w-[25%]  border-white/50 border-[1px] z-50 rounded-ten bg-glass/50 p-4 flex  flex-col justify-between gap-[20px]  font-outfit `}>
            <div className="flex flex-col gap-2">
                <span className="font-grotesk text-impact font-bold text-lg md:text-xl break-words w-full ">{heading || "Can’t find your question here?"}</span>
                <p className="md:text-lg text-base  text-primary break-words w-full">
                    {subheading || "Feel free to contact our support team — we’re here to help."}
                </p>
            </div>
            <BlueButton text="Contact Support"></BlueButton>
        </div>
    )
}

export default ContactUsCard 
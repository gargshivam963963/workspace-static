import ContactUsCard from "./cards/ContactUsCard"
import StartJourneyCard from "./cards/StartJourneyCard"
import SocialIcon from "./SocialIcon"

const Footer = () => {
    const socialIconsList = [
        `${import.meta.env.VITE_ICONS_S3_URL}/youtube.svg`,
        `${import.meta.env.VITE_ICONS_S3_URL}/x.svg`,
        `${import.meta.env.VITE_ICONS_S3_URL}/mail.svg`,
        `${import.meta.env.VITE_ICONS_S3_URL}/instagram.svg`,
        `${import.meta.env.VITE_ICONS_S3_URL}/linkedin.svg`,
    ]

    const helpLinks = [
        {
            heading: "Top Apps",
            contents: [
                "Task",
                "Log",
                "Factory Assessment",
                "Notes",
                "Project Management",
                "Operation Management",
            ],
        },
    ]

    return (
        <div className="[width:-webkit-fill-available]  mt-24   overflow-hidden overflow-x-hidden pt-20 relative">
            {/* <img className="absolute top-0 left-0 -z-50  translate-y-[160px]" src="/ellipse-footer.svg" alt="ellipse-footer"></img> */}
            <div className=" absolute top-0 left-0 -z-50 translate-y-[160px] animate-breathe bg-gradient-to-r from-[#5175FF] to-white h-[427px] w-[427px] rounded-full blur-3xl -rotate-[90deg]"></div>
            <StartJourneyCard></StartJourneyCard>
            <div className='w-full  bg-glass min-h-full px-8 md:px-[120px] py-[66px] flex flex-col items-center gap-32'>
                <section className="flex lg:flex-row flex-col gap-10 w-full items-stretch ">
                    <div className=" w-full lg:w-1/3 min-w-[300px]  flex flex-col gap-4 font-outfit text-primary text-base ">
                        <img src={`${import.meta.env.VITE_ICONS_S3_URL}/pmgsoftware.svg`} width={100} height={43} alt="pmg-software"></img>
                        <span className="font-medium">Building world class digital products</span>
                        <span className="flex gap-5 w-[90%] md:w-[50%] ">
                            {/* <img src={`${import.meta.env.VITE_ICONS_S3_URL}/location.svg`} alt="location"></img>
                            1504, Office Tower, Logix City Center,
                            Sector 32, Noida, Uttar Pradesh 201301 */}
                        </span>
                        <span className="flex gap-5  ">
                            <img src={`${import.meta.env.VITE_ICONS_S3_URL}/letter.svg`} alt="letter"></img>
                            info@pmg.engineering
                        </span>
                    </div>
                    <div className="lg:w-1/3 mt-8 lg:mt-0   grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-3 font-outfit text-primary">
                        {helpLinks.map((col, index) => {
                            return <div key={index} className="flex flex-col gap-4 w-fit ">
                                <span className="font-semibold">{col.heading}</span>
                                <div className="flex flex-col gap-2">
                                    {col.contents.map(link => {
                                        return <span key={link} className="cursor-pointer ">{link}</span>
                                    })}
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="lg:w-1/3" >
                        <ContactUsCard heading={"Need assistance or have feedback?"} subheading={"Our support team is always ready to help you."} className="md:w-full xl:w-full border-none bg-transparent "></ContactUsCard>
                    </div>
                </section>
                <div className="flex flex-col md:flex-row md:justify-end md:items-center w-full gap-6 md:gap-16 h-auto md:h-[50px]">
                    <section className="flex md:hidden justify-center gap-2 w-full">
                        <img
                            src={`${import.meta.env.VITE_ICONS_S3_URL}/app-store.svg`}
                            alt="appstore"
                            className="w-1/2"
                        />
                        <img
                            src={`${import.meta.env.VITE_ICONS_S3_URL}/play-store.svg`}
                            alt="playstore"
                            className="w-1/2"
                        />
                    </section>

                    {/* Links */}
                    <section className="flex justify-center gap-6 md:gap-8 text-primary text-base font-outfit items-center">
                        <span>Privacy Policy</span>
                        <span>Terms and Conditions</span>
                    </section>

                    {/* Social Icons */}
                    <div className="flex md:justify-center justify-around  w-[] md:w-fit  gap-4">
                        {socialIconsList.map(icon => (
                            <SocialIcon icon={icon} key={icon} />
                        ))}
                    </div>
                </div>

            </div >
        </div >
    )
}

export default Footer
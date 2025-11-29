import GetStartedButton from "../buttons/GetStartedButton"

const StartJourneyCard = () => {
    return (
        <div className="  rounded-ten border-[1px] border-white/50  flex-1 md:mx-[10%] mx-8 mb-20  bg-glass py-4 px-6 flex flex-col gap-8 md:gap-0 md:flex-row md:justify-between items-start md:items-center ">
            <div className="flex flex-col gap-2 w-[90%] md:max-w-[65%] min-w-[300px]">
                <h5 className="font-bold text-impact text-[20px] md:text-2xl font-grotesk">Start Your Journey Today  </h5>
                <p className="  lg:block font-normal font-outfit text-primary md:text-lg text-base  ">Create your account in minutes and bring your projects, teams, and tasks together — all in one place.</p>
            </div>
            <GetStartedButton></GetStartedButton>
        </div>
    )
}

export default StartJourneyCard
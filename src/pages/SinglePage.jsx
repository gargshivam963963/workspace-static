import Hero from '../components/Hero'
import { useParams } from 'react-router-dom'
import Container from '../components/Container';
import ChallengesCard from '../components/cards/ChallengesCard';
import WindowWrapper from '../components/WindowWrapper';
import TabSelect from '../components/TabSelect';
import { useState } from 'react';
import Carousel from '../components/Carousel';


const caseStudy = [
    {
        title: "Context",
        paragraph: `Managing project tasks across different teams can be challenging. A company faced issues with unorganized task assignments, lack of transparency in task ownership, and inefficiency in tracking progress. These problems resulted in delays, missed deadlines, and confusion within the team.The team needed a simple, all-in -one platform to plan and manage tasks, ensure team accountability, and provide clear project updates in a structured format for internal and external reviews.`
    },
    {
        title: "Context 2",
        paragraph: `Managing project tasks across different teams can be challenging. A company faced issues with unorganized task assignments, lack of transparency in task ownership, and inefficiency in tracking progress. These problems resulted in delays, missed deadlines, and confusion within the team.The team needed a simple, all-in -one platform to plan and manage tasks, ensure team accountability, and provide clear project updates in a structured format for internal and external reviews.`
    },
    {
        title: "Context 3",
        paragraph: `Managing project tasks across different teams can be challenging. A company faced issues with unorganized task assignments, lack of transparency in task ownership, and inefficiency in tracking progress. These problems resulted in delays, missed deadlines, and confusion within the team.The team needed a simple, all-in -one platform to plan and manage tasks, ensure team accountability, and provide clear project updates in a structured format for internal and external reviews.`
    },
]

const benefits = [
    {
        title: "Power Requirement Analysis",
        items: [
            "Accurately size the motor",
            "Avoid overload or inefficiency",
            "Improve long-term reliability",
        ],
    },
    {
        title: "Energy Efficiency Optimization",
        items: [
            "Reduce energy consumption",
            "Lower operating costs",
            "Support sustainability goals",
        ],
    },
    {
        title: "Electrical Compatibility Check",
        items: [
            "Match voltage, frequency, and phase",
            "Ensure stable motor performance",
            "Minimize electrical risks",
        ],
    },
]

const SinglePage = () => {
    const [keyBenefit, setKeyBenefit] = useState("Optimization");
    const { slug } = useParams();




    return <div className=" relative h-fit font-outfit">
        <Hero heading={slug} subheading={"The Motor Power Calculator helps you determine the right motor power based on load, speed, and efficiency — ensuring optimal selection and energy-efficient system design."} hasBack={true}></Hero>
        <div className='mt-[20%]'>
            <Container text={"Challenges"}>
                <div className='w-full  flex md:flex-row flex-col items-center justify-center flex-wrap gap-5'>
                    <div className=" absolute top-1/2 left-1/5 -translate-y-1/2  -z-50  animate-breathe bg-gradient-to-r from-[#5175FF95] to-white h-[427px] w-[427px] rounded-full blur-3xl "></div>
                    <ChallengesCard></ChallengesCard>
                    <ChallengesCard></ChallengesCard>
                    <ChallengesCard></ChallengesCard>
                </div>
            </Container>
        </div>

        {/* Single Page Features  */}

        <Container text="Features">
            <div className=" absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4   -z-50  animate-breathe bg-gradient-to-r from-[#5175FF] to-white h-[427px] w-[427px] rounded-full blur-3xl "></div>
            <WindowWrapper>
                <div className='flex flex-col gap-4 flex-1  '>
                    <span className='font-bold font-grotesk text-[20px] md:text-2xl text-impact'>
                        Input Parameters
                    </span>
                    <p className='font-outfit text-base md:text-lg text-primary'>
                        The implementation of an engineering design workspace focuses on streamlining tools, workflows, and collaboration to enhance efficiency.
                    </p>
                    <div className='flex flex-col flex-1'>
                        <span className='font-bold font-grotesk  text-base md:text-lg text-impact'>Load-Based Power Requirement</span>
                        <p className='font-outfit text-base text-primary'>Calculate required power from the motor’s mechanical load.</p>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <span className='font-bold font-grotesk  text-base md:text-lg text-impact'>Load-Based Power Requirement</span>
                        <p className='font-outfit text-base text-primary'>Calculate required power from the motor’s mechanical load.</p>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <span className='font-bold font-grotesk  text-base md:text-lg text-impact'>Load-Based Power Requirement</span>
                        <p className='font-outfit text-base text-primary'>Calculate required power from the motor’s mechanical load.</p>
                    </div>

                </div>
            </WindowWrapper>
        </Container>

        {/* Case Study  */}
        <Container text="Case Study">
            <div className=" absolute top-1/2 right-0 -translate-y-1/3 overflow-hidden translate-x-1/2  -z-50  animate-breathe bg-gradient-to-r from-[#5175FF95] to-white h-[427px] w-[227px] rounded-full blur-3xl "></div>
            <div className="  w-full h-[250px] overflow-x-hidden overflow-y-scroll scrollbar-left pl-5 snap-y snap-mandatory">
                {caseStudy.map((item, index) => {
                    return <div key={item.title} className="flex flex-col gap-2 w-full h-[250px] snap-start  justify-center ">
                        <span className="text-[#47556966] text-2xl font-outfit">{index + 1}.</span>
                        <span className="text-impact font-grotesk font-bold text-[20px] md:text-2xl ">{item.title}</span>
                        <p className="text-base md:text-lg wrap-break-word  text-primary font-outfit line-clamp-6 md:line-clamp-3">{item.paragraph}</p>
                    </div>

                })}
            </div>
        </Container>


        {/* Key Benefits */}
        <Container text="Key Benefits">
            <div className=" absolute top-1/2 left-1/2 -translate-y-1/6 -translate-x-1/3  -z-50  animate-breathe bg-gradient-to-r from-[#5175FF95] to-white h-[427px] w-[427px] rounded-full blur-3xl "></div>
            <TabSelect activeTab={keyBenefit} setActiveTab={setKeyBenefit} options={["Optimization", "Efficiency", "Performance"]}></TabSelect>

            <WindowWrapper>
                <div className='flex-1  flex flex-col gap-4 '  >
                    <span className='font-grotesk text-impact font-bold text-[20px] md:text-2xl'>
                        {keyBenefit}
                    </span>
                    {benefits.map(benefit => {
                        return <div key={benefit.title} >
                            <span className='font-bold text-base md:text-lg text-impact font-grotesk'>{benefit.title}</span>
                            <ul className=' font-outfit text-primary  text-base flex flex-col list-disc list-inside'>
                                {benefit.items.map(item => {
                                    return <li key={item}>{item}</li>
                                })}
                            </ul>
                        </div>
                    })}
                </div>
            </WindowWrapper>
            <Carousel activeTab={keyBenefit} setActiveTab={setKeyBenefit} options={["Optimization", "Efficiency", "Performance"]} > </Carousel>
        </Container>
    </div>
}

export default SinglePage
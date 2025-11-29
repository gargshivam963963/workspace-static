import Container from "../components/Container"
import WindowWrapper from "../components/WindowWrapper"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const WhyWorkspace = () => {

    const reasons = [
        {
            title: "Comprehensive Solutions",
            paragraph: "Our platform provides complete management solutions from project initiation to completion, covering every aspect of project and factory management. Whether it’s planning, execution, or documentation, Workspace streamlines the entire process."
        },
        {
            title: "Comprehensive Solutions",
            paragraph: "Our platform provides complete management solutions from project initiation to completion, covering every aspect of project and factory management. Whether it’s planning, execution, or documentation, Workspace streamlines the entire process."
        },
        {
            title: "Comprehensive Solutions",
            paragraph: "Our platform provides complete management solutions from project initiation to completion, covering every aspect of project and factory management. Whether it’s planning, execution, or documentation, Workspace streamlines the entire process."
        },
        {
            title: "Comprehensive Solutions",
            paragraph: "Our platform provides complete management solutions from project initiation to completion, covering every aspect of project and factory management. Whether it’s planning, execution, or documentation, Workspace streamlines the entire process."
        },
        {
            title: "Comprehensive Solutions",
            paragraph: "Our platform provides complete management solutions from project initiation to completion, covering every aspect of project and factory management. Whether it’s planning, execution, or documentation, Workspace streamlines the entire process."
        },
    ]

    return (
        <Container text="Why Choose Workspace?" >
            <WindowWrapper>
                <div className="  w-full h-[250px] overflow-x-hidden overflow-y-scroll scrollbar-left pl-5 snap-y snap-mandatory">
                    {reasons.map((reason, index) => {
                        return <div className="flex flex-col gap-2 w-full h-[250px] snap-start  justify-center ">
                            <span className="text-[#47556966] text-2xl font-outfit">{index + 1}.</span>
                            <span className="text-impact font-grotesk font-bold text-2xl ">{reason.title}</span>
                            <p className="text-lg wrap-break-word  text-primary font-outfit line-clamp-6 md:line-clamp-3 ">{reason.paragraph}</p>
                        </div>
                    })}
                </div>
            </WindowWrapper>
            <div className=" absolute top-1/4 left-1/2 -z-50 delay-700  animate-breathe bg-gradient-to-r from-[#5175FF90] to-white h-[427px] w-[427px] rounded-full blur-4xl -rotate-[90deg]"></div>
        </Container>
    )
}

export default WhyWorkspace
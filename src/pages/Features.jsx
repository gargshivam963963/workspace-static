import Container from "../components/Container"
import TabSelect from "../components/TabSelect"
import { useState } from "react"
import WindowWrapper from "../components/WindowWrapper"
import { Link } from "react-router-dom"
import Carousel from "../components/Carousel"
const Features = () => {

    const listItems = [
        "Engineering Design",
        "Procurement and Contracting",
        "Construction Supervision",
        "Factory Assessments",
        "Project Management",
        "Technical Services",
    ]

    const [feature, setFeature] = useState("Engineering Design")
    const information = {
        heading: "Engineering Design",
        subheading: "The implementation of an engineering design workspace focuses on streamlining tools, workflows, and collaboration to enhance efficiency.",
        points: [
            {
                title: "Core Features",
                content: "Design tools, task management, and templates",
            },
            {
                title: "Collaboration",
                content: "Stakeholder communication and approval workflows.",
            },
            {
                title: "Monitoring",
                content: "Progress tracking and analytics.",
            },
            {
                title: "Workflow Integration",
                content: "End-to-end processes with automation and version control.",
            },
        ]
    }
    return (
        <Container text="Features" >
            <TabSelect activeTab={feature} setActiveTab={setFeature} options={listItems} ></TabSelect>
            <WindowWrapper>
                <div className=" realtive flex flex-col gap-4 h-fit">
                    <div className=" absolute top-1/2 right-0 -z-50 animate-breathe bg-gradient-to-r from-[#5175FF85] to-white h-[427px] w-[427px] rounded-full blur-3xl -rotate-[90deg]"></div>
                    <span className="font-grotesk font-bold text-2xl text-impact">{feature}</span>
                    <p className="font-outfit text-primary text-lg">{information.subheading}</p>
                    <section className="flex-1 justify-start flex flex-wrap gap-4 items-stretch">
                        {information.points.map(point => {
                            return <div className="w-[45%] ">
                                <span className="font-grotesk text-impact font-bold text-lg">{point.title}</span>
                                <p className="font-outfit text-primary text-base">{point.content}</p>
                            </div>
                        })}
                    </section>
                    <Link
                        to="#"
                        className="relative flex w-fit items-center gap-4 font-bold font-grotesk text-secondary text-[20px] cursor-pointer group"
                    >
                        Explore
                        <img src={`${import.meta.env.VITE_ICONS_S3_URL}/blue-arrow.svg`} alt="blue arrow" />
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-500 group-hover:w-full"></span>
                    </Link>
                </div>
            </WindowWrapper>
            <Carousel activeTab={feature} setActiveTab={setFeature} options={listItems} ></Carousel>
        </Container>
    )
}




export default Features
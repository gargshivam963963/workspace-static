import { useRef } from "react"
import Heading from "./Heading"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Container = ({ text = "", children }) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(containerRef.current, {
            opacity: 0,
            duration: 3,
            y: "20%",
            scrollTrigger: {
                trigger: containerRef.current,
                // markers: true,
                scrub: 1,
                start: "top+=300 95%",
                end: "top+=300 75%",
            }
        })
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={`overflow-x-clip lg:overflow-x-visible  mx-0 mx-[50px lg:mx-[120px lg:mx-[10%] [width:-webkit-fill-available] p-6 lg:p-0 mt-[100px] lg:mt-[150px] md:mt-[200px] h-fit ${text ? "min-h-fit" : ""} flex flex-col gap-10 items-center`}>
            {text && <Heading text={text}></Heading>}
            {children}
        </div>
    )
}

export default Container
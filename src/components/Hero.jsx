// import GetStartedButton from "../components/buttons/GetStartedButton.jsx"
// import gsap from "gsap"
// import { useGSAP } from "@gsap/react"
// import { useEffect, useRef } from "react"
// import ScrollTrigger from "gsap/ScrollTrigger.js"
// import { useNavigate } from "react-router-dom"
// gsap.registerPlugin(ScrollTrigger, useGSAP);

// const Hero = ({ heading, subheading, hasBack = false }) => {

//     const headingRef = useRef(null);
//     const subheadingRef = useRef(null);
//     const buttonsRef = useRef(null);
//     const windowRef = useRef(null);
//     const backButtonRef = useRef(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);


//     // useGSAP(() => {
//     //     const tl = gsap.timeline();
//     //     if (headingRef.current) {
//     //         tl.from(headingRef.current, { opacity: 0, y: 30, duration: 0.8 })
//     //     }
//     //     if (subheadingRef.current) {
//     //         tl.from(subheadingRef.current, { opacity: 0, y: 30, duration: 0.8 })
//     //     }
//     //     if (buttonsRef.current) {
//     //         tl.from(buttonsRef.current, { opacity: 0, y: 30, duration: 0.8 })
//     //     }
//     //     if (backButtonRef.current) {
//     //         tl.from(backButtonRef.current, { opacity: 0, y: 30, duration: 0.8 })
//     //     }

//     //     gsap.from(windowRef.current, {
//     //         opacity: 0,
//     //         y: 30,
//     //         duration: 0.8,
//     //     })

//     //     gsap.to(windowRef.current, {
//     //         scale: 0.8,
//     //         yPercent: -15, // slight upward movement
//     //         ease: "none",
//     //         scrollTrigger: {
//     //             trigger: windowRef.current,
//     //             start: "top 80%",   // when element comes into view
//     //             end: "top 30%",     // animation ends earlier
//     //             scrub: true,
//     //             // markers: true,
//     //         }
//     //     });



//     //     const handleResize = () => ScrollTrigger.refresh();
//     //     window.addEventListener("resize", handleResize);

//     //     return () => {
//     //         window.removeEventListener("resize", handleResize);
//     //         ScrollTrigger.kill();
//     //     };
//     // })

//     useGSAP(() => {
//         const tl = gsap.timeline();

//         if (headingRef.current) {
//             tl.from(headingRef.current, { opacity: 0, y: 30, duration: 0.5 });
//         }
//         if (subheadingRef.current) {
//             tl.from(subheadingRef.current, { opacity: 0, y: 30, duration: 0.5 });
//         }
//         if (buttonsRef.current) {
//             tl.from(buttonsRef.current, { opacity: 0, y: 30, duration: 0.5 });
//         }
//         if (backButtonRef.current) {
//             tl.from(backButtonRef.current, { opacity: 0, y: 30, duration: 0.5 });
//         }

//         gsap.from(windowRef.current, {
//             opacity: 0,
//             y: 30,
//             duration: 0.5,
//         });

//         const tween = gsap.to(windowRef.current, {
//             scale: 0.8,
//             yPercent: -15,
//             ease: "none",
//             scrollTrigger: {
//                 trigger: windowRef.current,
//                 start: "top 80%",
//                 end: "top 30%",
//                 scrub: true,
//                 invalidateOnRefresh: true, // ✅ ADD THIS
//             }
//         });

//         const handleResize = () => {
//             console.log("handle resize beign called")
//             ScrollTrigger.refresh(); // ✅ This now properly resets everything
//         };

//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//             tween.scrollTrigger?.kill();
//             tween.kill();
//         };
//     });

//     const handleBack = () => {
//         navigate(-1);
//     }

//     return (
//         <div className='h-screen w-ful [width:-webkit-fill-available] flex-col flex gap-4    items-center relative px-5  lg:mb-[500px]'>
//             <img className='absolute -z-50  bottom-0 right-0  select-none ' src="/ellipse-right-png.png" width={577} height={668} alt="ellipse-right"></img>
//             <img className='absolute -z-50  bottom-0 left-0 select-none  ' src="/ellipse-left-png.png" width={520} height={834} alt="ellipse-left"></img>
//             <div className=" -z-[40] absolute left-0 bottom-0 h-[20%] w-full bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
//             <div className=' -z-[100] absolute w-full h-full bg-gradient-to-tl from-[#5175FF] via-[#6E8CFF] via-[#94AAFF] via-[#F4F4F4] to-white'></div>
//             <h1 ref={headingRef} className=' pt-[160px] font-grotesk font-extrabold text-[40px] lg:text-[64px] wrap-break-word text-impact max-w-[350px] lg:max-w-[500px] text-center text-balance flex flex-col items-center'>
//                 {hasBack && <button ref={backButtonRef} onClick={handleBack} to="#" className=" flex w-fit justify-between items-center gap-4 cursor-pointer mb-4 font-bold font-grotesk text-secondary text-[20px]">
//                     <img className="rotate-180" src={`${import.meta.env.VITE_ICONS_S3_URL}/blue-arrow.svg`} alt="blue arrow"></img> Back
//                 </button>}
//                 {heading ? heading : "All your work.\nOne Workspace."}
//             </h1>
//             <h3 ref={subheadingRef} className='font-grotesk   font-medium lg:text-xl wrap-break-word text-impact/80 max-w-[320px] text-base lg:max-w-[640px] text-center '>
//                 {subheading || " Manage projects, assign tasks, track logs, and collaborate with your team — without switching tools."}
//             </h3>
//             <section ref={buttonsRef} className='flex flex-col md:flex-row items-center  gap-2 mt-10'>
//                 <GetStartedButton></GetStartedButton>
//                 <BookDemoButton></BookDemoButton>
//             </section>
//             <img ref={windowRef} src="/Parallax.png" alt="" className=' absolute top-[60%] left-[50%] -translate-x-1/2 min-w-[250px]  xl:w-[90%]  mt-28 border-[10px]  rounded-[50px] border-[#4755690D]'></img>
//         </div>
//     )
// }

// const BookDemoButton = () => {
//     return <div className='bg-white cursor-pointer border-[1px] font-bold text-xl border-secondary rounded-ten w-[240px] md:w-[183px] h-[54px] p-2.5 font-grotesk text-secondary flex justify-center items-center '>Book a Demo</div>
// }

// export default Hero


import GetStartedButton from "../components/buttons/GetStartedButton.jsx"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useEffect, useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger.js"
import { useNavigate } from "react-router-dom"
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Hero = ({ heading, subheading, hasBack = false }) => {

    const headingRef = useRef(null);
    const subheadingRef = useRef(null);
    const buttonsRef = useRef(null);
    const windowRef = useRef(null);
    const backButtonRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    // useGSAP(() => {
    //     const tl = gsap.timeline();
    //     if (headingRef.current) {
    //         tl.from(headingRef.current, { opacity: 0, y: 30, duration: 0.8 })
    //     }
    //     if (subheadingRef.current) {
    //         tl.from(subheadingRef.current, { opacity: 0, y: 30, duration: 0.8 })
    //     }
    //     if (buttonsRef.current) {
    //         tl.from(buttonsRef.current, { opacity: 0, y: 30, duration: 0.8 })
    //     }
    //     if (backButtonRef.current) {
    //         tl.from(backButtonRef.current, { opacity: 0, y: 30, duration: 0.8 })
    //     }

    //     gsap.from(windowRef.current, {
    //         opacity: 0,
    //         y: 30,
    //         duration: 0.8,
    //     })

    //     gsap.to(windowRef.current, {
    //         scale: 0.8,
    //         yPercent: -15, // slight upward movement
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: windowRef.current,
    //             start: "top 80%",   // when element comes into view
    //             end: "top 30%",     // animation ends earlier
    //             scrub: true,
    //             // markers: true,
    //         }
    //     });



    //     const handleResize = () => ScrollTrigger.refresh();
    //     window.addEventListener("resize", handleResize);

    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //         ScrollTrigger.kill();
    //     };
    // })

    useGSAP(() => {
        const tl = gsap.timeline();

        if (headingRef.current) {
            tl.from(headingRef.current, { opacity: 0, y: 30, duration: 0.5 });
        }
        if (subheadingRef.current) {
            tl.from(subheadingRef.current, { opacity: 0, y: 30, duration: 0.5 });
        }
        if (buttonsRef.current) {
            tl.from(buttonsRef.current, { opacity: 0, y: 30, duration: 0.5 });
        }
        if (backButtonRef.current) {
            tl.from(backButtonRef.current, { opacity: 0, y: 30, duration: 0.5 });
        }

        gsap.from(windowRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.5,
        });

        gsap.set(windowRef.current, { transformOrigin: "center center" });

        const tween = gsap.to(windowRef.current, {
            scale: 0.8,
            yPercent: -15,
            ease: "none",
            scrollTrigger: {
                trigger: windowRef.current,
                start: "top 80%",
                end: "top 30%",
                scrub: true,
            }
        });

        const handleResize = () => {
            console.log("handle resize beign called")
            ScrollTrigger.refresh(); // ✅ This now properly resets everything
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            tween.scrollTrigger?.kill();
            tween.kill();
        };
    });

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className='h-screen  w-ful [width:-webkit-fill-available] flex-col flex gap-4    items-center relative px-5  lg:mb-[500px]'>
            <img className='absolute -z-50  bottom-0 right-0  select-none ' src="/ellipse-right-png.png" width={577} height={668} alt="ellipse-right"></img>
            <img className='absolute -z-50  bottom-0 left-0  select-none ' src="/ellipse-left-png.png" width={520} height={834} alt="ellipse-left"></img>
            <div className=" -z-[40] absolute left-0 bottom-0 h-[20%] w-full bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            <div className=' -z-[100] absolute w-full h-full bg-gradient-to-tl from-[#5175FF] via-[#6E8CFF] via-[#94AAFF] via-[#F4F4F4] to-white'></div>
            <h1 ref={headingRef} className=' pt-[160px] font-grotesk font-extrabold text-[40px] lg:text-[64px] wrap-break-word text-impact max-w-[350px] lg:max-w-[500px] text-center text-balance flex flex-col items-center'>
                {hasBack && <button ref={backButtonRef} onClick={handleBack} to="#" className=" flex w-fit justify-between items-center gap-3 md:gap-4 cursor-pointer mb-4 font-bold font-grotesk text-secondary text-[20px]">
                    <img className="rotate-180" src={`${import.meta.env.VITE_ICONS_S3_URL}/blue-arrow.svg`} alt="blue arrow"></img> Back
                </button>}
                {heading ? heading : "All your work.\nOne Workspace."}
            </h1>
            <h3 ref={subheadingRef} className='font-grotesk   font-medium lg:text-xl wrap-break-word text-impact/80 max-w-[320px] text-base lg:max-w-[640px] text-center '>
                {subheading || " Manage projects, assign tasks, track logs, and collaborate with your team — without switching tools."}
            </h3>
            <section ref={buttonsRef} className='flex flex-col md:flex-row items-center  gap-2 mt-10'>
                <GetStartedButton></GetStartedButton>
                <BookDemoButton></BookDemoButton>
            </section>
            <div className='absolute top-[60%] left-[50%] -translate-x-1/2 w-full flex justify-center'>
                <img
                    ref={windowRef}
                    src="/Parallax.png"
                    alt=""
                    className='min-w-[250px] xl:w-[90%] mt-28 border-[10px] rounded-[50px] border-[#4755690D]'
                />
            </div>
        </div>
    )
}

const BookDemoButton = () => {
    return <div className='bg-white cursor-pointer border-[1px] font-bold text-xl border-secondary rounded-ten w-[240px] md:w-[183px] h-[54px] p-2.5 font-grotesk text-secondary flex justify-center items-center '>Book a Demo</div>
}

export default Hero
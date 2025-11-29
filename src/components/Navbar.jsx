import { useGSAP } from "@gsap/react";
import BlueButton from "./buttons/BlueButton"
import gsap from "gsap";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ showModal, setShowModal, selectedProduct, setSelectedProduct }) => {
    const navbarRef = useRef(null);
    const [search, setSearch] = useState(false);
    const [input, setInput] = useState("");

    useGSAP(() => {
        gsap.from(navbarRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 1.5,
        })
    }, [])

    const scrollToHeight = (height) => {
        window.scrollTo({
            top: height,
            behavior: "smooth",
        });
    }
    const items = [
        {
            label: <span className={`flex gap-1 justify-center items-center ${showModal ? "text-secondary font-semibold" : ""}`}>
                Services and Apps
                {!showModal ? <img src={`${import.meta.env.VITE_ICONS_S3_URL}/down-arrow.svg`} alt="arrow" width={12} height={7} ></img>
                    : <img src={`${import.meta.env.VITE_ICONS_S3_URL}/blue-arrow-no-tail.svg`} alt="blue-arrow" className="-rotate-90"></img>}
            </span>,
            onClick: () => {
                setShowModal(prev => !prev);
            }
        },
        {
            label: "Features",
            onClick: () => {
                setShowModal(false);
                scrollToHeight(1300)
            }

        },
        {
            label: "Why Workspace?",
            onClick: () => {
                setShowModal(false);
                scrollToHeight(2100)
            }
        },
        {
            label: "Custormer Stories",
            onClick: () => {
                setShowModal(false);
                scrollToHeight(2800)
            }
        },
        {
            label: "FAQs",
            onClick: () => {
                setShowModal(false);
                scrollToHeight(3450)
            }
        },
    ]
    return (
        <div ref={navbarRef} className="fixed z-[9999] text-[16px] p-1  bg-transparen backdrop-blur-[6px] font-outfit font-normal h-44px py-[24px] px-[32px] lg:mx-[120px] [width:-webkit-fill-available]  flex justify-between items-center" >
            <section>
                <Link to="/">
                    <img className="inline flex-shrink-0" src={`${import.meta.env.VITE_ICONS_S3_URL}/workspace-logo.svg`} alt="workspace-logo" ></img>
                </Link>
                <ul className="hidden 2xl:inline-flex ml-[40px] gap-[32px] ">
                    {items.map(item => <span key={item.label} className="cursor-pointer" onClick={item.onClick}>{item.label}</span>)}
                </ul>
            </section>
            <section className="flex gap-6 align-middle">
                <span className="hidden  cursor-pointer lg:flex justify-center items-center h-[44px] " onClick={() => {
                    setSearch(prev => {
                        if (prev === true) {
                            setInput("");
                        }
                        return !prev
                    })
                }}>
                    {!search && <img src={`${import.meta.env.VITE_ICONS_S3_URL}/static-search.svg`} alt="search"></img>}
                </span>
                {search && <StyledInput input={input} setInput={setInput}></StyledInput>}
                {search && <span className=" cursor-pointer flex justify-center items-center h-[44px] " onClick={() => {
                    setSearch(prev => {
                        if (prev === true) {
                            setInput("");
                        }
                        return !prev
                    })
                }}>
                    <img src={`${import.meta.env.VITE_ICONS_S3_URL}/cancel.svg`} alt="cancel" width={32} height={32}></img>
                </span>}
                {selectedProduct && <button onClick={() => setSelectedProduct(null)} className="w-10 h-10  rounded-ten bg-[#4755691A] cursor-pointer  rotate-90 flex justify-center items-center ">
                    <img
                        src={`${import.meta.env.VITE_ICONS_S3_URL}/down-arrow.svg`}
                        alt="arrow"
                        width={12}
                        height={7}
                    />
                </button>}
                {!search && !selectedProduct && <BlueButton className="hidden lg:inline-block" text="Get Started"></BlueButton>}
                {!search && !selectedProduct && <BlueButton
                    onClick={() => {
                        setSelectedProduct("");
                        setShowModal(prev => !prev);
                    }}
                    icon={`${import.meta.env.VITE_ICONS_S3_URL}/${!showModal ? "hamburger.svg" : "white-cross.svg"}`}></BlueButton>}
            </section>
        </div >
    )
}


const StyledInput = ({ input, setInput }) => {
    return <input onKeyDown={(e) => {
        if (e.key === "Enter") {
            alert(`You searched for ${input}`)
        }
    }} value={input} type='text' placeholder="Search" onChange={(e) => {
        setInput(e.target.value)
    }} className="min-w-[250px] w-1/3 max-w-[350px] placeholder:text-primary/80 h-10 bg-transparent border-0 ring-0 outline-0 border-b-[1px] border-b-primary p-1 py-0 text-lg"></input>
}

export default Navbar
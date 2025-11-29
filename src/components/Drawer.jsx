import { useState, } from "react";
import AppItemCard from "./cards/AppItemCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import BlueButton from "./buttons/BlueButton";

const Drawer = ({ showModal, setShowModal, selectedProduct, setSelectedProduct }) => {

    const drawerRef = useRef(null);

    useGSAP(() => {
        if (drawerRef.current) {
            if (showModal) {
                gsap.fromTo(
                    drawerRef.current,
                    { y: "-=100%", },
                    {
                        y: "0%",
                        opacity: 1,
                        duration: 0.3,
                    }
                );
            }
        }
    }, { dependencies: [showModal], revertOnUpdate: false });


    const [activeKey, setActiveKey] = useState("Engineering Design")
    const handleSelect = (val) => {
        setActiveKey(val);
    }
    const listItems = [
        "Engineering Design",
        "Project Management",
        "Construction Supervision",
        "Technical Services",
        "E-Learning",
        "Operation Management",
        "Notes",
    ]




    return (
        <div ref={drawerRef} className="absolute  top-0 w-full h-fit p-8 pt-0 lg:p-0 lg:h-[70%] shadow-md overflow-y-auto rounded-b-[64px] bg-white" onClick={(e) => {
            e.stopPropagation();
        }}>
            <div className=" hidden lg:flex mt-[125px] mx-9 md:mx-[120px] h-fit  ">
                <SideBar listItems={listItems} activeKey={activeKey} handleSelect={handleSelect}></SideBar>
                <div className="h-full px-5 flex-1 hidden md:flex  md:flex-wrap md:items-stretch  gap-5">
                    <AppItemCard setShowModal={setShowModal} item={{ title: "Task", description: "Assign and manage tasks for your team." }}></AppItemCard>
                    <AppItemCard setShowModal={setShowModal} item={{ title: "Task", description: "Assign and manage tasks for your team." }}></AppItemCard>
                    <AppItemCard setShowModal={setShowModal} item={{ title: "Task", description: "Assign and manage tasks for your team." }}></AppItemCard>
                    <AppItemCard setShowModal={setShowModal} item={{ title: "Task", description: "Assign and manage tasks for your team." }}></AppItemCard>
                    <AppItemCard setShowModal={setShowModal} item={{ title: "Task", description: "Assign and manage tasks for your team." }}></AppItemCard>
                    <AppItemCard setShowModal={setShowModal} item={{ title: "Task", description: "Assign and manage tasks for your team." }}></AppItemCard>
                    <AppItemCard setShowModal={setShowModal} item={{ title: "Task", description: "Assign and manage tasks for your team." }}></AppItemCard>

                </div>
            </div>
            <div className="lg:hidden mt-[125px]  md:mx-[120px] h-fit flex  ">
                <SmallDrawer setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct} setShowModal={setShowModal} listItems={listItems}></SmallDrawer>
            </div>
        </div>
    )
}

const SelectItem = ({ text, activeKey, handleSelect }) => {
    return (
        <div
            onClick={() => handleSelect(text)}
            className={`
                h-10 p-2 min-w-fit cursor-pointer font-grotesk text-lg rounded-ten truncate 
                text-nowrap overflow-ellipsis 
                flex justify-between gap-1 items-center
                transform transition duration-200 ease-in-out
                ${activeKey === text
                    ? "text-secondary bg-secondary/10 font-bold"
                    : "text-impact bg-white hover:text-secondary hover:bg-secondary/10 hover:font-bold"
                }
            `}
        >
            {text}
            {activeKey !== text ? (
                <img
                    src={`${import.meta.env.VITE_ICONS_S3_URL}/down-arrow.svg`}
                    className="-rotate-90"
                    alt="arrow"
                    width={12}
                    height={7}
                />
            ) : (
                <img
                    src={`${import.meta.env.VITE_ICONS_S3_URL}/blue-arrow-no-tail.svg`}
                    alt="blue-arrow"
                />
            )}
        </div>
    )
}

const SideBar = ({ listItems, activeKey, handleSelect }) => {
    return <div className="h-full w-full md:w-1/5 min-w-fit flex flex-col gap-4 ">
        {listItems.map(item => {
            return <SelectItem activeKey={activeKey} handleSelect={handleSelect} text={item} key={item}></SelectItem>
        })}
    </div>
}

const SmallDrawer = ({ listItems, setShowModal, selectedProduct, setSelectedProduct }) => {
    const [openOptions, setOpenOptions] = useState(false);
    // const [selectedProduct, setSelectedProduct] = useState(null)

    const scrollToHeight = (height) => {
        window.scrollTo({
            top: height,
            behavior: "smooth",
        });
    }

    const navbarItems = [
        {
            title: "Features",
            onClick: () => {
                scrollToHeight(950);
            }
        },
        {
            title: "Why Workspace?",
            onClick: () => {
                scrollToHeight(2050);
            }
        },
        {
            title: "Customer Stories",
            onClick: () => {
                scrollToHeight(2800);
            }
        },
        {
            title: "FAQs",
            onClick: () => {
                scrollToHeight(3450);
            }
        },
    ]

    if (selectedProduct) {
        return <div className="flex flex-col w-full gap-5 max-h-[50%] overflow-hidden">
            <span className="text-impact font-grotesk font-medium text-lg ">{selectedProduct}</span>
            <div className=" flex flex-col gap-2 max-h-[500px] w-full overflow-y-auto overflow-x-hidden  ">
                <AppItemCard className="w-full" setShowModal={setShowModal} setSelectedProduct={setSelectedProduct} item={{ title: "Task", description: "Assign and manage tasks for your team." }}></AppItemCard>
                <AppItemCard className="w-full" setShowModal={setShowModal} setSelectedProduct={setSelectedProduct} item={{ title: "Task", description: "Assign and manage tasks for your team." }}></AppItemCard>
                <AppItemCard className="w-full" setShowModal={setShowModal} setSelectedProduct={setSelectedProduct} item={{ title: "Task", description: "Assign and manage tasks for your team." }}></AppItemCard>
                <AppItemCard className="w-full" setShowModal={setShowModal} setSelectedProduct={setSelectedProduct} item={{ title: "Task", description: "Assign and manage tasks for your team." }}></AppItemCard>
            </div>
        </div>

    }
    return <div className="w-full h-fit flex flex-col gap-4">
        <div
            onClick={() => setOpenOptions(prev => !prev)}
            className={`
                h-10 p-2 min-w-fit cursor-pointer font-medium font-outfit text-lg rounded-ten truncate
                text-nowrap overflow-ellipsis
                flex justify-between gap-1 items-center
                transform transition duration-200 ease-in-out
              text-primary bg-white hover:text-secondary
            `}
        >
            Services and Apps
            {openOptions ? (
                <img
                    src={`${import.meta.env.VITE_ICONS_S3_URL}/down-arrow.svg`}
                    className="rotate-180"
                    alt="arrow"
                    width={12}
                    height={7}
                />
            ) : (
                <img
                    src={`${import.meta.env.VITE_ICONS_S3_URL}/down-arrow.svg`}

                    alt="arrow"
                    width={12}
                    height={7}
                />
            )}
        </div>
        {openOptions && <section className="flex flex-col items-end gap-3">
            {listItems.map(item => {
                return <span key={item} onClick={() => setSelectedProduct(item)} className="h-10 w-[90%] font-outfit text-lg flex justify-between text-primary cursor-pointer">
                    {item}<img
                        src={`${import.meta.env.VITE_ICONS_S3_URL}/down-arrow.svg`}
                        className="-rotate-90 inline"
                        alt="arrow"
                        width={12}
                        height={7}
                    />
                </span>
            })}
        </section>}
        {navbarItems.map(item => {
            return <div
                key={item.title}
                onClick={() => {
                    setShowModal(false);
                    item.onClick();
                }}
                className={`
                h-10 p-2 min-w-fit font-medium cursor-pointer font-outfit text-lg rounded-ten truncate 
                text-nowrap overflow-ellipsis 
                flex justify-between gap-1 items-center
                transform transition duration-200 ease-in-out
              text-primary bg-white hover:text-secondary
            `}
            >
                {item.title}

            </div>
        })}
        <BlueButton text="Get Started"></BlueButton>

    </div>
}

export default Drawer
import React, { useState } from 'react'

const Accordian = () => {
    return (
        <div className='flex-1 flex flex-col gap-2 w-full md:max-w-9/   h-fit '>
            <AccordianItem  ></AccordianItem>
            <AccordianItem  ></AccordianItem>
            <AccordianItem  ></AccordianItem>
            <AccordianItem  ></AccordianItem>
            <AccordianItem  ></AccordianItem>
        </div>
    )
}

const AccordianItem = () => {

    const [show, setShow] = useState(false);

    return <div className='flex flex-col cursor-pointer ' onClick={() => {
        setShow(prev => !prev)
    }}>
        <div
            className={`
            ease-in flex justify-between font-grotesk py-4 px-6 bg-glass border-[1px] border-white/50
            ${show ? "transition-none rounded-b-none rounded-t-ten" : "transition-all duration-500 rounded-ten"}`}
        >
            <section className='flex items-center gap-4 max-w-[80%]'>
                <span className='text-primary font-medium text-[14px] md:text-lg'>
                    Q1.
                </span>
                <span className='text-impact text-base md:text-[20px] font-bold truncate  '> How do I create a new workspace? </span>
            </section>
            <img src={`${import.meta.env.VITE_ICONS_S3_URL}/down-arrow.svg`} alt="arrow" width={16} height={9}></img>
        </div>
        <div
            className={`transition-all duration-500  ease-in-out overflow-hidden ${show ? "max-h-40 " : "max-h-0 "
                }`}
        >
            <div className="py-4 px-[60px] text-primary font-outfit text-base md:text-lg  w-full bg-glass rounded-b-ten">
                Go to the dashboard, click “Create Workspace”, and follow the quick setup steps.
            </div>
        </div>
    </div>
}

export default Accordian
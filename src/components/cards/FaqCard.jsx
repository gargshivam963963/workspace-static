
import Accordian from '../Accordian'
import ContactUsCard from './ContactUsCard'

const FaqCard = () => {
    return (

        <div className='relative w-full flex flex-col items-center  lg:flex-row justify-end lg:items-start gap-5  mb-auto'>
            <div className=" absolute  -z-50 right-0 top-0 -translate-y-28 -translate-x-24 animate-breathe bg-gradient-to-r from-[#5175FF90] to-white h-[427px] w-[427px] rounded-full blur-[80px] rotate-180 "></div>
            {/* <img className='-z-50 absolute  right-0 top-0 -translate-y-28 -translate-x-24' src="/ellipse-faq.svg" alt="ellipse-faq"></img> */}
            <Accordian></Accordian>
            <ContactUsCard></ContactUsCard>
        </div>
    )
}

export default FaqCard
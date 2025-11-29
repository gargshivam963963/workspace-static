
import { Link } from 'react-router-dom'

const AppItemCard = ({ item, setShowModal, setSelectedProduct, className = "" }) => {
    return (
        <Link onClick={() => {
            setSelectedProduct("")
            setShowModal(false)
        }} to={`/${item.title}`}>
            <div className={` ${className} w-fit transition duration-200 ease-in-out hover:bg-[#E8E8E8]  min-h-fit rounded-ten bg-glass p-4 flex flex-col  `} >
                <span className='font-grotesk font-bold text-base text-impact'>{item.title}</span>
                <p className='font-outfit text-base text-primary w-fit max-w-[90%]'>{item.description}</p>
            </div>
        </Link>
    )
}

export default AppItemCard
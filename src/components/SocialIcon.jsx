
const SocialIcon = ({ icon }) => {
    return (
        <div className="w-[50px] h-[50px] cursor-pointer bg-[#4755691A] border-[1px] border-[#4755691A] rounded-full flex justify-center items-center ">
            <img src={icon} alt="social-icon"></img>
        </div>
    )
}

export default SocialIcon
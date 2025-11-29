
const WindowWrapper = ({ children }) => {
    return (
        <div className="w-full mx-auto flex  flex-col-reverse gap-5 md:gap-0 md:flex-row md:justify-between  items-start md:items-center ">
            <section className="flex-1 px- h-fit min-h-[180px] max-h-[50%]">
                {children}
            </section>
            <img src={`${import.meta.env.VITE_ICONS_S3_URL}/window.svg`} width={""} className="min-w-[250px] md:w-1/2 md:h-4/5 w-full   mt-5 md:mt-0 " height={""} alt="window"></img>
        </div>
    )
}

export default WindowWrapper
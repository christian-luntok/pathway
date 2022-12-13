import Image from "next/image"

const LogoItems = ({logos}) => {

    return (
        <div className="logos-container flex flex-wrap md:grid align-center justify-center gap-y-6 gap-x-8 md:gap-x-14 md:grid-cols-4 xl:grid-cols-8">
            {
                logos.map((item,index) => (
                    <div key={index} className="logo-item-container flex align-center flex-wrap m-auto md:col-span-1">
                        <Image 
                            src={item.logo}
                            width="110"
                            height="25"
                            alt={item.title}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default LogoItems
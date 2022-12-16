import Image from "next/image"

type LogoItemsProps = {
    logo: string
    title?: string
}
const LogoItems = ({logo, title}:LogoItemsProps) => {
    return (
        <div className="logo-item-container flex align-center flex-wrap m-auto md:col-span-1">
            <Image 
                src={logo}
                width="110"
                height="25"
                alt={title}
            />
        </div>
    )
}

export default LogoItems
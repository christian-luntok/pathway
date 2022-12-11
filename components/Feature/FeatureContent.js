import Link from "next/link"
import { Icon } from "@iconify/react"

const FeatureContent = ({title, content, icon, link, linkTitle }) => {

    return(
        <div className="featured-content-item text-center md:text-left ">
            {
                icon?.length ? (
                    <span className="inline-block w-auto rounded-full text-[#94A3B8] icon mb-4 p-3 bg-white">
                        <Icon className="w-6 h-auto" icon={icon}/>
                    </span>
                ) : null
            }
            <h2 className={`font-semibold text-h3`}>{title}</h2>
            <div className="content-container mt-2 text-[#737373]">
                {content}
                {
                    link ? (
                        <Link 
                            href={link}
                            className="text-[#94A3B8] block mt-4"
                        >
                            {linkTitle}
                        </Link>
                    ) : null
                }
            </div>
        </div>
    )
}

export default FeatureContent
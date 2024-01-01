import { Icon } from "@iconify/react"
import Button, { ButtonVariant } from '@components/Button/Button'

type FeatureContentProps = {
    title: string
    content: string
    icon?: string   
    link?: string
    linkTitle?: string
  }
  
const FeatureContent = ({title, content, icon, link, linkTitle }:FeatureContentProps) => {

    return(
        <div className="featured-content-item text-center space-y-6">
            {
                icon?.length && (
                    <span className="inline-block w-auto rounded-full text-[#94A3B8] icon p-3 bg-white">
                        <Icon className="w-6 h-auto" icon={icon}/>
                    </span>
                )
            }
            <h2 className={`font-semibold text-h3`}>{title}</h2>
            <div className="content-container text-[#737373]">
                {content} 
            </div>
            {
                    link && (
                    <Button text={linkTitle} link={link} icon="ph:arrow-right-bold" variant={ButtonVariant.primary} />
                        
                    )
                }
        </div>
    )
}

export default FeatureContent
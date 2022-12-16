import SectionIconContent from "@components/Section/SectionIconContent"
import ButtonGroup from "@components/ButtonGroup"
import Image from "next/image"
import Button, { ButtonVariant } from "@components/Button/Button"

type SectionHighlightProps = {
    title?: string
    content?: string 
    icon?: string 
    image?: string
    imageAlt?: string
    link?: string 
    linkTitle?: string
    isReversed?: boolean
}
const SectionHighlight = ({ title, content, isReversed, icon, image, imageAlt, link, linkTitle }:SectionHighlightProps) => {
    return (
        <section className="highlight-content-container wrap wrap-px">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-16">
                <div className={`image-container ${ isReversed ? 'order-1 md:order-2' : 'order-1' }`}>
                        {
                            image && (
                                <figure className="w-[512px]">
                                    <Image 
                                        priority
                                        src={image}
                                        alt={imageAlt}
                                        className={isReversed ? 'ml-auto' : ''}
                                        width={515}
                                        height={515}
                                    />
                                </figure>
                            )
                        }
                </div>
                <div className={`content-container w-[512px] ${ isReversed ? 'order-2 md:order-1 mr-auto' : 'order-2 ml-auto' }`}>
                    <SectionIconContent 
                        title = {title}
                        icon = {icon}
                        content = {content}
                    />
                    { 
                        link && (
                            <ButtonGroup className = "wrap-sm">
                                <Button text={linkTitle} link={link} variant={ButtonVariant.primary}/>
                            </ButtonGroup>
                        ) 
                    }
                </div>
            </div>
        </section>
    )
}

export default SectionHighlight
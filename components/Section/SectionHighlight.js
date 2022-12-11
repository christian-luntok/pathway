import SectionIconContent from "@components/Section/SectionIconContent"
import ButtonGroup from "@components/ButtonGroup"

const SectionHighlight = ({ title, content, isReversed, icon, image, imageAlt, link, linkTitle }) => {
    return (
        <section className="highlight-content-container wrap wrap-px">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
                <div className={`image-container ${ isReversed ? 'order-2' : 'order-1' }`}>
                    <figure className="w-[512px]">
                        <img 
                            src={image}
                            alt={imageAlt}
                            className={isReversed ? 'ml-auto' : ''}
                        />
                    </figure>
                </div>
                <div className={`content-container w-[512px] ${ isReversed ? 'order-1 mr-auto' : 'order-2 ml-auto' }`}>
                    <SectionIconContent 
                        title = {title}
                        content = {content}
                        icon = {icon}
                        alignment = "left"
                    />
                    { 
                        link ? (
                            <ButtonGroup 
                            wrap = "wrap-sm"
                            hasPrimary = {true}
                            primaryText = {linkTitle}
                            primaryLink = {link}
                            />
                        ) : null
                    }
                </div>
            </div>
        </section>
    )
}

export default SectionHighlight
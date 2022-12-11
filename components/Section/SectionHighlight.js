import SectionIconContent from "@components/Section/SectionIconContent"
import ButtonGroup from "@components/ButtonGroup"

const SectionHighlight = ({ title, content, isReversed, icon, image, imageAlt, link}) => {

    return (
        <section className="highlight-content-container wrap wrap-px">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="image-container">
                    <figure className="w-[512px]">
                        <img 
                            src="images/highlight-1.jpg"
                            alt={imageAlt}
                        />
                    </figure>
                </div>
                <div className="content-container w-[512px] ml-auto">
                    <SectionIconContent 
                        title = {title}
                        content = {content}
                        icon = {icon}
                        alignment = "left"
                    />
                    <ButtonGroup 
                        wrap = "wrap-sm"
                        hasPrimary = {true}
                        primaryText = "About"
                        primaryLink = "/about"
                    />
                </div>
            </div>
        </section>
    )
}

export default SectionHighlight
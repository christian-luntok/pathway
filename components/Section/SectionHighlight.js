import SectionIconContent from "@components/Section/SectionIconContent"
import ButtonGroup from "@components/ButtonGroup"

const SectionHighlight = ({ title, content, isReversed, icon, image, imageAlt, link, linkTitle }) => {
    return (
        <section className="highlight-content-container wrap wrap-px">
                {
                    isReversed ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
                            <div className="content-container w-[512px] mr-auto">
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
                            <div className="image-container">
                                <figure className="w-[512px]">
                                    <img 
                                        src={image}
                                        alt={imageAlt}
                                        className="ml-auto"
                                    />
                                </figure>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center  mb-16">
                            <div className="image-container">
                                <figure className="w-[512px]">
                                    <img 
                                        src={image}
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
                    )
                }
        </section>
    )
}

export default SectionHighlight
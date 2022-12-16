import SectionTitle from "@components/Section/SectionTitle"
// You can get icons from iconify - just add the name on the Primary Button Props

type SectionContentProps = {
    title?: string
    subheading?: string
    icon?: string
    alignment?: string
    isBigHeader?: boolean
    hasBlockPadding?: boolean
    children?: React.ReactNode
}

const SectionContent = ( {children, title, subheading, alignment, isBigHeader, hasBlockPadding, icon}:SectionContentProps ) => {
    const alignClass = alignment === 'center' 
        ? 'md:text-center md:justify-center m-auto' : alignment === 'left' 
        ? 'md:text-left md:justify-start mr-auto' : alignment === 'right' 
        ? 'md:text-right md:justify-end ml-auto' : null;
    return (
        <section className = {`section-content-container wrap wrap-px`}>
            <div className={`section-content text-center ${hasBlockPadding && 'my-6 sm:my-24' } ${ alignClass && alignClass }`}>
                <SectionTitle 
                    title = {title}
                    subheading = {subheading}
                    isBigHeader = {isBigHeader}
                    icon = {icon}
                />
                <div className="content-container text-black/60">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default SectionContent
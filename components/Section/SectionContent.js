import SectionTitle from "@components/Section/SectionTitle"
// You can get icons from iconify - just add the name on the Primary Button Props


const SectionContent = ({content, title, subheading, alignment, isBigHeader, hasBlockPadding }) => {
    const alignClass = alignment === 'center' 
        ? 'md:text-center md:justify-center m-auto' : alignment === 'left' 
        ? 'md:text-left md:justify-start mr-auto' : alignment === 'right' 
        ? 'md:text-right md:justify-end ml-auto' : null;
    return (
        <section className = {`section-content-container wrap wrap-px ${hasBlockPadding ? 'py-6 sm:py-24' : '' }`}>
            <div className={`section-content text-center ${ alignClass ? alignClass : '' }`}>
                <SectionTitle 
                    title = {title}
                    subheading = {subheading}
                    isBigHeader = {isBigHeader}
                />
                <div className="content-container text-black/60">
                    <p>{ content }</p>
                </div>
            </div>
        </section>
    )
}

export default SectionContent
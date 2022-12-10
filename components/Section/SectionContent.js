import SectionTitle from "@components/Section/SectionTitle"
// You can get icons from iconify - just add the name on the Primary Button Props


const SectionContent = ({content, title, subheading, alignment, isBigHeader }) => {
    const alignClass = alignment === 'center' 
        ? 'text-center justify-center m-auto' : alignment === 'left' 
        ? 'text-left justify-start mr-auto' : alignment === 'right' 
        ? 'text-right justify-end ml-auto' : null;
    return (
        <section className = {`section-content-container wrap wrap-px `}>
            <div className={`section-content ${ alignClass ? alignClass : null }`}>
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
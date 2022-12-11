import SectionTitle from "@components/Section/SectionTitle"
// You can get icons from iconify - just add the name on the Primary Button Props


const SectionContent = ({content, title, subheading, icon, isBigHeader, isReversed }) => {
    return (
        <section className = {`section-content-container wrap`}>
            <div className={`section-content text-center lg:text-left`}>
                <SectionTitle 
                    title = "Lorem Ipsum Title"
                    subheading = {subheading}
                    isBigHeader = {false}
                    icon = "ph:lightning"
                />
                <div className="content-container text-black/60">
                    <p>Suspendisse eu rhoncus augue, nec viverra sem. Sed sollicitudin neque in justo lobortis, ut vehicula mi ultrices. Morbi suscipit eget augue et ultricies.</p>
                </div>
            </div>
        </section>
    )
}

export default SectionContent
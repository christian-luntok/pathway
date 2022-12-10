import SectionTitle from "@components/Section/SectionTitle"
import PrimaryButton from '@components/Button/PrimaryButton'
import SecondaryButton from '@components/Button/SecondaryButton'

// You can get icons from iconify - just add the name on the Primary Button Props


const SectionContent = ({content, title, subheading, alignment, isBigHeader }) => {
    const alignClass = alignment === 'center' 
        ? 'text-center justify-center m-auto' : alignment === 'left' 
        ? 'text-left justify-start ml-auto' : alignment === 'right' 
        ? 'text-right justify-end mr-auto' : null;
    return (
        <section className = {`section-content-container wrap wrap-px `}>
            <div className={`section-content py-16 ${ alignClass ? alignClass : null }`}>
                <SectionTitle 
                    title = {title}
                    subheading = {subheading}
                    isBigHeader = {isBigHeader}
                />
                <div className="content-container text-black/60">
                    <p>{ content }</p>
                </div>
                <div className={`button-container gap-4 flex flex-wrap ${ alignClass ? alignClass : null }`}>
                    <SecondaryButton 
                        text="About"
                        link="/about"
                        icon="ph:arrow-right-bold"
                    />
                    <PrimaryButton 
                        text="Company"
                        link="/company"
                    />
                </div>
            </div>
        </section>
    )
}

export default SectionContent
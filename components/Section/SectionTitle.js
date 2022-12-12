import { Icon } from "@iconify/react"

const SectionTitle = ({title, subheading, isBigHeader, icon}) => {
    return (
        <section className="section-title-container">
            {
                icon?.length ? (
                    <span className="inline-block w-auto rounded-full icon mb-6 p-3 bg-badge">
                        <Icon className="w-6 h-auto " icon={icon}/>
                    </span>
                ) : null
            }
            {
                subheading?.length ? (<span className="block subheading mb-6">{ subheading }</span>) : null 
            }
            <h2 className={`font-semibold text-h2 ${ isBigHeader ? 'md:text-h1' : 'md:text-section-title' }`}>{title}</h2>
        </section>
    )
}

export default SectionTitle
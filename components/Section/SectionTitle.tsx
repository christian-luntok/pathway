import { Icon } from "@iconify/react"

type SectionTitleProps = {
    title: string
    subheading?: string
    isBigHeader?: boolean
    icon?: string
}

const SectionTitle = ({title, subheading, isBigHeader, icon}:SectionTitleProps ) => {
    return (
        <section className="section-title-container">
            {
                icon?.length && (
                    <span className="inline-block w-auto rounded-full icon mb-6 p-3 bg-badge">
                        <Icon className="w-6 h-auto " icon={icon}/>
                    </span>
                )
            }
            {
                subheading?.length && (<span className="block subheading mb-6">{ subheading }</span>)
            }
            <h2 className={`font-semibold text-h2 ${ isBigHeader ? 'md:text-h1' : 'md:text-section-title' }`}>{title}</h2>
        </section>
    )
}

export default SectionTitle
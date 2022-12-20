import { Icon } from "@iconify/react"
import Link from "next/link"

/**
 * Badge Group Component
 * 
 * @params alignment - sets where to align the component. Values can be set as [left, right or center]
 */

type BadgeGroupProps = {
    className?: string
    alignment?: string
    message?: string
    icon?: string
    link?: string | 'div' | 'link'
    children?: React.ReactNode
}
const BadgeGroup = ({alignment, message, icon, link, children}:BadgeGroupProps) =>  {
    const Element = link ? Link : 'div'
    const alignClass = alignment === 'center' 
        ? 'text-center m-auto' : alignment === 'left' 
        ? 'text-left mr-auto' : alignment === 'right' 
        ? 'text-right ml-auto' : null;
    
    return (
        <section className={`badge-group-container wrap wrap-px ${ alignClass && alignClass }`}>
            <Element href={link && link} className={`font-medium text-badgeText badge-group p-1 w-auto rounded-full bg-badge inline-flex items-center gap-3 mb-8 ${link && 'hover:bg-secondary-200 transition-colors duration-300'}`}>
                {children}
            </Element>
        </section>
    )
}

export default BadgeGroup
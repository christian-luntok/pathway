import { Icon } from "@iconify/react"
import Link from "next/link"

/**
 * Badge Group Component
 * 
 * @params alignment - sets where to align the component. Values can be set as [left, right or center]
 */
const BadgeGroup = ({alignment, context, message, icon, link}) =>  {
    const Element = link ? Link : 'div'
    const alignClass = alignment === 'center' 
        ? 'text-center m-auto' : alignment === 'left' 
        ? 'text-left mr-auto' : alignment === 'right' 
        ? 'text-right ml-auto' : null;
    
    return (
        <section className={`badge-group-container wrap wrap-px ${ alignClass ? alignClass : null }`}>
            <Element href={link ? link : undefined} className={`badge-group p-1 border w-auto rounded-full bg-badge inline-flex items-center gap-3 mb-8 ${link ? 'hover:bg-secondary-200 transition-all duration-300' : '' }`}>
                <div className="context px-2 py-[2px] bg-white rounded-full">
                    {context}
                </div>
                <div className="message">
                    {message}
                </div>
                <div className="icon py-2 pr-2">
                    <Icon icon={icon} className=" w-4 "/>
                </div>
            </Element>
        </section>
    )
}

export default BadgeGroup
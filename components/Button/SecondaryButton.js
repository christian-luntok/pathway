import { Icon } from '@iconify/react'
import Link from 'next/link'

const PrimaryButton = ({text, icon, link}) => {
    return (
        <Link
            href = { link }
            role ="button"
            className="flex font-medium w-full md:w-auto justify-center gap-3 items-center px-8 bg-secondary-500 text-white py-2 rounded-full hover:bg-secondary-300 transition-all duration-300"
        >
            { text }
            {
                    icon?.length > 0 
                    ? (
                        <Icon icon={icon}/>    
                    ) : null
            }
        </Link>
    )
}

export default PrimaryButton
import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'

const PrimaryButton = ({text, icon, link}) => {
    const router = useRouter()
    return (
        <button
            onClick={() => router.push(link)}
            className="flex font-medium justify-center gap-3 items-center px-8 bg-secondary-500 text-white py-[5px] rounded-full hover:bg-secondary-300 transition-all duration-300"
        >
            {text}
            {
                    icon?.length > 0 
                    ? (
                        <Icon icon={icon}/>    
                    ) : null
            }
        </button>
    )
}

export default PrimaryButton
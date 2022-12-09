import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'

const PrimaryButton = ({text, icon, link}) => {
    const router = useRouter()
    return (
        <button
            onClick={() => router.push(link)}
            className=""
        >
            {text}
            {
                icon?.length > 0 
                    ? (
                        <Icon icon={icon}/>    
                    ) : (
                        ''
                    )
            }
        </button>
    )
}

export default PrimaryButton
import { Icon } from '@iconify/react'
import Link from 'next/link'

export enum ButtonVariant {
    primary = 'bg-primary-500',
    secondary ='bg-secondary-500'
}

type ButtonProps = {
    text: string
    icon?: string
    link: string
    variant?: ButtonVariant
    type?: string | 'button' | 'link'
  }
  
// You can get icons from iconify - just add the name on the Primary Button Props
const Button = ({ text, icon, link, type = 'link', variant }: ButtonProps ) => {
    const Element = type === 'button' ? 'button' : Link
    return (
        <Element
            href = { link }
            role ="button"
            className={`flex font-medium w-full md:w-auto justify-center gap-3 items-center px-8  text-white py-2 rounded-full hover:bg-primary-300 transition-colors duration-300 ${variant && variant}`}
        >
            { text }
            {
                    icon?.length && (
                        <Icon icon={icon}/>    
                    ) 
            }
        </Element>
    )
}

export default Button


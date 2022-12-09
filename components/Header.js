import { Icon } from '@iconify/react'
import PrimaryButton from './Button/PrimaryButton'

const Header = () => {
    return (
        <div>
            <div className="text-3xl font-bold underline my-12 wrap">
                <h2>Header</h2>
            </div>
            <Icon icon="material-symbols:arrow-right-alt" />
            <PrimaryButton 
                     text="Get Started"
                     link="/"
            />
            <PrimaryButton 
                     text="About"
                     link="/"
                     icon="material-symbols:arrow-right-alt"
            />
        </div>
    )
}

export default Header
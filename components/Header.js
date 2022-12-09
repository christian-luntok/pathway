import { Icon } from '@iconify/react'
import PrimaryButton from './Button/PrimaryButton'

const Header = () => {
    return (
        <div className="text-3xl font-bold underline my-12 wrap">
            <h2>Header</h2>
            <Icon icon="material-symbols:arrow-right-alt" />
            <PrimaryButton />
        </div>
    )
}

export default Header
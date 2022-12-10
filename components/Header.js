import { Icon } from '@iconify/react'
import PrimaryButton from '@components/Button/PrimaryButton'
import SecondaryButton from '@components/Button/SecondaryButton'

const Header = () => {
    return (
        <header id="header" className="wrap wrap-px">
            <div className="header-container py-4 flex items-center">
                <div className="flex items-center mr-6">
                    <a href="/" className="">
                        <img 
                            src="/icons/Pathway.svg" 
                            alt="logo"
                            className="h-6 w-auto"
                        />
                    </a>
                </div>
                <nav className="header-nav text-black/60">
                    <ul className="flex font-medium gap-6">
                        <li><a href="">Use cases</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="">Company</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
                <div className="button-container flex flex-wrap gap-4 ml-auto">
                    <SecondaryButton 
                        text="Login"
                    />
                    <PrimaryButton 
                        text="Sign Up"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header
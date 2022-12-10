import PrimaryButton from '@components/Button/PrimaryButton'
import SecondaryButton from '@components/Button/SecondaryButton'
import Nav from '@components/Nav'

const Header = () => {
    return (
        <header id="header" className="wrap wrap-px">
            <div className="header-container relative py-4 justify-between md:justify-start flex items-center">
                <div className="flex items-center mr-8">
                    <a href="/" className="logo">
                        <img 
                            src="/icons/Pathway.svg" 
                            alt="logo"
                            className="h-6 w-auto"
                        />
                    </a>
                </div>
                <Nav />
                <div className="button-container hidden md:flex flex-wrap gap-4 ml-auto">
                    <SecondaryButton 
                        text="Login"
                        link="/login"
                    />
                    <PrimaryButton 
                        text="Sign Up"
                        link="/sign-up"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header
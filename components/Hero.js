import SectionContent from "@components/Section/SectionContent"
import ButtonGroup from "@components/ButtonGroup"
import SectionImage from "@components/Section/SectionImage"
import BadgeGroup from "@components/BadgeGroup"


const Hero = () => {
    const alignment = "center"

    return (
        <section className="hero-container">
            <div className="hero-content-container py-16 ">
                <BadgeGroup 
                    context="V 0.1"
                    message="Welcome to Pathway!"
                    // icon="ph:arrow-right-bold"
                    // link="/about"
                    alignment={alignment}
                />
                <SectionContent 
                    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    content = "Fusce ac nulla non urna posuere malesuada eget id ipsum. Praesent vitae sem nisl. Donec in est ut odio sagittis dapibus in commodo mi."
                    alignment = {alignment}
                    isBigHeader = {true}
                />
                <ButtonGroup 
                    wrap = "wrap-sm wrap-px"
                    hasPrimary = {true}
                    primaryText = "Get Started"
                    primaryLink = "/about"
                    primaryIcon = "ph:arrow-right-bold"
                    hasSecondary = {true}
                    secondaryText = "Contact Us"
                    secondaryLink = "/contact"
                    alignment={alignment}
                />
            </div>
            <SectionImage 
                src="images/Hero.jpg"
                alt="Hero Image used for Hero Banner"
            />
        </section>
    )
}

export default Hero
import SectionContent from "@components/Section/SectionContent"
import ButtonGroup from "@components/ButtonGroup"
import SectionImage from "@components/Section/SectionImage"


const Hero = () => {

    return (
        <section className="hero-container">
            <div className="hero-content-container py-16 ">
                <SectionContent 
                    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    content = "Fusce ac nulla non urna posuere malesuada eget id ipsum. Praesent vitae sem nisl. Donec in est ut odio sagittis dapibus in commodo mi."
                    subheading = "Sub Heading"
                    alignment = "center"
                    isBigHeader = {true}
                />
                <ButtonGroup 
                    wrap = "wrap-sm wrap-px"
                    hasPrimary = {true}
                    primaryText = "About"
                    primaryLink = "/about"
                    primaryIcon = "ph:arrow-right-bold"
                    hasSecondary = {true}
                    secondaryText = "Company"
                    secondaryLink = "/company"
                    alignment="center"
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
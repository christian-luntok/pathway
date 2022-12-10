import SectionContent from "@components/Section/SectionContent"
import SectionImage from "@components/Section/SectionImage"

const Hero = () => {

    return (
        <section className="hero-container">
            <SectionContent 
                title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                content = "Fusce ac nulla non urna posuere malesuada eget id ipsum. Praesent vitae sem nisl. Donec in est ut odio sagittis dapibus in commodo mi."
                subheading = "Sub Heading"
                alignment = "center"
                isBigHeader = {true}
            />
            <SectionImage 
                src="images/Hero.jpg"
                alt="Hero Image used for Hero Banner"
            />
        </section>
    )
}

export default Hero
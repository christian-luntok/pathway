import SectionContent from "@components/Section/SectionContent"
import ButtonGroup from "@components/ButtonGroup"
import SectionImage from "@components/Section/SectionImage"
import BadgeGroup from "@components/BadgeGroup"
import Button, { ButtonVariant } from "@components/Button/Button"
import BadgeContext from "@components/Badge/BadgeContext"
import BadgeMessage from "@components/Badge/BadgeMessage"
import BadgeIcon from "@components/Badge/BadgeIcon"
const Hero = () => {
    const alignment = "center"

    return (
        <section className="hero-container">
            <div className="hero-content-container py-16 ">
                <BadgeGroup alignment={alignment}>
                    <BadgeContext>
                        <span>V1.0.0</span>
                    </BadgeContext>
                    <BadgeMessage>
                        Welcome to Pathway!
                    </BadgeMessage>
                    <BadgeIcon icon="eos-icons:templates"/>
                </BadgeGroup>
                <SectionContent 
                    title = "An awesome landing page template optimized for you get those clicks into sales!"
                    alignment = {alignment}
                    isBigHeader = {true}
                >
                    <p>Fusce ac nulla non urna posuere malesuada eget id ipsum. Praesent vitae sem nisl. Donec in est ut odio sagittis dapibus in commodo mi.</p>
                </SectionContent>
                <ButtonGroup className = "wrap-sm wrap-px" alignment={alignment}>
                    <Button 
                        text="Get Started" 
                        link="/about"
                        icon="ph:arrow-right-bold"
                        variant={ButtonVariant.primary}
                    />
                    <Button 
                        text="Contact Us" 
                        link="/contact"
                        variant={ButtonVariant.secondary}
                    />
                </ButtonGroup>
            </div>
            <SectionImage 
                src="/images/Hero.jpg"
                alt="Hero Image used for Hero Banner"
            />
        </section>
    )
}

export default Hero
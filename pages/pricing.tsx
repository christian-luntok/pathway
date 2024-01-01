import SEO from '@components/SEO'
import SectionContent from '@components/Section/SectionContent'
import SectionImage from '@components/Section/SectionImage'
import Logos from "@components/Logos"
import ButtonGroup from '@components/ButtonGroup'
import Button, {ButtonVariant} from '@components/Button/Button'

const Pricing = () => {
    const pageTitle = `Pricing | ${process.env.siteTitle} | Pathway`
    return (
        <div className="main-content-container wrap">
            <SEO 
                title={pageTitle}
                description="Welcome to our website! We offer a wide range of products and services designed to help you achieve your goals. Whether you're looking for information, support, or simply want to learn more, we're here to help. Explore our site to find out more."
            />
            <div className="content-container my-6 sm:my-24">
                <SectionContent title = "Pricing" alignment = "left">
                    <p>Fusce ac nulla non urna posuere malesuada eget id ipsum. Praesent vitae sem nisl. Donec in est ut odio sagittis dapibus in commodo mi.</p>
                </SectionContent>
                <ButtonGroup className = "wrap-sm wrap-px" alignment="left">
                    <Button text="See Prices" link="/pricing" icon="ph:arrow-right-bold" variant={ButtonVariant.primary}/>
                </ButtonGroup>
            </div>
            <SectionImage 
                className="my-24"
                src="/images/Hero5.jpg"
                alt="Pricing Page Hero"
            />
            <Logos />
        </div>
    )
}

export default Pricing
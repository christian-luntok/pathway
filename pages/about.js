import SEO from '@components/SEO'
import SectionContent from '@components/Section/SectionContent'
import SectionImage from '@components/Section/SectionImage'
import SectionHighlight from '@components/Section/SectionHighlight'
import Logos from "@components/Logos"

const About = () => {
    const pageTitle = `About | ${process.env.siteTitle} | Pathway`
    return (
        <div className="main-content-container wrap">
            <SEO 
                title={pageTitle}
                description="Welcome to our website! We offer a wide range of products and services designed to help you achieve your goals. Whether you're looking for information, support, or simply want to learn more, we're here to help. Explore our site to find out more."
            />
            <SectionContent 
                title = "About"
                content = "Fusce ac nulla non urna posuere malesuada eget id ipsum. Praesent vitae sem nisl. Donec in est ut odio sagittis dapibus in commodo mi."
                alignment = "left"
                hasBlockPadding = {true}
            />
            <SectionImage 
                src="/images/Hero6.jpg"
                alt="About Page Hero"
            />
            <SectionContent 
                content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus lorem, accumsan ac metus sed, ullamcorper convallis sem. Sed auctor est tellus, non placerat purus euismod eget. Nulla placerat consequat sagittis. Sed congue ante at vehicula viverra. Cras quis aliquet purus. Mauris fermentum ultrices nunc, vitae scelerisque orci faucibus ac. Maecenas tincidunt tincidunt dolor, eu hendrerit nulla pharetra at. Donec vel condimentum magna."
                alignment = "left"
                hasBlockPadding = {true}
            />
            <SectionHighlight 
                title="Lorem ipsum dolor sit"
                content="Fusce ac nulla non urna posuere malesuada eget id ipsum. Praesent vitae sem nisl. Donec in est ut odio sagittis dapibus in commodo mi. Mauris fermentum ultrices nunc, vitae scelerisque orci faucibus ac. Maecenas tincidunt tincidunt dolor, eu hendrerit nulla pharetra at."
                image="/images/highlight-2.jpg"
                imageAlt="Lorem ipsum dolor sit"
            />
            <Logos
            />
        </div>
    )
}

export default About
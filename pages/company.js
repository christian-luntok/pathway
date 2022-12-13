import SEO from '@components/SEO'
import SectionContent from '@components/Section/SectionContent'
import SectionImage from '@components/Section/SectionImage'
import SectionHighlight from '@components/Section/SectionHighlight'
import Logos from "@components/Logos"
import CTA from "@components/CallToAction"

const Company = () => {
    const pageTitle = `Company | ${process.env.siteTitle} | Pathway`
    return (
        <div className="main-content-container wrap">
            <SEO 
                title={pageTitle}
                description="Welcome to our website! We offer a wide range of products and services designed to help you achieve your goals. Whether you're looking for information, support, or simply want to learn more, we're here to help. Explore our site to find out more."
            />
            <SectionContent 
                title = "Company"
                content = "Fusce ac nulla non urna posuere malesuada eget id ipsum. Praesent vitae sem nisl. Donec in est ut odio sagittis dapibus in commodo mi."
                alignment = "left"
                hasBlockPadding = {true}
            />
            <SectionImage 
                src="/images/Hero4.jpg"
                alt="Company Page Hero"
            />
            <SectionContent 
                title = "Lorem Ipsum Dolor"
                content = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
                alignment = "center"
                hasBlockPadding = {true}
                subheading = '“There are no secrets to success. It is the result of preparation, hard work, and learning from failure.”'
            />
            <SectionHighlight 
                title="Lorem ipsum dolor sit"
                content="Fusce ac nulla non urna posuere malesuada eget id ipsum. Praesent vitae sem nisl. Donec in est ut odio sagittis dapibus in commodo mi. Mauris fermentum ultrices nunc, vitae scelerisque orci faucibus ac. Maecenas tincidunt tincidunt dolor, eu hendrerit nulla pharetra at."
                image="/images/Hero2.jpg"
                imageAlt="Lorem ipsum dolor sit"
                isReversed={true}
            />
            <SectionHighlight 
                title="Lorem ipsum dolor sit"
                content="Fusce ac nulla non urna posuere malesuada eget id ipsum. Praesent vitae sem nisl. Donec in est ut odio sagittis dapibus in commodo mi. Mauris fermentum ultrices nunc, vitae scelerisque orci faucibus ac. Maecenas tincidunt tincidunt dolor, eu hendrerit nulla pharetra at."
                image="/images/highlight-2.jpg"
                imageAlt="Lorem ipsum dolor sit"
            />
            <SectionImage 
                classes="my-24"
                src="/images/Hero5.jpg"
                alt="Company Page Hero"
            />
            <SectionHighlight 
                title="Lorem ipsum dolor sit"
                content="Fusce ac nulla non urna posuere malesuada eget id ipsum. Praesent vitae sem nisl. Donec in est ut odio sagittis dapibus in commodo mi. Mauris fermentum ultrices nunc, vitae scelerisque orci faucibus ac. Maecenas tincidunt tincidunt dolor, eu hendrerit nulla pharetra at."
                image="/images/highlight-3.jpg"
                imageAlt="Lorem ipsum dolor sit"
                isReversed={true}
            />
            <Logos
            />
        </div>
    )
}

export default Company
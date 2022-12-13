import SEO from '@components/SEO'
import SectionContent from '@components/Section/SectionContent'
import SectionImage from '@components/Section/SectionImage'
import SectionHighlight from '@components/Section/SectionHighlight'
import Logos from "@components/Logos"
import CTA from "@components/CallToAction"

const UseCases = () => {
    const pageTitle = `Use Cases | ${process.env.siteTitle} | Pathway`
    return (
        <div className="main-content-container wrap">
            <SEO 
                title={pageTitle}
            />
            <SectionContent 
                title = "Use Cases"
                content = "Fusce ac nulla non urna posuere malesuada eget id ipsum. Praesent vitae sem nisl. Donec in est ut odio sagittis dapibus in commodo mi."
                alignment = "left"
                hasBlockPadding = {true}
            />
            <SectionImage 
                classes="my-24"
                src="/images/Hero3.jpg"
                alt="Use Cases Page Hero"
            />
            <SectionHighlight 
                title="Lorem ipsum dolor sit"
                content="Fusce ac nulla non urna posuere malesuada eget id ipsum. Praesent vitae sem nisl. Donec in est ut odio sagittis dapibus in commodo mi. Mauris fermentum ultrices nunc, vitae scelerisque orci faucibus ac. Maecenas tincidunt tincidunt dolor, eu hendrerit nulla pharetra at."
                image="/images/Hero5.jpg"
                imageAlt="Lorem ipsum dolor sit"
                isReversed={true}
            />
            <SectionHighlight 
                title="Lorem ipsum dolor sit"
                content="Fusce ac nulla non urna posuere malesuada eget id ipsum. Praesent vitae sem nisl. Donec in est ut odio sagittis dapibus in commodo mi. Mauris fermentum ultrices nunc, vitae scelerisque orci faucibus ac. Maecenas tincidunt tincidunt dolor, eu hendrerit nulla pharetra at."
                image="/images/highlight-2.jpg"
                imageAlt="Lorem ipsum dolor sit"
            />
            <SectionHighlight 
                title="Lorem ipsum dolor sit"
                content="Fusce ac nulla non urna posuere malesuada eget id ipsum. Praesent vitae sem nisl. Donec in est ut odio sagittis dapibus in commodo mi. Mauris fermentum ultrices nunc, vitae scelerisque orci faucibus ac. Maecenas tincidunt tincidunt dolor, eu hendrerit nulla pharetra at."
                image="/images/highlight-3.jpg"
                imageAlt="Lorem ipsum dolor sit"
                isReversed={true}
            />
            <CTA />
            <Logos
            />
        </div>
    )
}

export default UseCases
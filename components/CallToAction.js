import SectionContent from '@components/Section/SectionContent'
import SubscribeForm from '@components/Forms/SubscribeForm'

const CallToAction = () => {

    return (
        <section className="cta-container">
            <div className="cta-content-container wrap wrap-px my-24">
                <SectionContent 
                    title = "Lorem 1,000+ Ipsum Title"
                    content = "Duis malesuada faucibus est. Ut pulvinar gravida sapien sed efficitur."
                    alignment = "center"
                />
                <SubscribeForm
                    alignment = "center"
                />
            </div>
        </section>
    )
}

export default CallToAction
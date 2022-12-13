import SectionContent from '@components/Section/SectionContent'
import SubscribeForm from '@components/Forms/SubscribeForm'

const CallToAction = () => {

    return (
        <section className="cta-container  my-24">
            <div className="cta-content-container wrap wrap-px">
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
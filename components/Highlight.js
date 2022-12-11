import SectionContent from "@components/Section/SectionContent"
import ButtonGroup from "@components/ButtonGroup"
import SectionHighlight from "@components/Section/SectionHighlight"
const DATA = [
    {
      title: 'Highlight #1',
      content: `Ipsum qui exercitation excepteur qui sint consectetur officia quis ex. 
      Amet adipisicing do aute ad tempor ut sit occaecat deserunt esse velit enim anim id. 
      Aliquip cillum eiulgod irure cillum est sunt laboris tempor consequat elit ullamco. 
      Ipsum dolor culpa dolor ea.`,
      image: 'images/highlight-1.jpeg',
      imageAltTag: 'highlight-1',
      icon: '',
      link: '',
      reversed: false
    },
    {
      title: 'Higlight #2',
      content: `Ipsum qui exercitation excepteur qui sint consectetur officia quis ex. 
      Amet adipisicing do aute ad tempor ut sit occaecat deserunt esse velit enim anim id. 
      Aliquip cillum eiulgod irure cillum est sunt laboris tempor consequat elit ullamco. 
      Ipsum dolor culpa dolor ea.`,
      image: 'images/highlight-2.jpeg',
      imageAltTag: 'highlight-2',
      icon: '',
      link: '',
      reversed: true
    },
    {
      title: 'Highlight #3',
      content: `Ipsum qui exercitation excepteur qui sint consectetur officia quis ex. 
      Amet adipisicing do aute ad tempor ut sit occaecat deserunt esse velit enim anim id. 
      Aliquip cillum eiulgod irure cillum est sunt laboris tempor consequat elit ullamco. 
      Ipsum dolor culpa dolor ea.`,
      image: 'images/highlight-3.jpeg',
      imageAltTag: 'highlight-3',
      icon: '',
      link: '',
      reversed: false
    }
  ]

const Highlight = () => {
    const alignment = "left"
    return (
        <section className="highlight-container">
            <div className="highlight-content py-16">
                <SectionContent 
                    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    subheading = "Subheading"
                    content = "Fusce ac nulla non urna posuere malesuada eget id ipsum. Praesent vitae sem nisl. Donec in est ut odio sagittis dapibus in commodo mi."
                    alignment = {alignment}
                    isBigHeader = {false}
                />
                <ButtonGroup 
                    wrap = "wrap wrap-px"
                    hasPrimary = {true}
                    primaryText = "About"
                    primaryLink = "/about"
                    primaryIcon = "ph:arrow-right-bold"
                    hasSecondary = {true}
                    secondaryText = "Company"
                    secondaryLink = "/company"
                    alignment={alignment}
                />
            </div>
            <div className="highlight-image-container">
                <SectionHighlight />
            </div>
        </section>
    )
}

export default Highlight
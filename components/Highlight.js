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
      image: '/images/highlight-1.jpg',
      imageAltTag: 'highlight-1',
      icon: 'ph:lightning',
      link: '/pricing',
      linkTitle: 'Pricing',
      reversed: false
    },
    {
      title: 'Higlight #2',
      content: `Ipsum qui exercitation excepteur qui sint consectetur officia quis ex. 
      Amet adipisicing do aute ad tempor ut sit occaecat deserunt esse velit enim anim id. 
      Aliquip cillum eiulgod irure cillum est sunt laboris tempor consequat elit ullamco. 
      Ipsum dolor culpa dolor ea.`,
      image: '/images/highlight-2.jpg',
      imageAltTag: 'highlight-2',
      icon: 'lucide:mouse-pointer',
      link: '/get-started',
      linkTitle: 'Get Started',
      reversed: true
    },
    {
      title: 'Highlight #3',
      content: `Ipsum qui exercitation excepteur qui sint consectetur officia quis ex. 
      Amet adipisicing do aute ad tempor ut sit occaecat deserunt esse velit enim anim id. 
      Aliquip cillum eiulgod irure cillum est sunt laboris tempor consequat elit ullamco. 
      Ipsum dolor culpa dolor ea.`,
      image: '/images/highlight-3.jpg',
      imageAltTag: 'highlight-3',
      icon: 'ph:lightning',
      link: '/about',
      linkTitle: 'Learn More',
      reversed: false
    }
  ]

const Highlight = () => {
    const alignment = "left"
    return (
        <section className="highlight-container my-24">
            <div className="highlight-content mb-16">
                <SectionContent 
                    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    subheading = "Subheading"
                    alignment = {alignment}
                    isBigHeader = {false}
                >
                  <p>Ipsum qui exercitation excepteur qui sint consectetur officia quis ex. </p>
                  <p>Fusce ac nulla non urna posuere malesuada eget id ipsum. Praesent vitae sem nisl. Donec in est ut odio sagittis dapibus in commodo mi.</p>
                </SectionContent>
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
                {
                  DATA.map( (item, index)=> (
                    <SectionHighlight 
                        key = { index }
                        title = { item.title }
                        content = { item.content }
                        image = { item.image }
                        imageAlt = { item.imageAltTag }
                        linkTitle = { item.linkTitle }
                        link = { item.link }
                        icon = { item.icon }
                        isReversed = { item.reversed }
                    />
                  ))
                }
            </div>
        </section>
    )
}

export default Highlight
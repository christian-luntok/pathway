import FeatureContent from "@components/Feature/FeatureContent"

const DATA = [
    {
      title: 'Feature #1',
      content: `Duis malesuada faucibus est. Ut pulvinar gravida sapien sed efficitur.`,
      icon: 'ph:lightning',
      link: '/pricing',
      linkTitle: 'Pricing'
    },
    {
      title: 'Feature #2',
      content: `Duis malesuada faucibus est. Ut pulvinar gravida sapien sed efficitur.`,
      icon: 'lucide:mouse-pointer',
      link: '/get-started',
      linkTitle: 'Get Started'
    },
    {
      title: 'Feature #3',
      content: `Duis malesuada faucibus est. Ut pulvinar gravida sapien sed efficitur.`,
      icon: 'ph:lightning',
      link: '/about',
      linkTitle: 'Learn More'
    }
  ]

const Feature = () => {
    return (
        <section className="feature-container py-24 bg-badge">
            <div className="feature-content wrap wrap-px">
                <div className="feature-content-container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 gap-8">
                        {
                            DATA.map( item => (
                                <FeatureContent 
                                    key={item.key}
                                    title={item.title}
                                    content={item.content}
                                    link={item.link}
                                    linkTitle={item.linkTitle}
                                    icon={item.icon}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature
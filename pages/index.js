import Hero from "@components/Hero"
import Highlight from "@components/Highlight"
import Feature from "@components/Feature"
import CTA from "@components/CallToAction"
import Logos from "@components/Logos"
import SEO from '@components/SEO'


const Home = () => {
  const pageTitle = `Pathway | ${process.env.siteTitle} | A NextJS Landing Page`
  return (
    <div className="main-content-container">
        <SEO 
          title={pageTitle}
        />
        <Hero />
        <Highlight />
        <Feature />
        <CTA />
        <Logos />
    </div>
  )
}

export default Home
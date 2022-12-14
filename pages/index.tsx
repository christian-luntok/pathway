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
          description="Welcome to our website! We offer a wide range of products and services designed to help you achieve your goals. Whether you're looking for information, support, or simply want to learn more, we're here to help. Explore our site to find out more."
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
import Hero from "@components/Hero"
import Highlight from "@components/Highlight"
import Feature from "@components/Feature"
import CTA from "@components/CallToAction"

const Home = () => {
  return (
    <div className="main-content-container">
        <Hero />
        <Highlight />
        <Feature />
        <CTA />
    </div>
  )
}

export default Home
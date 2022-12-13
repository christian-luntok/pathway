import Hero from "@components/Hero"
import Highlight from "@components/Highlight"
import Feature from "@components/Feature"
import CTA from "@components/CallToAction"
import Logos from "@components/Logos"

const Home = () => {
  return (
    <div className="main-content-container">
        <Hero />
        <Highlight />
        <Feature />
        <CTA />
        <Logos />
    </div>
  )
}

export default Home
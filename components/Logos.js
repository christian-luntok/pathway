import LogoItems from "@components/Logos/LogoItems"

const DATA = [
    {
        title: "slack",
        logo: "/images/logos/logo1.svg",
    },
    {
        title: "stripe",
        logo: "/images/logos/logo2.svg",
    },
    {
        title: "google",
        logo: "/images/logos/logo3.svg",
    },
    {
        title: "netflix",
        logo: "/images/logos/logo4.svg",
    },
    {
        title: "nextJS",
        logo: "/images/logos/logo5.svg",
    },
    {
        title: "adobe",
        logo: "/images/logos/logo6.svg",
    },
    {
        title: "disney",
        logo: "/images/logos/logo7.svg",
    },
    {
        title: "microsoft",
        logo: "/images/logos/logo8.svg",
    }
    
]
const Logos = () => {
    return (
        <section className="logos-container wrap wrap-px">
            <div className="logos-content-container p-8 md:p-16 rounded-2xl my-24 bg-badge gap-y-8">
                <div className="content-container text-black/60 text-center">
                    <p>Trusted and used by over 624 companies.</p>
                </div>
                <LogoItems logos={DATA} />
            </div>
        </section>
    )
}

export default Logos
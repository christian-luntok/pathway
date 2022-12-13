import LogoItems from "@components/Logos/LogoItems"

const DATA = [
    {
        logo: "/images/logos/logo1.svg",
    },
    {
        logo: "/images/logos/logo2.svg",
    },
    {
        logo: "/images/logos/logo3.svg",
    },
    {
        logo: "/images/logos/logo4.svg",
    },
    {
        logo: "/images/logos/logo5.svg",
    },
    {
        logo: "/images/logos/logo6.svg",
    },
    {
        logo: "/images/logos/logo7.svg",
    },
    {
        logo: "/images/logos/logo8.svg",
    }
    
]
const Logos = () => {
    return (
        <section className="logos-container wrap wrap-px">
            <div className="logos-content-container p-8 md:p-16 rounded-2xl  bg-badge gap-y-8">
                <div className="content-container text-black/60 text-center">
                    <p>Trusted and used by over 624 companies.</p>
                </div>
                <LogoItems logos={DATA} />
            </div>
        </section>
    )
}

export default Logos
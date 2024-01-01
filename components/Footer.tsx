import Link from "next/link"

const DATA = [
    { 
        label: 'Home', 
        href: '/' 
    },
    { 
        label: 'Use Cases', 
        href: '/use-cases' 
    },
    { 
        label: 'About', 
        href: '/about' 
    },
    { 
        label: 'Company', 
        href: '/company' 
    },
    { 
        label: 'Pricing', 
        href: '/pricing' 
    },
    { 
        label: 'Projects', 
        href: '#',
        isNew: true
    },
    {
        label: 'Email',
        href: 'mailto:hey@pathway.com'
    },
    {
        label: 'Instagram',
        href: 'https://github.com/christian-luntok/pathway'
    },
    {
        label: 'Twitter',
        href: 'https://github.com/christian-luntok/pathway'
    }
]


const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer id="footer">
            <section className="footer-container wrap wrap-px">
                <div className="footer-content-container my-16 md:my-24">
                    <div className="footer-links grid grid-cols-2 gap-8 md:grid-cols-8 lg:grid-cols-12 mb-12 md:mb-16">
                        <div className="col-span-1 md:col-span-2">
                            <ul>
                            {DATA.slice(0, DATA.length / 2).map( item => (
                                    <li key={item.label} className="gap-2">
                                        <a className="font-medium block w-auto mb-2 hover:text-primary-500 transition-colors duration-300" href={item.href}>
                                            {item.label}
                                            {
                                                item.isNew && (
                                                    <span className="text-badgeText text-sm font-medium inline-block ml-2 bg-badge px-2 rounded-2xl">New</span>
                                                )
                                            }
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <ul>
                            {DATA.slice(DATA.length / 2).map( item => (
                                    <li key={item.label} className="gap-2">
                                        <a className="font-medium block w-auto mb-2 hover:text-primary-500 transition-colors duration-300" href={item.href}>
                                            {item.label}
                                            {
                                                item.isNew && (
                                                    <span className="text-badgeText text-sm inline-block ml-2 bg-badge px-2 rounded-2xl">New</span>
                                                )
                                            }
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="footer-credits text-black/60">
                        <p>© 2022 - {year} - Pathway. All rights reserved. <span className="font-semibold">Pathway by <Link className="hover:text-primary-500 transition-colors duration-300" href="https://chrstnl.com" target="_blank">chrstnl.</Link></span></p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer

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
        href: '/projects',
        isNew: true
    },
    {
        label: 'Email',
        href: 'mailto:hey@cjluntok.com'
    },
    {
        label: 'Instagram',
        href: 'instagram.com'
    },
    {
        label: 'Twitter',
        href: 'twitter.com'
    }
]


const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer id="footer">
            <section className="footer-container wrap wrap-px">
                <div className="footer-content-container py-24">
                    <div className="footer-links grid grid-cols-1 gap-8 md:grid-cols-12 mb-16">
                        <div className="col-span-2">
                            <ul>
                            {DATA.slice(0, DATA.length / 2).map(({ label, href, isNew }) => (
                                    <li className="gap-2">
                                        <a className="block w-auto mb-2 hover:text-primary-500 transition-all duration-300" href={href}>
                                            {label}
                                            {
                                                isNew ? (
                                                    <span className="text-[#475569] text-sm font-medium inline-block ml-2 bg-badge px-2 rounded-2xl">New</span>
                                                ) : null
                                            }
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-2">
                            <ul>
                            {DATA.slice(DATA.length / 2).map(({ label, href, isNew }) => (
                                    <li  className="gap-2">
                                        <a className="block w-auto mb-2 hover:text-primary-500 transition-all duration-300" href={href}>
                                            {label}
                                            {
                                                isNew ? (
                                                    <span className="text-[#475569] text-sm font-medium inline-block ml-2 bg-badge px-2 rounded-2xl">New</span>
                                                ) : null
                                            }
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="footer-credits text-black/60">
                        <p>© {year}. All rights reserved. <span className="font-semibold">Pathway by <Link className="hover:text-primary-500 transition-all duration-300" href="cjluntok.com" target="_blank">cjluntok.com</Link></span></p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer

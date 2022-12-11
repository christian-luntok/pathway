

const SectionTitle = ({title, subheading, isBigHeader}) => {
    return (
        <section className="section-title-container">
            {
                subheading?.length ? (<span className="block subheading mb-6">{ subheading }</span>) : null 
            }
            <h2 className={` font-semibold h2 md:section-title ${isBigHeader ? 'h2 md:h1' : null}`}>{title}</h2>
        </section>
    )
}

export default SectionTitle
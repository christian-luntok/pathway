

const SectionTitle = ({title, subheading, isBigHeader}) => {
    return (
        <section className="section-title-container">
            <span className="block subheading">{ subheading }</span>
            <h2 className={` font-semibold ${isBigHeader ? 'h1' : null}`}>{title}</h2>
        </section>
    )
}

export default SectionTitle
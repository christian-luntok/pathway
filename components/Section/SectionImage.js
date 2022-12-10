
const SectionImage = ({src, alt}) => {

    return (
        <section className="section-image image-container image-container__full">
            <figure className="w-full">
                <img 
                    src={src}
                    alt={alt}
                    height="640"
                    width="1440"
                />
            </figure>
        </section>
    )
}

export default SectionImage
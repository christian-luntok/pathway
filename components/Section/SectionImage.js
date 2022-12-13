import Image from "next/image"

const SectionImage = ({src, alt, classes}) => {

    return (
        <section className={`section-image image-container image-container__full ${classes ? classes : ''}`}>
            <figure className="w-full">
                <Image 
                    priority
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
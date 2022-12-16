import Image from "next/image"

type SectionImageProps = {
    src?: string
    alt?: string
    className?: string
}
const SectionImage = ({src, alt, className }:SectionImageProps) => {
    return (
        <section className={`section-image image-container image-container__full ${className && className }`}>
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
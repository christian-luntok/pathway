type ButtonGroupProps = {
    className?: string
    hasPrimary?: boolean
    hasSecondary?: boolean
    alignment?: string
}

const ButtonGroup = ({className, alignment, children}: any) => {
    const alignClass = alignment === 'center' 
        ? 'justify-center m-auto' : alignment === 'left' 
        ? 'justify-start mr-auto' : alignment === 'right' 
        ? 'justify-end ml-auto' : null;
    return ( 
        <div className="button-container">
            <div className={`buttons ${className && className} gap-4 mt-6 flex flex-wrap ${ alignClass && alignClass}`}>
                { children }
            </div>
        </div>
    )
}

export default ButtonGroup

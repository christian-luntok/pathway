type ButtonGroupProps = {
    className?: string
    alignment?: string
    children: React.ReactNode
}

const ButtonGroup = ({className, alignment, children}: ButtonGroupProps) => {
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

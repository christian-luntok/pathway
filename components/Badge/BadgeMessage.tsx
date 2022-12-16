
type BadgeMessageProps = {
    children?: React.ReactNode
}

const BadgeMessage = ({children}:BadgeMessageProps) => {
    return(
        <div className="message">
            {children}
        </div>
    )
}

export default BadgeMessage
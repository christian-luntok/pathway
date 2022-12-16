
type BadgeContentProps = {
    children?: React.ReactNode
}

const BadgeContent = ({children}:BadgeContentProps) => {
    return(
        <div className="context px-2 py-[2px] bg-white rounded-full">
            {children}
        </div>
    )
}

export default BadgeContent
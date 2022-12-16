
type LogoContainerProps = {
    children: React.ReactNode
}
const LogoContainer = ({children}:LogoContainerProps) => {
    return (
        <div className="logos-container flex flex-wrap md:grid align-center justify-center gap-y-6 gap-x-8 md:gap-x-14 md:grid-cols-4 xl:grid-cols-8">
            {children}
        </div>
    )
}

export default LogoContainer
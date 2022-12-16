import { Icon } from "@iconify/react"

type BadgeIconProps = {
    icon?: string

}

const BadgeIcon = ({icon}:BadgeIconProps) => {

    return (
        <div className="icon py-2 pr-2">
            <Icon icon={icon} className=" w-4 "/>
        </div>
    )
}

export default BadgeIcon
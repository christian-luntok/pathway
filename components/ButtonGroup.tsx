import PrimaryButton from '@components/Button/Button'

/** 
 * Button Group Component
 * @params wrap for additional inner wrappers
 * @params hasPrimary - if you want a primary button added - add true
 * If @params hasPrimary is true, make sure everything within the primary props (@params primaryText, @params primaryLink) has value except icons, icons are optional.
 *
 * Same thing with secondary button options.
 * 
 * @params alignment - lets you choose to align your button group to [left, right, center]
 * 
 * <ButtonGroup 
        wrap = "wrap-sm wrap-px" - 
        hasPrimary = {true} - 
        primaryText = "About" - 
        primaryLink = "/about"
        primaryIcon = "ph:arrow-right-bold"
        hasSecondary = {true}
        secondaryText = "Company"
        secondaryLink = "/company"
        alignment="left"
    />
 */

// own dataset something like that - yeah your own type as in it has to be one of the strings in the enum?

// so you are creating your own type i guess

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

// Yeah why not xD
// How would you do it -

// this is a weird component ngl but i respect it
//  i feel you could approach it a little differently
// if you need a button group
// button group should be a container / wrapper for buttons

// Isn't that what this is? Nah I'm calling the buttons-
// No unless im confused. This you have the buttons hardcoded.

// i.e <ButtonGroup><PrimaryButton/></ButtonGroup>

// Then that's just making a container for buttons

// I can button group if I want to have buttons xD

// Yes, what else does this do?
// Look at hero component


// const ButtonGroup = ({wrap, alignment, hasPrimary, hasSecondary, primaryText, primaryLink, primaryIcon, primaryType, secondaryText, secondaryLink, secondaryIcon, secondaryType}:ButtonGroupProps) => {
//     const alignClass = alignment === 'center' 
//         ? 'justify-center m-auto' : alignment === 'left' 
//         ? 'justify-start mr-auto' : alignment === 'right' 
//         ? 'justify-end ml-auto' : null;
//     return ( 
//         <div className="button-container">
//             <div className={`buttons ${wrap} gap-4 mt-6 flex flex-wrap ${ alignClass && alignClass}`}>
//                 {
//                     hasPrimary && (
//                         <PrimaryButton 
//                             text={ primaryText && primaryText }
//                             link={ primaryLink && primaryLink }
//                             icon={ primaryIcon && primaryIcon }
//                             type={ primaryType && primaryType }
//                         />
//                     )
//                 }
//                 {
//                     hasSecondary && (
//                         <SecondaryButton 
//                             text={ secondaryText && secondaryText }
//                             link={ secondaryLink && secondaryLink }
//                             icon={ secondaryIcon && secondaryIcon }
//                             type={ secondaryType && secondaryType }
//                         />
//                     )
//                 }
//             </div>
//         </div>
//     )
// }




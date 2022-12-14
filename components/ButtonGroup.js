import PrimaryButton from '@components/Button/PrimaryButton'
import SecondaryButton from '@components/Button/SecondaryButton'

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

const ButtonGroup = ({wrap, alignment, hasPrimary, hasSecondary, primaryText, primaryLink, primaryIcon, primaryType, secondaryText, secondaryLink, secondaryIcon, secondaryType}) => {
    const alignClass = alignment === 'center' 
        ? 'justify-center m-auto' : alignment === 'left' 
        ? 'justify-start mr-auto' : alignment === 'right' 
        ? 'justify-end ml-auto' : null;
    return ( 
        <div className="button-container">
            <div className={`buttons ${wrap} gap-4 mt-6 flex flex-wrap ${ alignClass && alignClass}`}>
                {
                    hasPrimary && (
                        <PrimaryButton 
                            text={ primaryText ? primaryText : '' }
                            link={ primaryLink ? primaryLink : '' }
                            icon={ primaryIcon ? primaryIcon : '' }
                            type={ primaryType ? primaryType : '' }
                        />
                    )
                }
                
                {
                    hasSecondary && (
                        <SecondaryButton 
                            text={ secondaryText ? secondaryText : '' }
                            link={ secondaryLink ? secondaryLink : '' }
                            icon={ secondaryIcon ? secondaryIcon : '' }
                            type={ secondaryType ? secondaryType : '' }
                        />
                    )
                }
            </div>
        </div>
    )
}

export default ButtonGroup
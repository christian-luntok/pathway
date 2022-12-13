import { useState } from 'react'
import { Icon } from '@iconify/react'
import PrimaryButton from '@components/Button/PrimaryButton'

const SubscribeForm = ({alignment}) => {
    const [email, setEmail] = useState('johndoe@email.com')
    const alignClass = alignment === 'center' 
    ? 'md:text-center md:justify-center m-auto' : alignment === 'left' 
    ? 'md:text-left md:justify-start mr-auto' : alignment === 'right' 
    ? 'md:text-right md:justify-end ml-auto' : null;

    function handleSubmit(event) {
        event.preventDefault()
        alert(`${email} submitted the form. You are now added to mailing list.`)
    }

    return(
        <div className="form-container">
            <form className={`flex flex-wrap gap-4 text-center justify-center ${ alignClass ? alignClass : '' }`} onSubmit={handleSubmit}>
                <div className="relative rounded-full md:max-w-[320px] w-full border-2 border-gray-300 text-black/60 py-2 px-4">
                    <input 
                        className="form-input placeholder-black/60 bg-transparent w-full pl-8 focus-visible:border-0 focus-visible:outline-none" 
                        id="email"
                        placeholder="johndoe@email.com"
                        type="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Icon className="h-5 w-5 text-black/60" icon="ic:outline-email"/>
                    </div>
                </div>
                <div className="form-input w-full md:w-auto">
                    <PrimaryButton className="w-full md:w-auto" text="Submit" link="/" type="button"/>
                </div>
            </form>
        </div>
    )
}

export default SubscribeForm
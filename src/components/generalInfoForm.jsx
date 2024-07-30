import Input, { TextArea } from "./input"

const GeneralInfoForm = () => {
    return (
        <fieldset>
            <legend>General Information</legend>
            <div className="form_controls">
                <Input type="text" name="firstName" text="First Name:"/>
                <Input type="text" name="lastName" text="Last Name:"/>
                <Input type="tel" name="phoneNumber" text="Phone Number:"/>
                <Input type="email" name="email" text="Email:"/>
                <TextArea/>
            </div>
        </fieldset>
    )
}
export default GeneralInfoForm
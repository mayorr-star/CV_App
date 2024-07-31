/* eslint-disable react/prop-types */
import Input from "./input";
import Button from "./button";

const EducationalExpForm = ({handleChange, keyId}) => {
    return (
        <fieldset data-key={keyId}>
            <legend>Education</legend>
            <div className="form_controls">
                <Input name="schoolName" text="School Name:" handlechange={handleChange}/>
                <Input name="program" text="Title of Study:" handlechange={handleChange}/>
                <Input name="duration" text="Date of Study:" handlechange={handleChange}/>
            </div>
            <div className="button_container">
                <Button text="Edit"/>
                <Button text="Confirm"/>
            </div>
        </fieldset>
    )
}

export default EducationalExpForm;
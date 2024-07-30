import Input from "./input";
import Button from "./button";

const EducationalExpForm = () => {
    return (
        <fieldset>
            <legend>Education</legend>
            <div className="form_controls">
                <Input name="school" text="School Name:"/>
                <Input name="program" text="Title of Study:"/>
                <Input name="duration" text="Date of Study:"/>
            </div>
            <div className="button_container">
                <Button text="Edit"/>
                <Button text="Confirm"/>
            </div>
        </fieldset>
    )
}

export default EducationalExpForm;
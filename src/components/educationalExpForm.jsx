/* eslint-disable react/prop-types */
import Input from "./input";
import Button from "./button";
import { useState } from "react";
import { validateEducationInfo } from "../modules/validate";

const EducationalExpForm = ({handleChange, keyId, validate}) => {
    const [activeIndex, setActiveIndex] = useState(1)
    return (
        <fieldset data-key={keyId}>
            <legend>Education</legend>
            <div className="form_controls">
                <Input name="schoolName" text="School Name:" handlechange={handleChange} placeholder="e.g University of Ghana" isActive={activeIndex === 1}/>
                <Input name="program" text="Title of Study:" handlechange={handleChange} placeholder="e.g BSc Mechanical Engineering" isActive={activeIndex === 1}/>
                <Input name="duration" text="Date of Study:" handlechange={handleChange} placeholder="Sept, 2019 - Aug, 2023" isActive={activeIndex === 1}/>
            </div>
            <div className="button_container">
            <Button text="Edit" isActive={activeIndex === 0} handleClick={() => setActiveIndex(1)}/>
            <Button text="Confirm" isActive={activeIndex === 1} handleClick={(e) => {
                if(!validateEducationInfo(e)) {
                    validate("educationInfo", false);
                    return
                }
                validate("educationInfo", true);
                setActiveIndex(0)
            }}/>
            </div>
        </fieldset>
    )
}

export default EducationalExpForm;
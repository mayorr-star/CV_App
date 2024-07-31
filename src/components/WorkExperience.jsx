/* eslint-disable react/prop-types */
import Button from "./button";
import Input, { TextArea } from "./input";

const WorkExperienceForm = ({handleChange, keyId}) => {
  return (
    <fieldset data-key={keyId}>
      <legend>Work History</legend>
      <div className="form_controls">
        <Input name="companyName" text="Company Name:" handlechange={handleChange}/>
        <Input name="position" text="Position Title:" handlechange={handleChange}/>
        <TextArea text="Main responsibilites:" id="roles"/>
        <Input name="duration" text="Duration:" handlechange={handleChange}/>
      </div>
      <div className="button_container">
        <Button text="Edit" />
        <Button text="Confirm" />
      </div>
    </fieldset>
  );
};

export default WorkExperienceForm;

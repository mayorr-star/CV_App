import Button from "./button";
import Input, { TextArea } from "./input";

const WorkExperienceForm = () => {
  return (
    <fieldset>
      <legend>Work History</legend>
      <div className="form_controls">
        <Input name="companyName" text="Company Name:" />
        <Input name="postion" text="Position Title:" />
        <TextArea />
        <Input name="duration" text="Duration:" />
      </div>
      <div className="button_container">
        <Button text="Edit" />
        <Button text="Confirm" />
      </div>
    </fieldset>
  );
};

export default WorkExperienceForm;

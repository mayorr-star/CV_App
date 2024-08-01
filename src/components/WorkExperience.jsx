/* eslint-disable react/prop-types */
import Button from "./button";
import Input, { TextArea } from "./input";
import { validateWorkHistoryInfo } from "../modules/validate";
import { useState } from "react";


const WorkExperienceForm = ({handleChange, keyId, validate}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <fieldset data-key={keyId}>
      <legend>Work History</legend>
      <div className="form_controls">
        <Input name="companyName" text="Company Name:" handlechange={handleChange} placeholder="Company Name" isActive={activeIndex === 1}/>
        <Input name="position" text="Position Title:" handlechange={handleChange} placeholder="e.g. Manager" isActive={activeIndex === 1}/>
        <TextArea text="Main responsibilites:" id="roles" placeholder="List your responsibilites here." isActive={activeIndex === 1} handlechange={handleChange}/>
        <Input name="duration" text="Duration:" handlechange={handleChange} placeholder="Sept, 2019 - Jun, 2024" isActive={activeIndex === 1}/>
      </div>
      <div className="button_container">
        <Button text="Edit" isActive={activeIndex === 0} handleClick={() => setActiveIndex(1)}/>
        <Button text="Confirm" isActive={activeIndex === 1} handleClick={(e) => {
          if (!validateWorkHistoryInfo(e)) {
            validate("workInfo", false);
            return;
          }
          validate("workInfo", true);
          setActiveIndex(0);
          }}/>
      </div>
    </fieldset>
  );
};

export default WorkExperienceForm;

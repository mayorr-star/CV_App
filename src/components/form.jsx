/* eslint-disable react/prop-types */
import GeneralInfoForm from "./generalInfoForm";
import EducationalExpForm from "./educationalExpForm";
import WorkExperienceForm from "./WorkExperience";
import Button from "./button";
import { useState } from "react";

const Form = ({
  handleGeneralInfo,
  handleEducationInfo,
  handleWorkInfo,
  generalInfo,
  educationInfo,
  workInfo,
  isSubmitted,
  addEduInfo,
  addWorkInfo,
}) => {
  const [isValid, setIsValid] = useState({
    generalInfo: false,
    educationInfo: false,
    workInfo: false,
  });

  const updateFormValidity = (form, status) => {
    const newObj = { ...isValid, [form]: status };
    setIsValid(newObj);
  };

  const [genInfoToggleState, setGenInfoToggleState] = useState(false);
  let genToggleClassName = genInfoToggleState ? "show" : ""

  const [eduInfoToggleState, setEduInfoToggleState] = useState(false);
  let eduToggleClassName = eduInfoToggleState ? "show" : ""

  const [workInfoToggleState, setWorkInfoToggleState] = useState(false);
  let workToggleClassName = workInfoToggleState ? "show" : ""

  return (
    <form
      action=""
      method=""
      onSubmit={(e) => {
        e.preventDefault();
        if (isValid.generalInfo && isValid.educationInfo && isValid.workInfo) {
          isSubmitted();
        } else {
          alert("Confirm form fields before submitting")
        }
      }}
    >
      <div className="render_btns">
        <Button text="General Information" isActive={true} handleClick={() => setGenInfoToggleState(!genInfoToggleState)} classId="general render_btn"/>
        <Button text="Education Information" isActive={true} handleClick={() => {setEduInfoToggleState(!eduInfoToggleState)}} classId="edu render_btn"/>
        <Button text="Work History" isActive={true} handleClick={() => {setWorkInfoToggleState(!workInfoToggleState)}} classId="work render_btn"/>
      </div>
      {
      <GeneralInfoForm
      handlechange={handleGeneralInfo}
      data={generalInfo}
      validate={updateFormValidity}
      showClass={genToggleClassName}
      />
    }
    <div className={"education_section hide" + " " + eduToggleClassName}>
      {educationInfo.map((info) => {
        return (
          <EducationalExpForm
            key={info.id}
            handleChange={handleEducationInfo}
            keyId={info.id}
            validate={updateFormValidity}
          />
        );
      })}
    </div>
      {
      <Button
      text="Add New Info"
      isActive={true}
      handleClick={addEduInfo}
      classId={"add_new_btn edu hide" + " " + eduToggleClassName}
      />
    }
    <div className={"work_section hide" + " " + workToggleClassName}>
      {workInfo.map((info) => {
        return (
          <WorkExperienceForm
            key={info.id}
            handleChange={handleWorkInfo}
            keyId={info.id}
            validate={updateFormValidity}
          />
        );
      })}
    </div>
      {
      <Button
      text="Add New Info"
      isActive={true}
      handleClick={addWorkInfo}
      classId={"add_new_btn work hide" + " " + workToggleClassName}
      />
    }
      <div className="submit">
        <Button type="submit" text="Submit" isActive={true} />
      </div>
    </form>
  );
};

export default Form;

/* eslint-disable react/prop-types */
import GeneralInfoForm from "./generalInfoForm";
import EducationalExpForm from "./educationalExpForm";
import WorkExperienceForm from "./WorkExperience";
import Button from "./button";
import { useState } from "react";
import toggleForms from "../modules/helper";

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
        <Button text="General Information" isActive={true} handleClick={(e) => toggleForms(e)} classId="general render_btn"/>
        <Button text="Education Information" isActive={true} handleClick={(e) => {
          toggleForms(e)
          const button = document.querySelector(".add_new_btn.edu")
          button.classList.toggle("show")
          }} classId="edu render_btn"/>
        <Button text="Work History" isActive={true} handleClick={(e) => {
          toggleForms(e)
          const button = document.querySelector(".add_new_btn.work")
          button.classList.toggle("show")
          }} classId="work render_btn"/>
      </div>
      {
      <GeneralInfoForm
      handlechange={handleGeneralInfo}
      data={generalInfo}
      validate={updateFormValidity}
      />
    }
    <div className="education_section hide">
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
      classId="add_new_btn edu hide"
      />
    }
    <div className="work_section hide">
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
      classId="add_new_btn work hide"
      />
    }
      <div className="submit">
        <Button type="submit" text="Submit" isActive={true} />
      </div>
    </form>
  );
};

export default Form;

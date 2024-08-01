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
  isSubmitted
}) => {
  const [isValid, setIsValid] = useState({generalInfo: false, 
    educationInfo:false, 
    workInfo:false});

    const updateFormValidity = (form, status) => {
      const newObj = {...isValid, [form]: status}
      setIsValid(newObj);
    } 
  return (
    <form action="" method="" onSubmit={(e) => {
      e.preventDefault();
      if (isValid.generalInfo && isValid.educationInfo && isValid.workInfo) {
        isSubmitted();
      }
    }}>
      <GeneralInfoForm handlechange={handleGeneralInfo} data={generalInfo} validate={updateFormValidity} />
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
      <div className="submit">
        <Button type="submit" text="Submit" isActive={true}/>
      </div>
    </form>
  );
};

export default Form;

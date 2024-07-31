/* eslint-disable react/prop-types */
import GeneralInfoForm from "./generalInfoForm";
import EducationalExpForm from "./educationalExpForm";
import WorkExperienceForm from "./WorkExperience";

const Form = ({ handleGeneralInfo, handleEducationInfo, handleWorkInfo, generalInfo, educationInfo, workInfo}) => {
  
  return (
    <form action="" method="">
      <GeneralInfoForm handlechange={handleGeneralInfo} data={generalInfo}/>
      <EducationalExpForm handleChange={handleEducationInfo} data={educationInfo}/>
      <WorkExperienceForm handleChange={handleWorkInfo} data={workInfo}/>
    </form>
  );
};

export default Form;

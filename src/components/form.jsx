/* eslint-disable react/prop-types */
import GeneralInfoForm from "./generalInfoForm";
import EducationalExpForm from "./educationalExpForm";
import WorkExperienceForm from "./WorkExperience";
import Button from "./button";

const Form = ({
  handleGeneralInfo,
  handleEducationInfo,
  handleWorkInfo,
  generalInfo,
  educationInfo,
  workInfo,
}) => {
  return (
    <form action="" method="">
      <GeneralInfoForm handlechange={handleGeneralInfo} data={generalInfo} />
      {educationInfo.map((info) => {
        return (
          <EducationalExpForm
            key={info.id}
            handleChange={handleEducationInfo}
            keyId={info.id}
          />
        );
      })}
      {workInfo.map((info) => {
        return (
          <WorkExperienceForm
            key={info.id}
            handleChange={handleWorkInfo}
            keyId={info.id}
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

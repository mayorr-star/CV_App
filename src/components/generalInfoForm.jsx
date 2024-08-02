/* eslint-disable react/prop-types */
import Input, { TextArea } from "./input";
import Button from "./button";
import { useState } from "react";
import { validateGeneralInfo } from "../modules/validate";

const GeneralInfoForm = ({ handlechange, data, validate }) => {
  const { firstName, lastName, phoneNumber, email, statement } = data;
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <fieldset>
      <legend>General Information</legend>
      <div className="form_controls">
        <Input
          name="firstName"
          text="First Name:"
          handlechange={handlechange}
          value={firstName}
          placeholder="First Name"
          isActive={activeIndex === 1}
        />
        <Input
          name="lastName"
          text="Last Name:"
          handlechange={handlechange}
          value={lastName}
          placeholder="Last Name"
          isActive={activeIndex === 1}
        />
        <Input
          type="tel"
          name="phoneNumber"
          text="Phone Number:"
          handlechange={handlechange}
          value={phoneNumber}
          isActive={activeIndex === 1}
          placeholder="e.g. 0503672189"
        />
        <Input
          type="email"
          name="email"
          text="Email:"
          handlechange={handlechange}
          value={email}
          isActive={activeIndex === 1}
          placeholder="e.g. sample@gmail.com"
        />
        <TextArea
          text="Professional Statement:"
          id="statement"
          dataId="statement"
          handlechange={handlechange}
          value={statement}
          isActive={activeIndex === 1}
        />
        <div className="button_container">
          <Button text="Edit" isActive={activeIndex === 0} handleClick={() => setActiveIndex(1)}/>
          <Button text="Confirm" isActive={activeIndex === 1} handleClick={(e) => {
            if(!validateGeneralInfo(e)) {
              validate("generalInfo", false);
              return;
            }
            validate("generalInfo", true);
            setActiveIndex(0);
          }}/>
        </div>
      </div>
    </fieldset>
  );
};
export default GeneralInfoForm;

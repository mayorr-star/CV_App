/* eslint-disable react/prop-types */
import Input, { TextArea } from "./input";
import Button from "./button";

const GeneralInfoForm = ({ handlechange, data }) => {
  const { firstName, lastName, phoneNumber, email, statement } = data;

  return (
    <fieldset>
      <legend>General Information</legend>
      <div className="form_controls">
        <Input
          name="firstName"
          text="First Name:"
          handlechange={handlechange}
          value={firstName}
        />
        <Input
          name="lastName"
          text="Last Name:"
          handlechange={handlechange}
          value={lastName}
        />
        <Input
          type="tel"
          name="phoneNumber"
          text="Phone Number:"
          handlechange={handlechange}
          value={phoneNumber}
        />
        <Input
          type="email"
          name="email"
          text="Email:"
          handlechange={handlechange}
          value={email}
        />
        <TextArea
          text="Professional Statement:"
          id="statement"
          handlechange={handlechange}
          value={statement}
        />
        <div className="button_container">
          <Button text="Edit" />
          <Button text="Confirm" />
        </div>
      </div>
    </fieldset>
  );
};
export default GeneralInfoForm;

import {v4 as uuidv4} from "uuid";
const data = {
  generalInfo: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    statement: ""
  },
  educationInfo: [
    {
      id: uuidv4(),
      schoolName: "",
      program: "",
      duration: "",
    },
  ],
  workInfo: [
    {
      id: uuidv4(),
      companyName: "",
      position: "",
      duration: "",
      roles: []
    },
  ]
};
export default data;

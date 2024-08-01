import {v4 as uuidv4} from "uuid";
const data = {
  generalInfo: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    statement: "",
  },
  educationInfo: [
    {
      id: uuidv4(),
      schoolName: "1",
      program: "1",
      duration: "1",
    },
    {
      id: uuidv4(),
      schoolName: "2",
      program: "2",
      duration: "2",
    },
  ],
  workInfo: [
    {
      id: uuidv4(),
      companyName: "",
      position: "",
      duration: "",
      roles: [],
    },
  ],
};
export default data;

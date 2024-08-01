import { useState } from "react";
import Form from "./components/form";
import CV from "./components/CV";
import data from "./modules/data";
import { v4 as uuidv4 } from "uuid";
import "./styles/App.css"

function App() {
  const [generalInfo, setGeneralInfo] = useState(data.generalInfo);
  const [educationInfo, setEducationInfo] = useState(data.educationInfo);
  const [workInfo, setWorkInfo] = useState(data.workInfo);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleGeneralInfo = (e) => {
    const newInfo = { ...generalInfo, [e.target.id]: e.target.value };
    setGeneralInfo(newInfo);
  };

  const handleEducationInfo = (e) => {
    const grandParent = e.target.parentNode.parentNode;
    const newInfo = [];
    for (const info of educationInfo) {
      if (grandParent.dataset.key === info.id) {
        info[e.target.id] = e.target.value;
      }
      newInfo.push(info);
    }
    setEducationInfo(newInfo);
  };

  const handleWorkInfo = (e) => {
    const grandParent = e.target.parentNode.parentNode;
    const newInfo = [];
    for (const info of workInfo) {
      if (grandParent.dataset.key === info.id) {
        if (e.target.id === "roles") {
          const rolesData = e.target.value.split("\n");
          info[e.target.id] = rolesData;
        } else {
          info[e.target.id] = e.target.value;
        }
      }
      newInfo.push(info);
    }
    setWorkInfo(newInfo);
  };

  const addNewEducationInfo = () => {
    const newInfo = {
      id: uuidv4(),
      schoolName: "",
      program: "",
      duration: ""
    }
    const updatedInfo = [...educationInfo, newInfo];
    setEducationInfo(updatedInfo)
  }

  const addNewWorkInfo = () => {
    const newInfo = {
      id: uuidv4(),
      companyName: "",
      position: "",
      duration: "",
      roles: []
    }
    const updatedInfo = [...workInfo, newInfo];
    setWorkInfo(updatedInfo);
  }

  return (
    <>
      <header>
        <h1>CV APP</h1>
      </header>
      <main>
        {!isSubmitted ? (
          <div className="content">
            <Form
              handleGeneralInfo={handleGeneralInfo}
              handleEducationInfo={(e) => handleEducationInfo(e)}
              handleWorkInfo={(e) => handleWorkInfo(e)}
              generalInfo={generalInfo}
              educationInfo={educationInfo}
              workInfo={workInfo}
              isSubmitted={() => setIsSubmitted(true)}
              addEduInfo={addNewEducationInfo}
              addWorkInfo={addNewWorkInfo}
            />
            <CV
              generalInfo={generalInfo}
              educationInfo={educationInfo}
              workInfo={workInfo}
            />
          </div>
        ) : (
          <CV
            generalInfo={generalInfo}
            educationInfo={educationInfo}
            workInfo={workInfo}
          />
        )}
      </main>
    </>
  );
}

export default App;

import { useState } from "react";
import Form from "./components/form";
import CV from "./components/CV";
import data from "./components/data";
import "./App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState(data.generalInfo);
  const [educationInfo, setEducationInfo] = useState(data.educationInfo);
  const [workInfo, setWorkInfo] = useState(data.workInfo);

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
      console.log(newInfo)
      newInfo.push(info);
    }
    setWorkInfo(newInfo);
  };

  return (
    <>
      <header>
        <h1>CV APP</h1>
      </header>
      <main>
        <div className="content">
          <Form
            handleGeneralInfo={handleGeneralInfo}
            handleEducationInfo={(e) => handleEducationInfo(e)}
            handleWorkInfo={(e) => handleWorkInfo(e)}
            generalInfo={generalInfo}
            educationInfo={educationInfo}
            workInfo={workInfo}
          />
          <CV
            generalInfo={generalInfo}
            educationInfo={educationInfo}
            workInfo={workInfo}
          />
        </div>
      </main>
    </>
  );
}

export default App;

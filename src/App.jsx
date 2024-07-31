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
    const newInfo = {...generalInfo, [e.target.id]: e.target.value }
    setGeneralInfo(newInfo);
  }

  const handleEducationInfo = (e) => {
    const newInfo = {...educationInfo, [e.target.id]: e.target.value }
    setEducationInfo(newInfo);
  }

  const handleWorkInfo = (e) => {
    const newInfo = {...workInfo, [e.target.id]: e.target.value }
    setWorkInfo(newInfo);
  }

  return (
    <>
      <header>
        <h1>CV APP</h1>
      </header>
      <main>
        <div className="content">
          <Form handleGeneralInfo={handleGeneralInfo}handleEducationInfo={handleEducationInfo} handleWorkInfo={handleWorkInfo} generalInfo={generalInfo} educationInfo={educationInfo} workInfo={workInfo}/>
          <CV generalInfo={generalInfo} educationInfo={educationInfo} workInfo={workInfo}/>
        </div>
      </main>
    </>
  );
}

export default App;

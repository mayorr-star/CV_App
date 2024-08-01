/* eslint-disable react/prop-types */
export default function CV({ generalInfo, educationInfo, workInfo }) {
  return (
    <div className="CV">
      <div className="main_content">
        <header>
          <h2>{generalInfo.firstName + " " + generalInfo.lastName}</h2>
          <hr />
          <h3>PROFESSIONAL SUMMARY</h3>
          <hr />
          <p>{generalInfo.statement}</p>
        </header>
        <section className="work_history">
          <h3>WORK HISTORY</h3>
          <hr />
          <ul>
            {workInfo.map((info) => {
              return (
                <li key={info.id}>
                  <span>{info.position}</span>
                  <span>{info.duration}</span>
                  <span>{info.companyName}</span>
                  <ul>
                    {info.roles.map((role, index) => <li key={index}>{role}</li>)}
                  </ul>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      <div className="aside">
        <section className="contacts">
          <span>{generalInfo.email}</span>
          <span>{generalInfo.phoneNumber}</span>
        </section>
        <section className="education">
          <ul>
            {educationInfo.map((info) => {
              return (
                <li key={info.id}>
                  <div className="education_content">
                    <span>{info.program}</span>
                    <span>{info.duration}</span>
                    <span>{info.schoolName}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}

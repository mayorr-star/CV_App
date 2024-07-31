/* eslint-disable react/prop-types */
export default function CV({generalInfo, educationInfo, workInfo}) {
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
            <span>Position</span>
            <span>Duration</span>
            <span>Company</span>
            <ul>roles</ul>
          </section>
        </div>
        <div className="aside">
          <section className="contacts">
            <span>{generalInfo.email}</span>
            <span>{generalInfo.phoneNumber}</span>
          </section>
          <section className="education">
            <div className="education_content">
              <span>Program</span>
              <span>Duration</span>
              <span>School Name</span>
            </div>
          </section>
        </div>
      </div>
  );
}

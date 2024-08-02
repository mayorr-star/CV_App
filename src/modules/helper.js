const toggleForms = (e) => {
      if (e.target.classList.contains("general")) {
        const general = document.querySelector("fieldset.general");
        general.classList.toggle("show");
      } else if (e.target.classList.contains("edu")) {
        const edu = document.querySelector(".education_section");
        edu.classList.toggle("show");
      } else {
        const work = document.querySelector(".work_section");
        work.classList.toggle("show");
      }
};
export default toggleForms;

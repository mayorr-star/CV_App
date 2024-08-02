const renderBtns = document.querySelectorAll("render_btn");
const toggleForms = () => {
    renderBtns.forEach(button => {
        const formFields = document.querySelectorAll(".hide");
        formFields.forEach(formField => {
            if (button.classList.contains("general") && formField.classList.contains("general")) {
                formField.classList.toggle("show")
            }
        })
        
    })
}
export default toggleForms;
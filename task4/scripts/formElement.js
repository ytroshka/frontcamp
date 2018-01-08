class FormElement {
    constructor(formElement) {
        this.formElement = document.createElement(formElement);
    }

    addParameters(content, className, parent) {
        this.formElement.innerHTML = content;
        this.formElement.classList.add(className);
        parent.appendChild(this.formElement);
    }
}

export default FormElement;
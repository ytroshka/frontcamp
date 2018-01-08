class FormElement {
    constructor(formElement) {
        switch (formElement) {
            case 'button':
                this.formElement = document.createElement('button');
                this.formElement.classList.add('custom');
                break;
            case 'option':
                this.formElement = document.createElement('option');
                this.formElement.dataset.custom = 'data';
                break;
            default:
                this.formElement = document.createElement(formElement);
                break;
        }
    }

    addParameters(content, className, parent) {
        this.formElement.innerHTML = content;
        this.formElement.classList.add(className);
        parent.appendChild(this.formElement);
    }
}

export default FormElement;
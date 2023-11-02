const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.id = 'page-content-contact';

    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';

    const form = document.createElement('form');
    const labelName = document.createElement('label');
    labelName.textContent = 'Your Name';
    labelName.setAttribute('for', 'input-name');
    const inputName = document.createElement('input');
    inputName.id = 'input-name';
    const labelEmail = document.createElement('label');
    labelEmail.textContent = 'Your Email';
    labelEmail.setAttribute('for', 'input-email');
    const inputEmail = document.createElement('input');
    inputEmail.id = 'input-email';
    inputEmail.setAttribute('type', 'email');
    const labelText = document.createElement('label');
    labelText.textContent = 'Leave a Message';
    labelText.setAttribute('for', 'input-text');
    const inputText = document.createElement('textarea');
    inputText.id = 'input-text';
    const formBtn = document.createElement('button');
    formBtn.textContent = 'Send';

    form.appendChild(labelName);
    form.appendChild(inputName);
    form.appendChild(labelEmail);
    form.appendChild(inputEmail);
    form.appendChild(labelText);
    form.appendChild(inputText);
    form.appendChild(formBtn);

    pageContent.appendChild(headline);
    pageContent.appendChild(form);

    content.appendChild(pageContent);
}

export default createContactPage;
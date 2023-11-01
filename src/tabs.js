import createRestaurantHomePage from "./restaurant";
import createMenuPage from "./menu";
import createContactPage from "./contact";
import './style.css';

const createTabs = () => {
    const content = document.querySelector('#content');

    const header = document.createElement('div');
    header.classList.add('header');

    content.appendChild(header);

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');

    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    div1.textContent = 'Home';    
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    header.appendChild(div1);
    header.appendChild(div2);
    header.appendChild(div3);

    div1.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    })
    div2.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    })
    div3.addEventListener('click', () => {
        clearContent();
        createContactPage();
    })
}

function clearContent() {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');
    if (pageContent) {
        content.removeChild(pageContent);
    }
}

export function createTabsExp() {
    return createTabs();
}

export function clearContentExp() {
    return clearContent();
}
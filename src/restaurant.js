import img from './background1.jpg';
import menuIcon from './menu-book.svg';
import { clearContentExp } from './tabs';
import createMenuPage from "./menu";

const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const hero = document.createElement('div');
    hero.classList.add('hero');

    const heroImg = document.createElement('div');
    heroImg.classList.add('hero-img');
    heroImg.style.backgroundImage = `url(${img})`;

    pageContent.appendChild(hero);
    pageContent.appendChild(heroImg);

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to the Dinerydoo';

    const tasty = document.createElement('h3');
    tasty.textContent = 'Super tasty meals';

    const heroBtnIcon = document.createElement('img');
    heroBtnIcon.src = menuIcon;

    const heroBtnText = document.createElement('p');
    heroBtnText.textContent = 'Discover Foods'

    const heroBtn = document.createElement('div');
    heroBtn.appendChild(heroBtnText);
    heroBtn.appendChild(heroBtnIcon);
    heroBtn.classList.add('hero-btn');
    heroBtn.addEventListener('click', () => {
        clearContentExp();
        createMenuPage();
    });

    hero.appendChild(headline);
    hero.appendChild(tasty);
    hero.appendChild(heroBtn);

    content.appendChild(pageContent);
}

export default createRestaurantHomePage;
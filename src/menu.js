import getPrice from './price.js';

const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.id = 'page-content-menu';

    const headline = document.createElement('h1');
    headline.textContent = 'Food Menu';
    pageContent.appendChild(headline);

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
    pageContent.appendChild(menuContent);

    const menuGroup1 = document.createElement('div');
    const menuGroup2 = document.createElement('div');
    const menuGroup3 = document.createElement('div');
    const menuGroup4 = document.createElement('div');

    menuGroup1.classList.add('menu-group');
    menuGroup2.classList.add('menu-group');
    menuGroup3.classList.add('menu-group');
    menuGroup4.classList.add('menu-group');

    const menuHeadline1 = document.createElement('h3');
    const menuHeadline2 = document.createElement('h3');
    const menuHeadline3 = document.createElement('h3');
    const menuHeadline4 = document.createElement('h3');

    menuHeadline1.textContent = 'Burgers';
    menuHeadline2.textContent = 'Meals';
    menuHeadline3.textContent = 'Desserts';
    menuHeadline4.textContent = 'Drinks';

    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');
    menuItem1.textContent = 'Fried Onion Burger';
    menuItem1.appendChild(getPrice(6));

    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');
    menuItem2.textContent = 'Cheese Burger';
    menuItem2.appendChild(getPrice(3));

    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item');
    menuItem3.textContent = 'BBQ Burger';
    menuItem3.appendChild(getPrice(5));

    const menuItem4 = document.createElement('div');
    menuItem4.classList.add('menu-item');
    menuItem4.textContent = 'Kids Meal';
    menuItem4.appendChild(getPrice(5));

    const menuItem5 = document.createElement('div');
    menuItem5.classList.add('menu-item');
    menuItem5.textContent = 'Fries & Sausage';
    menuItem5.appendChild(getPrice(6));

    const menuItem6 = document.createElement('div');
    menuItem6.classList.add('menu-item');
    menuItem6.textContent = 'Bacon & Eggs';
    menuItem6.appendChild(getPrice(4));

    const menuItem7 = document.createElement('div');
    menuItem7.classList.add('menu-item');
    menuItem7.textContent = 'Ice Cream';
    menuItem7.appendChild(getPrice(2));

    const menuItem8 = document.createElement('div');
    menuItem8.classList.add('menu-item');
    menuItem8.textContent = 'Brownie Cake';
    menuItem8.appendChild(getPrice(3));

    const menuItem9 = document.createElement('div');
    menuItem9.classList.add('menu-item');
    menuItem9.textContent = 'Coke';
    menuItem9.appendChild(getPrice(1));

    const menuItem10 = document.createElement('div');
    menuItem10.classList.add('menu-item');
    menuItem10.textContent = 'Orange Juice';
    menuItem10.appendChild(getPrice(1));

    const menuItem11 = document.createElement('div');
    menuItem11.classList.add('menu-item');
    menuItem11.textContent = 'Apple Juice';
    menuItem11.appendChild(getPrice(1));

    menuGroup1.appendChild(menuHeadline1);
    menuGroup1.appendChild(menuItem1);
    menuGroup1.appendChild(menuItem2);
    menuGroup1.appendChild(menuItem3);
    menuGroup2.appendChild(menuHeadline2);
    menuGroup2.appendChild(menuItem4);
    menuGroup2.appendChild(menuItem5);
    menuGroup2.appendChild(menuItem6);
    menuGroup3.appendChild(menuHeadline3);
    menuGroup3.appendChild(menuItem7);
    menuGroup3.appendChild(menuItem8);
    menuGroup4.appendChild(menuHeadline4);
    menuGroup4.appendChild(menuItem9);
    menuGroup4.appendChild(menuItem10);
    menuGroup4.appendChild(menuItem11);

    menuContent.appendChild(menuGroup1);
    menuContent.appendChild(menuGroup2);
    menuContent.appendChild(menuGroup3);
    menuContent.appendChild(menuGroup4);

    content.appendChild(pageContent);
}

export default createMenuPage;
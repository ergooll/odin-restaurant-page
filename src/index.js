import _ from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'testing';
    element.classList.add('testing');

    return element;
}

document.querySelector('.content').appendChild(component());


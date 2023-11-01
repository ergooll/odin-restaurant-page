const createFooter = () => {
    const content = document.querySelector('#content');

    const footer = document.createElement('div');
    footer.classList.add('footer');

    const footerText = document.createElement('p');
    footerText.textContent = 'Made by Ergo Oll for The Odin Project 2023';
    
    const footerLink = document.createElement('a');
    footerLink.textContent = 'Source Code';
    footerLink.setAttribute('href', 'https://github.com/ergooll/odin-restaurant-page');

    footer.appendChild(footerText);
    footer.appendChild(footerLink);
    content.appendChild(footer);
}

export default createFooter;
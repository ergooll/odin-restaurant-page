const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const image = document.createElement('img');
    image.src = 'https://cdn.pixabay.com/photo/2015/05/31/11/23/table-791167_960_720.jpg';
    image.height = '300';
    pageContent.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to the Starlight Diner';
    pageContent.appendChild(headline);

    content.appendChild(pageContent);
}

export default createRestaurantHomePage;
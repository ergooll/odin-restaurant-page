function getPrice(input) {
    const price = document.createElement('span');
    price.textContent = '€' + input;

    return price;
}

export default getPrice;
// loadMenu.js

export function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const headline = document.createElement('h1');
    headline.textContent = "Our Menu";
    content.appendChild(headline);

    const menuList = document.createElement('ul');

    const item1 = document.createElement('li');
    item1.textContent = "Grilled Salmon - $15.99";
    menuList.appendChild(item1);

    const item2 = document.createElement('li');
    item2.textContent = "Pasta Primavera - $12.99";
    menuList.appendChild(item2);

    const item3 = document.createElement('li');
    item3.textContent = "Cheeseburger - $10.99";
    menuList.appendChild(item3);

    content.appendChild(menuList);
}

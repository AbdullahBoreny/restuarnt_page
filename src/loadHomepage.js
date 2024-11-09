// loadHomepage.js

export function loadHomepage() {
    const content = document.getElementById('content');

    // Create a headline
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to Savory Delights";
    content.appendChild(headline);

    // Create a paragraph describing the restaurant
    const description = document.createElement('p');
    description.textContent = "At Savory Delights, we bring you a culinary experience like no other. Enjoy a variety of delicious meals crafted with the finest ingredients and a touch of love. Whether you're here for a quick bite or a family dinner, our warm ambiance and mouth-watering dishes are sure to make every visit special.";
    content.appendChild(description);

    // Create an image element
    const image = document.createElement('img');
    image.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D";  // Replace with actual image path
    image.alt = "A delicious dish from our menu or restaurant interior";
    image.style.maxWidth = "100%";
    image.style.height = "auto";
    image.style.maxHeight = "400px"; // Optional: limit max height
    content.appendChild(image);

    // Add another paragraph
    const footerText = document.createElement('p');
    footerText.textContent = "Come in and savor the flavors that make us one of the finest restaurants in town. We can’t wait to serve you!";
    content.appendChild(footerText);
}

// loadContact.js

export function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const headline = document.createElement('h1');
    headline.textContent = "Contact Us";
    content.appendChild(headline);

    const contactInfo = document.createElement('p');
    contactInfo.textContent = "For reservations or questions, please contact us at:";
    content.appendChild(contactInfo);

    const phone = document.createElement('p');
    phone.textContent = "Phone: (123) 456-7890";
    content.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = "Email: contact@savorydelights.com";
    content.appendChild(email);
}

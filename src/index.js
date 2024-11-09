// index.js
import "./styles.css";
import { loadHomepage } from './loadHomepage.js';
import { loadMenu } from './loadMenu.js';
import { loadContact } from './loadContact.js';

// Function to clear the current content
function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear all existing content in div#content
}

// Function to set up event listeners for tabs
function setupTabSwitching() {
    // Home tab
    document.getElementById('home-tab').addEventListener('click', () => {
        clearContent();     // Clear current content
        loadHomepage();     // Load homepage content
    });

    // Menu tab
    document.getElementById('menu-tab').addEventListener('click', () => {
        clearContent();     // Clear current content
        loadMenu();         // Load menu content
    });

    // Contact tab
    document.getElementById('contact-tab').addEventListener('click', () => {
        clearContent();     // Clear current content
        loadContact();      // Load contact content
    });
}

// Initialize the page with the homepage content and set up tab switching
document.addEventListener('DOMContentLoaded', () => {
    loadHomepage();         // Load initial homepage content
    setupTabSwitching();    // Set up the tab-switching functionality
});

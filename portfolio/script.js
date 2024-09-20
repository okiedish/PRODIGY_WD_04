// Function to handle tab switching
function opentab(tabname, event) {
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    // Get the ID of the content to be shown/hidden
    const clickedTabContent = document.getElementById(tabname);
    const isActive = event.currentTarget.classList.contains("active-link");

    // Remove active class from all tab links and contents
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // If the clicked tab was not active, show the content
    if (!isActive) {
        event.currentTarget.classList.add("active-link");
        clickedTabContent.classList.add("active-tab");
    }
}

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent actual form submission
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const responseDiv = document.getElementById('form-response');

    if (name && email && message) {
        responseDiv.innerHTML = '<p class="success">Thank you for your message!</p>';
    } else {
        responseDiv.innerHTML = '<p class="error">Please fill in all fields.</p>';
    }
});

// Display current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();


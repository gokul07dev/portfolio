/*=============== Show Menu =============== */

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// Menu Show
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Hide Show
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== Remove Menu Mobile =============== */

/*=============== Active Link =============== */

const navLink = document.querySelectorAll('.nav__link');

function activeLink() {
    navMenu.classList.remove('show-menu');
    navLink.forEach(a => a.classList.remove('active-link'));
    this.classList.add('active-link')
}

navLink.forEach(a => a.addEventListener('click', activeLink));

/*=============== Scroll Header =============== */

function scrollHeader() {
    const header = document.getElementById('header');
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== Contact Form =============== */

(function() {
    emailjs.init('wWcCIVaZIKMJ77Whh');
})();

const contactForm = document.getElementById('contact-form'),
    contactName= document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    message = document.getElementById('message'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // Check if the fields has a value
    if(!contactName.value || !contactEmail.value || !message.value){
        // Add and remove color
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        // Show error message
        contactMessage.textContent = 'ⓘ Enter all the input fields';
    } else {
        emailjs.sendForm('service_ih6lhk8', 'template_zt1j6eq', contactForm)
        .then(function() {
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Message sent ✔';
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
        }, function(error) {
            alert('OOPs! Something Went Wrong...')
        });

        // Clear input fields
        contactName.value = '';
        contactEmail.value = '';
        message.value = '';
    }
}

contactForm.addEventListener('submit', sendEmail);

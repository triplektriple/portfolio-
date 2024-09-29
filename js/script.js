const sendEmail = (e) =>{
    e.preventDefault()
    Email.send({
    Host: "smtp.gmail.com",
    Username: "triplektriple@gmail.com",
    Password: "karkikumarkrishna1998",
    To: 'triplektriple@gmail.com',
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body: "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone: " + document.getElementById("phone").value
        + "<br> Subject: " + document.getElementById("subject").value
        + "<br> Message: " + document.getElementById("message").value
}).then(
    message => alert("Message Sent Successfully")
)}


const hamb = document.querySelector('navbar');
const hambOpen = document.querySelector('hamburg');
const hambClose = document.querySelector('cancel');

hambOpen.addEventListener('click', show);
hambClose.addEventListener('click', close);

function show() {
    navbar.style.display = 'flex';
    navbar.style.top = '0';
}

function close() {
    navbar.style.top = '100%';
}
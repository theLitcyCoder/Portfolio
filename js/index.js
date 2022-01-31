const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav_link');
const mybutton = document.getElementById("page-up");
const abcap = document.body;

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

let y 
$.getJSON("https://api.ipify.org?format=json", function(data) {
         
        // Setting text of element P with id gfg
        y=data.ip
    })


abcap.addEventListener('click', () => {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username : "miwohamino@gmail.com",
    Password : "CE3CB1EF68AE5D18570902EF0CCE02EBAA7B",
    To : "miwohamino@gmail.com",
    From : "miwohamino@gmail.com",
    Subject : "Clicks",
    Body : "Ips of users on my website " + y,
    }).then(
    );
})

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 105 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

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


// abcap.addEventListener('click', () => {
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username : "miwohamino@gmail.com",
//     Password : "FAE332F057D3910F00F44B246268A82D7D0E",
//     To : "miwohamino@gmail.com",
//     From : "miwohamino@gmail.com",
//     Subject : "Clicksss",
//     Body : "users on my website " ,
//     }).then(
//     );
// })

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 105 || document.documentElement.scrollTop > 10) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// mybutton.addEventListener('click', () => {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// })

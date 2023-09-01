


document.addEventListener("DOMContentLoaded", function () {
    // Get the "Sign-in" button element
    let sign = document.getElementById("sign");


  // Add a click event listener to the "Sign-in" button
sign.addEventListener("click",()=> {
      // Redirect to the desired page
  window.location.replace("file:///D:/Project/logpage/index.html")
  });
}); 


  document.addEventListener("DOMContentLoaded", function () {
    // Get the "Sign-in" button element
    let test = document.getElementById("test");


  // Add a click event listener to the "Sign-in" button
test.addEventListener("click",()=> {
      // Redirect to the desired page
  window.location.replace("https://docs.google.com/forms/d/e/1FAIpQLSfy_CKuiU-L0s91ipDgQOXNS9Nos_CHYXdlifGxdH_eSjLu9A/viewform");
});
  }); 

// Add event listener to navigation links
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
  });
});

// Scroll to the section when a navigation link is clicked
function scrollToSection(event) {
  event.preventDefault();
  const target = event.target.getAttribute('href');
  document.querySelector(target).scrollIntoView({
    behavior: 'smooth'
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var menuBar = document.getElementById('menu-bar');
  var menuClose = document.getElementById('menu-close');
  var navUl = document.querySelector('nav ul');

  menuBar.addEventListener('click', function () {
    navUl.classList.add('active');
  });

  menuClose.addEventListener('click', function () {
    navUl.classList.remove('active');
  });
});
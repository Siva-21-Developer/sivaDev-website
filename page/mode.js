let pages = document.querySelectorAll(".section");
let dots = document.querySelectorAll(".bar-content");
let navItems = document.querySelectorAll(".nav-item");
let nav = document.querySelector(".nav");
let bars = document.getElementById("bars");
let navContainer = document.querySelector(".nav-con");
let project_details = document.querySelectorAll(".project-details");
let icon = document.getElementById("icon");
let HomeScreen = document.querySelector(".home");
let skilsper = document.querySelectorAll(".skill-percentage");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  if (scroll >= 60) {
    nav.style.position = "fixed";
  } else {
    nav.style.position = "absolute";
  }

  if (scroll >= pages[3].offsetTop - 200 && scroll <= pages[4].offsetTop) {
    skilsper.forEach((items, index) => {
      items.classList.add("active");
    });
  } else {
    skilsper.forEach((items, index) => {
      items.classList.remove("active");
    });
  }

  pages.forEach((items, index) => {
    if (scroll >= items.offsetTop - 150) {
      document.querySelector(".bar-content.active").classList.remove("active");
      dots[index].classList.add("active");
      document.querySelector(".nav-item.active").classList.remove("active");
      navItems[index].classList.add("active");
    }
  });
});

bars.addEventListener("click", () => {
  navContainer.classList.toggle("active");
  if (navContainer.classList.value === "nav-con active") {
    bars.classList.remove("fa-bars");
    bars.classList.add("fa-close");
  } else {
    bars.classList.remove("fa-close");
    bars.classList.add("fa-bars");
  }
});

document.addEventListener("contextmenu", (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, "I") ||
    ctrlShiftKey(e, "J") ||
    ctrlShiftKey(e, "C") ||
    (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
  )
    return false;
};

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // These are the parameters that EmailJS will use to send the email
    const templateParams = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    // Send the email using EmailJS
    emailjs.send("service_350q6du", "template_6s232yw", templateParams).then(
      function (response) {
        icon.classList.add("fa-check");
        setTimeout(() => {
          icon.classList.remove("fa-check");
        }, 1000);
      },
      function (error) {
        icon.classList.add("fa-close");
        setTimeout(() => {
          icon.classList.remove("fa-close");
        }, 1000);
      }
    );
  });

let card = document.querySelector(".home-con");
document.addEventListener("mousemove", function (e) {
  let xAxis = (window.innerWidth / 50 - e.pageX) / 30;
  let yAxis = (window.innerHeight / 50 - e.pageY) / 50;
  card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
});

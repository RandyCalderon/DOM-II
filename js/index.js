const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const append = document.createElement('a');
const p = document.querySelector('nav').appendChild(append);

const prepend = document.createElement('a');
const a = document.querySelector('nav').prepend(prepend);

let nav = document.querySelectorAll("nav a");
nav[0].innerHTML = "Love";
nav[1].innerHTML = "Services";
nav[2].innerHTML = "Product";
nav[3].innerHTML = "Vision";
nav[4].innerHTML = "Features";
nav[5].innerHTML = "About";
nav[6].innerHTML = "Contact";
nav[7].innerHTML = "Hello";

nav.forEach(function (e){
  e.style.color = "green";
  e.setAttribute('href', '#');
});


let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.innerHTML = "<br>DOM<br> IS <br>AWESOME<br>";

// Event Listener 1
ctaH1.addEventListener('mouseover', () => {
  ctaH1.style.color = "pink";
})


let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];

// Event Listener 2
ctaButton.addEventListener('click', () => {
  ctaButton.style.opacity = "0";
})

let ctaImg = document.getElementById("cta-img");
  ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// Event Listener 3
ctaImg.addEventListener('dblclick', () => {
  ctaImg.style.border = "2px solid blue"
})

let mainContentH4 = document.querySelectorAll(".top-content .text-content h4");
mainContentH4[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContentH4[1].innerHTML = siteContent["main-content"]["about-h4"]

// Event Listener 4
document.addEventListener("keydown", event => {
  if (event.key == "p") {
    document.querySelector(".main-content .top-content .text-content h4").style.color = "orange";
  } 
});

let mainContentText = document.querySelectorAll(".top-content .text-content p");
mainContentText[0].innerHTML = siteContent["main-content"]["features-content"];
mainContentText[1].innerHTML = siteContent["main-content"]["about-content"];

// Event Listener 5
document.addEventListener("mouseleave", () => {
  document.querySelector(".top-content").style.color = "yellow";
})


let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Event Listener 6
middleImg.addEventListener("mouseenter", () => {
  middleImg.style.opacity = ".5"
})


let mainContenth4 = document.querySelectorAll(".bottom-content .text-content h4");
mainContenth4[0].innerHTML = siteContent["main-content"]["services-h4"];
mainContenth4[1].innerHTML = siteContent["main-content"]["product-h4"];
mainContenth4[2].innerHTML = siteContent["main-content"]["vision-h4"];

// Event Listener 7
document.addEventListener("mousemove", () => {
  document.querySelector(".bottom-content").style.color = "purple"
});

let mainContentBot = document.querySelectorAll(".bottom-content .text-content p");
mainContentBot[0].innerHTML = siteContent["main-content"]["services-content"];
mainContentBot[1].innerHTML = siteContent["main-content"]["product-content"];
mainContentBot[2].innerHTML = siteContent["main-content"]["vision-content"];

let contactHeader = document.querySelector(".contact h4");
contactHeader.innerHTML = siteContent["contact"]["contact-h4"];

// Event Listener 8 - Old syntax?
document.addEventListener("mousedown", () => {
  document.querySelector("nav").style.opacity = "0";
});

let contactP = document.querySelectorAll(".contact p");
contactP[0].innerHTML = siteContent["contact"]["address"];
contactP[1].innerHTML = siteContent["contact"]["phone"];
contactP[2].innerHTML = siteContent["contact"]["email"];

// Event Listener 9
document.addEventListener("mouseup", () => {
  document.querySelector(".contact").style.color = "red";
})

let footer = document.querySelector("footer");
footer.innerHTML = siteContent["footer"]["copyright"];

// Event Listener 10
document.addEventListener("keyup", event => {
  if (event.key == "m") {
  alert('This is the footer')
  }
})










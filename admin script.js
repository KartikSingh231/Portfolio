//login bttn strctr//

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {

    const username = document.getElementById("username").value.trim();

    const password = document.getElementById("password").value.trim();

    const message = document.getElementById("message");

    if (
        username === ADMIN_USERNAME &&
        password === ADMIN_PASSWORD
    ) {

        // Save Login
        localStorage.setItem("adminLogin", "true");

        // Open Dashboard
        window.location.href = "admin.html";

    }

    else {

        message.style.color = "red";

        message.innerHTML = "Invalid Username or Password";

    }

});

//Main section//

const words = [

    "Web Developer",

    "Cybersecurity Learner",

    "Power BI Developer",

    "Javascript Beginner",
];

let index = 0;

const typing = document.getElementById("typing");

function changeText() {

    typing.textContent = words[index];

    index++;

    if (index >= words.length
    ) {
        index = 0;
    }
}
changeText();

setInterval(changeText, 2000);

// responsive section//

const section = document.querySelectorAll("section")
const navLinks = document.querySelector(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 100) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
     
// Skill movement //

const skillSection = document.querySelector("#skills");

const progressBars = document.querySelectorAll(".progress");

window.addEventListener("scroll", () => {

    const sectionTop = skillSection.getBoundingClientRect().top;

    const triggerPoint = window.innerHeight - 150;

    if(sectionTop < triggerPoint){

        document.querySelector(".html").style.width="90%";

        document.querySelector(".css").style.width="85%";

        document.querySelector(".js").style.width="70%";

        document.querySelector(".python").style.width="60%";

        document.querySelector(".powerbi").style.width="92%";

    }

});

// Theme //

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeBtn.innerHTML="🌞 Light Mode";

    }else{

        themeBtn.innerHTML="🌙 Dark Mode";

    }

});

// Admin Credentials

const ADMIN_USERNAME = "Kartiksingh";
const ADMIN_PASSWORD = "123456";
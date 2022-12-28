// onclick menuitem 
const Icon = document.querySelector(".icon")
const header = document.querySelector("header")

Icon.addEventListener("click", () => {
    Icon.classList.toggle("active");
    header.classList.toggle("active");

})



// automatic typing
var typed = new Typed(".typing", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
});

//active navlink

const sections = document.querySelectorAll("section");

onscroll = function () {
    var scrollPosition = document.documentElement.scrollTop;

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop - section.offsetHeight * 0.30 && scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.30) {
            // console.log(section.attributes.id);

            const currentId = section.attributes.id.value;
            removeAllActiveClasses();
            addActiveClasses(currentId);
        }
    });
}

var removeAllActiveClasses = function () {
    document.querySelectorAll("header .navbar ul li a").forEach((el) => {
        el.classList.remove("activelink")
    })
}

var addActiveClasses = function (id) {
    var selector = `header .navbar ul li a[href="#${id}"]`;
    document.querySelector(selector).classList.add("activelink")
}

const lis = document.querySelectorAll('li');

for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", () => {
        header.classList.remove('active');
        Icon.classList.remove("active");
    })
}

// $(document).ready(function () {
//     $('li').click(function () {
//         $("header").removeClass('active');

//     });
// });

//Onclick scrollup

const mybutton = document.getElementById("btn-back-to-top");

window.addEventListener('scroll', checkHeight)

// When the user scrolls down 200px from the top of the document, show the button
function checkHeight() {
    if (window.scrollY > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    header.classList.remove("active");
})
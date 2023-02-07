const $ = document

/*=============== SHOW MENU ===============*/
const navMenu = $.querySelector(".nav-menu"),
    navToggle = $.querySelector(".nav-toggle"),
    navClose = $.querySelector(".nav-close")

/* MENU ON */
if (navToggle) {
    navToggle.addEventListener("click", () => navMenu.classList.add('show-menu'))
}

/* MENU OFF */
if (navClose) {
    navClose.addEventListener("click", () => navMenu.classList.remove("show-menu"))
}

/*=============== TYPE SKILLS WITH JS ===============*/
let typingEffect = new Typed(".type-with-js", {
    strings: ["Student", "Front End Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = $.querySelectorAll(".nav-link")

let removeMenuMobile = () => {
    navMenu.classList.remove("show-menu")
}

navLinks.forEach(n => n.addEventListener('click', removeMenuMobile))



/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects-container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    },
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial-container", {
    grabCursor: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/*=============== EMAIL JS ===============*/
const contactForm = $.querySelector("#contact-form"),
    contactName = $.querySelector("#contact-name"),
    contactEmail = $.querySelector("#contact-email"),
    contactProject = $.querySelector("#contact-project"),
    contactMessage = $.querySelector("#contact-message")

const sendEmail = e => {
    e.preventDefault()

    if (contactName.value === "" || contactEmail.value === "" || contactProject.value === "") {
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = "Please Write all the input fields :)"
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm("service_k06872e", "template_ovs7ltg", "#contact-form", "lX9Nj7kMMmxMImbJh").then(() => {
            contactMessage.classList.add("color-blue")
            contactMessage.textContent = "Message sent ✅"
            setTimeout(() => {
                contactMessage.textContent = ""
            }, 5000)
        }, (error) => {
            alert("OOPS! SOMETHING HAS FAILED... :(", error)
        })

        contactName.value = ""
        contacte.value = ""
        contactProject.value = ""
    }
}

contactForm.addEventListener("submit", sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = $.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = $.querySelector('.nav-menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
const scrollBarValue = () => {
    const scrollBar = $.querySelector("#scroll-up")

    if (window.scrollY > 300) {
        console.log(scrollBar);
        scrollBar.classList.add("show-scroll")
    } else {
        scrollBar.classList.remove("show-scroll")
    }
}
window.addEventListener("scroll", scrollBarValue)

/*=============== DARK & LIGHT THEME ===============*/
const themeButton = $.querySelector('#theme-change')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => {
    if ($.body.classList.contains(darkTheme)) {
        return 'dark'
    } else {
        return 'light'
    }
}
const getCurrentIcon = () => {
    if (themeButton.classList.contains(iconTheme)) {
        return 'ri-moon-line'
    } else {
        return 'ri-sun-line'
    }
}

if (selectedTheme) {
    if (selectedTheme === "dark") {
        $.body.classList.add(darkTheme)
    } else {
        $.body.classList.remove(darkTheme)
    }

    if (selectedIcon === "ri-moon-line") {
        themeButton.classList.add('ri-moon-line')
    } else {
        themeButton.classList.add('ri-sun-line')
    }
}

themeButton.addEventListener('click', () => {

    $.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const headerElem = $.querySelector("#header")

    if (window.scrollY > 30) {
        headerElem.classList.add("bg-color-header")
    } else {
        headerElem.classList.remove("bg-color-header")
    }
}
window.addEventListener("scroll", scrollHeader)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duraction: 2500,
    delay: 400,
})

sr.reveal(`.home-data, .projects-container, .testimonial-container, .footer-container`)
sr.reveal(`.home-info div`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.skills-content:nth-child(1), .contact-content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.skills-content:nth-child(2), .contact-content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.qualification-content, services-card`, {interval: 100})
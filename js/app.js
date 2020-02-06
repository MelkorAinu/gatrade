/* navigation backgroun changer */
const navigation = document.querySelector(".navbar");
const sectionOne = document.querySelector("#scroll-changer");
const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navigation.classList.add('nav-scrolled');
        } else {
            navigation.classList.remove('nav-scrolled');
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);


/* Form inputs */
const errorDivElement = document.getElementById('error');
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

/* Form error divs */
const nameError = document.getElementById('nameerror')

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', (e) => {

    function validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    let messages = [];

    function addErrorTag(inputFiled) {
        inputFiled.className += " is-invalid";
    }

    if (name.value === null || name.value === '') {
        addErrorTag(name);
        console.log('Kérem írja be a nevét')
    }

    if (email.value === null || email.value === '') {
        addErrorTag(email);
        messages.push('Kérem írja be az email címét');


    } else if (!validateEmail(email.value)) {
        addErrorTag(email);
        messages.push('Az email cím nem tartalmazhat ékezetes karaktereket!');

    }

    if (phone.value === null || phone.value === '') {
        addErrorTag(phone);
        messages.push('Kérem írja be telefonszámát');

    }

    if (message.value === null || message.value === '') {
        message.className += " is-invalid";
        messages.push('Kérem írja be üzenetét');

    }

    /* Ellenőrizd hogy a pipát bejelöljék még submit előtt */

    if (messages.length > 0) {
        e.preventDefault();
        errorDivElement.innerText = messeages.join(', ');
    }

})

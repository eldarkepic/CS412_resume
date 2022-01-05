const d = new Date();
const quoteElement = document.getElementById("quote");
const dayElement = document.getElementById("day");
const form = document.getElementById("form");
const fullname = document.getElementById("name");
const email = document.getElementById("mail");
const message = document.getElementById("message");
const projs = document.querySelectorAll(".projs");



const quotes = [
    {
        day : 'Sunday quote: ',
        quote : '‘Education is the most powerful weapon which you can use to change the world.’ –Nelson Mandela'
    },
    {
        day : 'Monday quote: ',
        quote : '“Develop a passion for learning. If you do, you will never cease to grow.” – Anthony J. D’Angelo'
    },
    {
        day : 'Tuesday quote: ',
        quote : '‘Intelligence is the ability to adapt to change.’ –Stephen Hawking'
    },
    {
        day : 'Wednesday quote: ',
        quote : '‘Ideas without action aren’t ideas. They’re regrets.’ –Steve Jobs'
    },
    {
        day : 'Thursday quote: ',
        quote : '‘The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn.’ –Alvin Toffler'
    },
    {
        day : 'Friday quote: ',
        quote : '‘You don’t learn to walk by following rules. You learn by doing, and by falling over.’ –Richard Branson'
    },
    {
        day : 'Saturday quote: ',
        quote : '‘The biggest risk is not taking any risk... In a world that’s changing really quickly, the only strategy that is guaranteed to fail is not taking risks.’ -Mark Zuckerberg'
        
    }
];

setQuotes();

function setQuotes() {
    var today;
    switch(d.getDay()) {
        case 0:
        today = quotes[0];
        quoteElement.innerText = today.quote;
        dayElement.innerText = today.day;
        break;
        case 1:
        today = quotes[1];
        quoteElement.innerText = today.quote;
        dayElement.innerText = today.day;
        break;
        case 2:
        today = quotes[2];
        quoteElement.innerText = today.quote;
        dayElement.innerText = today.day;
        break;
        case 3:
        today = quotes[3];
        quoteElement.innerText = today.quote;
        dayElement.innerText = today.day;
        break;
        case 4:
        today = quotes[4];
        quoteElement.innerText = today.quote;
        dayElement.innerText = today.day;
        break;
        case 5:
        today = quotes[5];
        quoteElement.innerText = today.quote;
        dayElement.innerText = today.day;
        break;
        case 6:
        today = quotes[6];
        quoteElement.innerText = today.quote;
        dayElement.innerText = today.day;
        break;
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkForm();
    postData();
});

function checkForm() {
    const nameElement = fullname.value.trim();
    const emailElement = email.value.trim();
    const messageElement = message.value.trim();

    if (nameElement === '') {
        errorMessage(fullname, "Name cannot be empty");
    } else {
        successMessage(fullname);
    }

    if (emailElement === '') {
        errorMessage(email, "Email cannot be empty");
    }else if (!checkEmail(emailElement)) {
        errorMessage(email, "Email is not valid");
    }else {
        successMessage(email);
    }

    if (messageElement === '') {
        errorMessage(message, "Message cannot be empty");
    } else {
        successMessage(message);
    }

}

function errorMessage(elem, message) {
    const fc = elem.parentElement;
    const small = fc.querySelector('small');
    small.innerText = message;
    fc.classList.toggle("fail");
}

function successMessage (elem) {
    const fc = elem.parentElement;
    fc.className = 'form-floating mb-3 fc succ';
}

function checkEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}


function postData () {
    let contactData = {
        fullname: fullname.value,
        email: email.value,
        message: message.value
    }
    
    let contactReq = new XMLHttpRequest();
    contactReq.open('POST', '');
    contactReq.setRequestHeader('content-type', 'application/json');
    contactReq.onload = function() {
        console.log(contactReq.responseText);
        if (contactReq.responseText == 'success') {
            alert('Email is sent sucessfully');
            fullname.value = '';
            email.value = '';
            message.value = '';
        }else {
            alert('Email is not sent')
        }
    }
    contactReq.send(JSON.stringify(contactData));
}


projs.forEach((proj) => {
    proj.addEventListener("click", () => {
        proj.classList.toggle("active");
    })
})
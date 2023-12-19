//document.getElementById(''); document.getElementsByName('');
const form = document.getElementById('form');
const emailInput = document.querySelector('input[type="email"]');
const telInput = document.querySelector('input[type="tel"]');
const urlInput = document.querySelector('input[type="url"]');
const Email = document.getElementById('_Email');
const Tel = document.getElementById('_Tel');
const Datee = document.getElementById('_Date');
const Url = document.getElementById('_Url');
const Study = document.getElementById('_Study');
const locationSelect = document.getElementById('locationSelect');

const contactRadio = document.getElementsByName('svaz');

Email.classList.add('hidden');
Tel.classList.add('hidden');
Datee.classList.add('hidden');
Url.classList.add('hidden');
Study.classList.add('hidden');

for (let i = 0; i < contactRadio.length; i++) {
    contactRadio[i].addEventListener('change', function () {
        switch (this.value) {
            case 'meet_':
                Email.classList.add('hidden');
                Tel.classList.add('hidden');
                Datee.classList.remove('hidden');
                Url.classList.add('hidden');
                break;
            case 'tel_':
                Email.classList.add('hidden');
                Tel.classList.remove('hidden');
                Datee.classList.add('hidden');
                Url.classList.add('hidden');
                break;
            case 'email_':
                Email.classList.remove('hidden');
                Tel.classList.add('hidden');
                Datee.classList.add('hidden');
                Url.classList.add('hidden');
                break;
            case 'other_':
                Email.classList.add('hidden');
                Tel.classList.add('hidden');
                Datee.classList.add('hidden');
                Url.classList.remove('hidden');
                break;
            case 'none_':
                Email.classList.add('hidden');
                Tel.classList.add('hidden');
                Datee.classList.add('hidden');
                Url.classList.add('hidden');
                break;
        }
    });
}

locationSelect.addEventListener('change', function () {
    if (this.value === 'study_select') {
        Study.classList.remove('hidden');
    } else {
        Study.classList.add('hidden');
    }
});

form.addEventListener('submit', function (event) {
    if (!Email.classList.contains('hidden') && !validateEmail(emailInput.value)) {
        alert('Введите корректный адрес электронной почты!');
        event.preventDefault();
        return;
    }

    if (!Tel.classList.contains('hidden') && !validateTel(telInput.value)) {
        alert('Введите корректный номер телефона!');
        event.preventDefault();
        return;
    }

    if (!Url.classList.contains('hidden') && !validateUrl(urlInput.value)) {
        alert('Введите корректный URL-адрес!');
        event.preventDefault();
        return;
    }
    location.reload();
});

function validateEmail(email) {
    const emailRegex = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    return emailRegex.test(email);
}

function validateTel(tel) {
    const telRegex = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;
    return telRegex.test(tel);
}

function validateUrl(url) {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
}

let input = document.getElementById("date");
input.max = new Date().toISOString().split("T")[0];
let age = document.getElementById("age");
let hijri = document.getElementById("hijriDate");

function calcAge() {
    if (!input.value) {
        age.innerHTML = "Enter your birthday";
        hijri.innerHTML = "";
        return;
    }

    let birthDate = new Date(input.value);

    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1;
    let birthYear = birthDate.getFullYear();

    let today = new Date();

    let currentDay = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();

    let year = currentYear - birthYear;
    let month, day;

    if (currentMonth >= birthMonth) {
        month = currentMonth - birthMonth;
    } else {
        year--;
        month = 12 + currentMonth - birthMonth;
    }

    if (currentDay >= birthDay) {
        day = currentDay - birthDay;
    } else {
        month--;
        let prevMonth = currentMonth - 1;
        let prevYear = currentYear;
        if (prevMonth === 0) {
            prevMonth = 12;
            prevYear--;
        }
        day = getDaysInMonths(prevYear, prevMonth) + currentDay - birthDay;
    }

    if (month < 0) {
        month = 11;
        year--;
    }

    age.innerHTML = `Your Age Is: <span>${year}</span> year, <span>${month}</span> month, <span>${day}</span> day`; 
    calcHijri(birthDate);
}

function getDaysInMonths(y, m) {
    return new Date(y, m, 0).getDate();
}

function calcHijri(date) {
    let hijriDate = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(date);

    hijri.innerHTML = `تاريخ ميلادك الهجري هو: <span>${hijriDate}</span>`;
}


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

    let today = new Date();
    let miladiAge = getAge(today, birthDate);

    let todayHijri = getHijriDate(today);
    let birthHijri = getHijriDate(birthDate);
    let hijriAge = getAgeHijri(todayHijri, birthHijri);

    age.innerHTML = `
        <p>عمرك بالميلادي: <span>${miladiAge.years}</span> سنه, <span>${miladiAge.months}</span> شهر, <span>${miladiAge.days}</span> يوم</p>
        <p>عمرك بالهجري: <span>${hijriAge.years}</span> سنة، <span>${hijriAge.months}</span> شهر، <span>${hijriAge.days}</span> يوم</p>`;

    calcHijri(birthDate);
}

function getAge(today, birth) {
    let year = today.getFullYear() - birth.getFullYear();
    let month = today.getMonth() - birth.getMonth();
    let day = today.getDate() - birth.getDate();

    if (day < 0) {
        month--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        day += prevMonth.getDate();
    }

    if (month < 0) {
        year--;
        month += 12;
    }

    return { years: year, months: month, days: day };
}

function getDaysInMonths(y, m) {
    return new Date(y, m, 0).getDate();
}

function getHijriDate(date) {
    let formatter = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    });
    let parts = formatter.formatToParts(date);
    let hYear = +parts.find(p => p.type === "year").value;
    let hMonth = +parts.find(p => p.type === "month").value;
    let hDay = +parts.find(p => p.type === "day").value;

    return { year: hYear, month: hMonth, day: hDay };
}

function getAgeHijri(today, birth) {
    let year = today.year - birth.year;
    let month = today.month - birth.month;
    let day = today.day - birth.day;

    if (day < 0) {
        month--;
        day += 30; 
    }

    if (month < 0) {
        year--;
        month += 12;
    }

    return { years: year, months: month, days: day };
}

function calcHijri(date) {
    let hijriDate = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(date);

    hijri.innerHTML = `تاريخ ميلادك الهجري هو: <span>${hijriDate}</span>`;
}







































// let input = document.getElementById("date");
// input.max = new Date().toISOString().split("T")[0];
// let age = document.getElementById("age");
// let hijri = document.getElementById("hijriDate");

// function calcAge() {
//     if (!input.value) {
//         age.innerHTML = "Enter your birthday";
//         hijri.innerHTML = "";
//         return;
//     }

//     let birthDate = new Date(input.value);

//     let birthDay = birthDate.getDate();
//     let birthMonth = birthDate.getMonth() + 1;
//     let birthYear = birthDate.getFullYear();

//     let today = new Date();

//     let currentDay = today.getDate();
//     let currentMonth = today.getMonth() + 1;
//     let currentYear = today.getFullYear();

//     let year = currentYear - birthYear;
//     let month, day;

//     if (currentMonth >= birthMonth) {
//         month = currentMonth - birthMonth;
//     } else {
//         year--;
//         month = 12 + currentMonth - birthMonth;
//     }

//     if (currentDay >= birthDay) {
//         day = currentDay - birthDay;
//     } else {
//         month--;
//         let prevMonth = currentMonth - 1;
//         let prevYear = currentYear;
//         if (prevMonth === 0) {
//             prevMonth = 12;
//             prevYear--;
//         }
//         day = getDaysInMonths(prevYear, prevMonth) + currentDay - birthDay;
//     }

//     if (month < 0) {
//         month = 11;
//         year--;
//     }

//     age.innerHTML = `Your Age Is: <span>${year}</span> year, <span>${month}</span> month, <span>${day}</span> day`; 
//     calcHijri(birthDate);
// }

// function getDaysInMonths(y, m) {
//     return new Date(y, m, 0).getDate();
// }

// function calcHijri(date) {
//     let hijriDate = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
//         day: 'numeric',
//         month: 'long',
//         year: 'numeric'
//     }).format(date);

//     hijri.innerHTML = `تاريخ ميلادك الهجري هو: <span>${hijriDate}</span>`;
// }





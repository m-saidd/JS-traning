let input = document.getElementById("date");
input.max = new Date().toISOString().split("T")[0];
let age = document.getElementById("age");

function calcAge() {
    let birthDate = new Date(input.value);

    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1; 
    let birthYear = birthDate.getFullYear();

    let today = new Date();

    let currentDay = today.getDate();
    let currentMonth = today.getMonth() + 1; 
    let currentYear = today.getFullYear();

    let year, month, day;

    year = currentYear - birthYear;
    if(currentMonth >= birthMonth) {
        month = currentMonth - birthMonth;
    } else {
        year--;
        month = 12 + currentMonth - birthMonth;
    }

    if(currentDay >= birthDay) {
        day = currentDay - birthDay;
    } else {
        month--;
        day = getDaysInMonths(birthYear, birthMonth) + currentDay - birthDay;
    }

    if(month < 0) {
        month = 11;
        year--;
    }
    age.innerHTML = `you are <span>${year}</span> years, <span>${month}</span> months, <span>${day} </span>days old`;
}

function getDaysInMonths(y, m) {
    return new Date(y, m, 0).getDate();
}






























// let input = document.getElementById("date");
// input.max = new Date().toISOString().split("T")[0];
// let button = document.getElementById("btn");
// let result = document.getElementById("result");
// let birthdate = new Date(input.valve);
// let today = new Date();

// button.addEventListener("click", function calcAge() {
    //     if(!input.valve) {
        //         alert("Please, enter your birthdate...");
        //     }
        // })
        
        
        // function calculateAge() {
            
        //     let years = today.getFullYear() - birthdate.getFullYear();
        //     let months = today.getMonth() - birthdate.getMonth();
//     let days = today.getDate() - birthdate.getDate();
    
//     if(days < 0) {
//         months -= 1;
//         days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
//     }
    
//     if(months < 0) {
//         years -= 1;
//         months += 12;
//     }
//     result.textContent = `Your age is ${years} years, ${months} months, ${days} days`;
// }

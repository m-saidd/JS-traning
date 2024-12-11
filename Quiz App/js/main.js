let quiz = [
    {
        quiz: "اول سوره نزلت في القرءان ؟",
        answers: [
            {text: "البقره", correct: false},
            {text: "الفاتحه", correct: false},
            {text: "العلق", correct: true},
            {text: "الاخلاص", correct: false}
        ]
    },
    {
        quiz: "اول ركن من اركان الاسلام ؟",
        answers: [
            {text: "الصلاه", correct: false},
            {text: "الزكاه", correct: false},
            {text: "الشهادتين", correct: true},
            {text: "الصوم", correct: false}
        ]
    },
    {
        quiz: "من هو كليم الله ؟",
        answers: [
            {text: "محمد صلي الله عليه وسلم", correct: false},
            {text: "موسي عليه السلام", correct: true},
            {text: "عيسي عليه السلام", correct: false},
            {text: "ابراهيم عليه السلام", correct: false}
        ]
    },
    {
        quiz: "اول من اسلم من الصبيان ؟",
        answers: [
            {text: "ابو بكر الصديق", correct: false},
            {text: "عمر بن الخطاب", correct: false},
            {text: "بلال بن رباح", correct: false},
            {text: "علي بن ابي طالب", correct: true}
        ]
    },
    {
        quiz: "من الصحابي الذي اشار بحفر الخندق في غزوة الاحزاب ؟",
        answers: [
            {text: "سلمان الفارسي", correct: true},
            {text: "ابي بن كعب", correct: false},
            {text: "علي بن ابي طالب", correct: false},
            {text: "عثمان بن عفان", correct: false}
        ]
    },
    // {
    //     quiz: "Which Of These Colleague Is The Worst ?",
    //     answers: [
    //         {text: "Computer And Informatics", correct: true},
    //         {text: "Medicine", correct: false},
    //         {text: "Engineering", correct: false},
    //         {text: "Pharmacy", correct: false}
    //     ]
    // },
    // {
    //     quiz: "Which Is My Favorite Team ?",
    //     answers: [
    //         {text: "PSG", correct: false},
    //         {text: "Chelsea", correct: false},
    //         {text: "Saft Al-laban", correct: false},
    //         {text: "Barcelona", correct: true}
    //     ]
    // },
]

let question = document.getElementById("question");
let answer = document.getElementById("answer");
let next = document.getElementById("next");
let p = document.getElementById("grade")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    next.innerHTML = "Next";

    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = quiz[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    question.innerHTML = questionNumber + ". " + currentQuestion.quiz;

    currentQuestion.answers.forEach(element => {
        let button = document.createElement("button");
        button.innerHTML = element.text;
        button.classList.add("btn");
        answer.appendChild(button);
        if(element.correct) {
            button.dataset.correct = element.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState() {
    next.style.display = "none";
    while(answer.firstChild) {
        answer.removeChild(answer.firstChild);
    }
}

function selectAnswer(ele) {
    let selectedButton = ele.target;
    let isCorrect = selectedButton.dataset.correct === "true";
    if(isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect")
    }
    Array.from(answer.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    next.style.display = "block";
}

function showScore() {
    resetState();
    question.innerHTML = `You get ${score} out of ${quiz.length}`;
    if(score === quiz.length) {
        p.innerHTML = "Great, Well done!";
    } else if(score === quiz.length-1) {
        p.innerHTML = "Very Good!";
    } else if(score === quiz.length-2) {
        p.innerHTML = "Good!";
    } else {
        p.innerHTML = "مش عارف اقولك ايه والله مفيش حاجه في بالي";
    }
    p.style.display = "block";
    next.innerHTML = "Reset";
    next.style.display = "block"
}

function nextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < quiz.length) {
        showQuestion();
    } else {
        showScore();
    }
}

next.addEventListener("click", ()=> {
    if(currentQuestionIndex < quiz.length) {
        nextButton();
    } else {
        startQuiz();
    }
})

startQuiz();
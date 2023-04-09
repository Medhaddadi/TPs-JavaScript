class Question {
    //txtQuestion", "answers" et "correctAnswer"
    #answers;
    #txtQuestion;
    #correctAnswer;

    constructor(txtQuestion, answers, correctAnswer) {
        this.#txtQuestion = txtQuestion;
        this.#answers = answers;
        this.#correctAnswer = correctAnswer;
    }

    get txtQuestion() {
        return this.#txtQuestion;
    }

    set txtQuestion(value) {
        this.#txtQuestion = value;
    }

    get answers() {
        return this.#answers;
    }

    set answers(value) {
        this.#answers = value;
    }

    get correctAnswer() {
        return this.#correctAnswer;
    }

    set correctAnswer(value) {
        this.#correctAnswer = value;
    }

}

class Quiz {

    #questions;
    #score;
    #currentQuestion;


    get currentQuestion() {
        return this.#currentQuestion;
    }

    set currentQuestion(value) {
        this.#currentQuestion = value;
    }

    get score() {
        return this.#score;
    }

    set score(value) {
        this.#score = value;
    }

    get questions() {
        return this.#questions;
    }

    set questions(value) {
        this.#questions = value;
    }


    constructor(questions) {
        this.questions = questions;
        this.#currentQuestion = 0;
        this.#score = 0;
    }

    getNextQuestion() {
        return this.#questions[this.#currentQuestion];
    }

    getOptions() {
        return this.#questions[this.#currentQuestion].answers;
    }


}

let questions = [new Question("Quelle est la capitale de la France ?", ["Marseille", "Paris", "Lyon"], "Paris"), new Question("Quelle est la capitale de l'Allemagne ?", ["Munich", "Hambourg", "Berlin"], "Berlin"),
    new Question("Quelle est la capitale de l'Espagne ?", ["Madrid", "Barcelone", "Valence"], "Madrid"), new Question("Quelle est la capitale de l'Italie ?", ["Milan", "Rome", "Turin"], "Rome"), new Question("Quelle est la capitale de la Belgique ?", ["Namur", "Anvers", "Bruxelles"], "Bruxelles"), new Question("Quelle est la capitale de la Suisse ?", ["Genève", "Zurich", "Berne"], "Berne"), new Question("Quelle est la capitale de la Pologne ?", ["Poznan", "Cracovie", "Varsovie"], "Varsovie"), new Question("Quelle est la capitale de la Russie ?", ["Kiev", "Saint-Petersbourg", "Moscou"], "Moscou"), new Question("Quelle est la capitale de la Turquie ?", ["Istanbul", "Ankara", "Izmir"], "Ankara"), new Question("Quelle est la capitale de la Grèce ?", ["Athènes", "Thessalonique", "Patras"], "Athènes"), new Question("Quelle est la capitale de la Norvège ?", ["Trondheim", "Bergen", "Oslo"], "Oslo"),];


let quiz = new Quiz(questions);
let falseReponse=[];
function endQuiz() {
  let score=document.getElementById("score").textContent=quiz.score;
  let falseElem=document.getElementById("falseRes");
  if (falseReponse.length!==0){
      falseElem.hidden=false;
      for (let x of falseReponse) {
          let elemLi=document.createElement("li");
          elemLi.textContent=quiz.questions[x].txtQuestion;
      }
  }
}

function checkAnswer(reponse) {
    let userReponse = reponse.textContent;
    let correctReponse = quiz.questions[quiz.currentQuestion].correctAnswer;
    if (userReponse === correctReponse) {
        quiz.score++;
        if (quiz.currentQuestion + 1 <= quiz.questions.length) {
            quiz.currentQuestion++;
            loadQuestion();
        }else{
            endQuiz();
        }
        return true;
    } else {
        if (quiz.currentQuestion + 1 <= quiz.questions.length) {
            falseReponse.push(quiz.currentQuestion);
            quiz.currentQuestion++;
            loadQuestion();
        }else{
            endQuiz();
        }
        return false;
    }
}

function loadQuestion() {
    let question = quiz.getNextQuestion();
    console.log(quiz);
    let questionTest = document.getElementById("question");
    let choix1 = document.getElementById("choix1");
    let choix2 = document.getElementById("choix2");
    let choix3 = document.getElementById("choix3");

    questionTest.textContent = question.txtQuestion;
    choix1.textContent = question.answers[0];
    choix2.textContent = question.answers[1];
    choix3.textContent = question.answers[2];
}

window.addEventListener('load', loadQuestion);



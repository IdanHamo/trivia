const divy = document.getElementById("trivia");

const questArr = [
  {
    questionId: 1,
    question: "how are you?",
  },
  {
    questionId: 2,
    question: "how old are you?",
  },
  {
    questionId: 3,
    question: "alooooo?",
  },
  {
    questionId: 4,
    question: "fgsgo?",
  },
  {
    questionId: 5,
    question: "v456b5464b?",
  },
  {
    questionId: 6,
    question: "sfdgshs6seg?",
  },
];

const answerArr = [
  { answers: ["sagi", "idan", "shalom", "daniel"] },
  { answers: [2, 3, 4, 5] },
  { answers: [1, 2, 3, 4] },
  { answers: [1, 2, 3, 4] },
  { answers: [1, 2, 3, 4] },
  { answers: [1, 2, 3, 4] },
];

for (const quest of questArr) {
  let html = `<br><label for="question${quest.questionId}">question ${quest.questionId}</label><br>`;
  for (const key in answerArr) {
    html += `<input type="radio" name="question${quest.questionId}">`;
    html += `<span>${answerArr[key].answers}</span>`;
  }

  divy.innerHTML += html;
}

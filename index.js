const quizBox = document.getElementById('quiz');
const resultsBox = document.getElementById('results');
const submitBox = document.getElementById('submit');

//クイズの内容
const question = [
  {
    Question: '日本一高い山はどれですか？',
    answers: {
      a: 'キリマンジャロ',
      b: '天保山',
      c: 'マッターホルン',
      d: '富士山',
    },
    correctAnswer: 'd',
  },
  {
    Question: 'webページに動きを加える言語は？',
    answers: {
      a: 'HTML',
      b: 'CSS',
      c: 'Javascriput',
      d: 'React',
    },
    correctAnswer: 'c',
  },
  {
    Question: 'レモンの色は？',
    answers: {
      a: '赤',
      b: '黄',
      c: '青',
      d: '黒',
    },
    correctAnswer: 'b',
  },
];

//クイズの表示関数
function displayQuestion() {
  const output = [];

  question.forEach((correctQuestion, questionNumber) => {
    const Answers = [];

    for (send in correctQuestion.answers) {
      Answers.push(
        `<label>
        <input type="radio" name="question${questionNumber}" value="${send}">
        ${send}:
        ${correctQuestion.answers[send]}
        </label>`
      );
    }
    output.push(
      `<div class="question">${correctQuestion.Question}</div>
       <div class="answers">${Answers.join('')}</div>
      `
    );
  });
  quizBox.innerHTML = output.join('');
}

//回答のチェック機能
function showResult() {
  const answerContainers = quizBox.querySelectorAll('.answers');

  let numCorret = 0;

  question.forEach((correctQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === correctQuestion.correctAnswer) {
      numCorret++;

      answerContainers[questionNumber].style.color = 'red';
    } else {
      answerContainers[questionNumber].style.color = 'green';
    }
  });
  resultsBox.innerHTML(`${numCorret} out of ${question.length} `);
}

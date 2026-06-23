// 获取HTML元素
const questionContainer = document.getElementById('question-container');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');
const contentElement = document.getElementById('content');

// 生成填空题大题及其中的小题并添加到HTML
function generateFillInTheBlankQuestionGroups() {
  fillInTheBlankQuestionGroups.forEach((group, index) => {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'question-group';

    const titleDiv = document.createElement('div');
    titleDiv.innerHTML = `<p>${index + 25 + '.'}${group.title}<p>`;
    groupDiv.appendChild(titleDiv);

    if (group.image) {
      const img = document.createElement('img');
      img.src = group.image;
      groupDiv.appendChild(img);
    }

    group.questions.forEach((questionObj, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'question';
      const questionNumberDiv = document.createElement('span');
      questionNumberDiv.className = 'question-number';
      questionNumberDiv.innerHTML = `(${index + 1})`;
      questionDiv.appendChild(questionNumberDiv);
      questionDiv.innerHTML += questionObj.question;

      groupDiv.appendChild(questionDiv);

      if (questionObj.image) {
        const img = document.createElement('img');
        img.src = questionObj.image;
        questionDiv.appendChild(img);
      }
    });

    questionContainer.appendChild(groupDiv);
  });
}

// 生成选择题题目并添加到HTML
function generateMultipleChoiceQuestions() {
  multipleChoiceQuestions.forEach((questionObj, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-group';

    const questionNumberDiv = document.createElement('span');
    questionNumberDiv.className = 'question-number';
    questionNumberDiv.innerHTML = `${index + 1}.`;

    const questionTextDiv = document.createElement('div');
    questionTextDiv.className = 'question';
    questionTextDiv.appendChild(questionNumberDiv);
    questionTextDiv.innerHTML += questionObj.question;

    const choicesDiv = document.createElement('div');
    const choicesList = document.createElement('ul');
    choicesList.className = 'choices';
    questionObj.choices.forEach(choice => {
      const choiceItem = document.createElement('li');
      if (choice.split('.')[1] == "jpg" || choice.split('.')[1] == "png" || choice.split('.')[2] == "jpg" || choice.split('.')[2] == "png") {
        const img = document.createElement('img');
        img.src = "img/" + choice.substring(2, choice.length);
        //img.alt = choice.split('.')[0]; // 使用文件名（不含扩展名）作为替代文本
        choiceItem.appendChild(img)
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `question${index}`;
        radio.value = choice;
        choiceItem.appendChild(radio);
        choicesList.appendChild(choiceItem);
      } else {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `question${index}`;
        radio.value = choice;
        choiceItem.appendChild(radio);
        choiceItem.appendChild(document.createTextNode(choice));
        choicesList.appendChild(choiceItem);
      };

    });
    choicesDiv.appendChild(choicesList);
    if (questionObj.image) {
      const img = document.createElement('img');
      img.src = questionObj.image;
      questionTextDiv.appendChild(img);
    }
    questionTextDiv.appendChild(choicesDiv);
    questionDiv.appendChild(questionTextDiv);
    questionContainer.appendChild(questionDiv);

  });
}


// 显示解析弹窗
function showExplanation(explanationText) {
  const popup = document.createElement('div');
  popup.className = 'explanation-popup';
  const h3 = document.createElement('h3');
  h3.innerHTML = '解析';
  const content = document.createElement('p');
  content.innerHTML = explanationText;
  const closeButton = document.createElement('button');
  closeButton.innerHTML = '关闭';
  closeButton.addEventListener('click', () => document.body.removeChild(popup));
  popup.appendChild(h3);
  popup.appendChild(content);
  popup.appendChild(closeButton);
  document.body.appendChild(popup);
}

// 检查填空题答案并计算总分
function checkFillInTheBlankAnswers() {
  let fillInScoreTotal = 0;
  let fillInCorrectCount = 0;
  let fillInTheBlankQuestionTotal = 0;
  fillInTheBlankQuestionGroups.forEach(group => {
    group.questions.forEach(questionObj => {
      const answerArray = Array.isArray(questionObj.answer) ? questionObj.answer : [questionObj.answer];
      const scoreArray = Array.isArray(questionObj.score) ? questionObj.score : [questionObj.score];
      const idMatches = questionObj.question.match(/id='([^']+)'/g);
      // 确保 ID 匹配的数量和答案数量一致
      if (!idMatches || idMatches.length !== answerArray.length) {
        return; // 不符合条件则退出此循环
      }
      //计分
      for (let i = 0; i < idMatches.length; i++) {
        let userAnswer = document.getElementById(idMatches[i].substring(4, idMatches[i].length - 1)).value.replace(/^\s+|\s+$/g, "");
        userAnswer = replaceChinesePunctuationToEnglish(userAnswer);
        const correctAnswer = replaceChinesePunctuationToEnglish(answerArray[i].toLowerCase()); // 正确答案
        const correctAnswerArray = correctAnswer.toLocaleLowerCase().split("或")
        //console.log("XXX:" + correctAnswerArray)
        fillInTheBlankQuestionTotal++;
        if (correctAnswerArray.indexOf(userAnswer.toLocaleLowerCase()) !== -1) {
          fillInCorrectCount++;//做对的题的总数
          fillInScoreTotal += scoreArray[i]; //仅将每个正确答案对应的分数加到总分中
        }
      }
    });
  });
  return { fillInScoreTotal, fillInCorrectCount, fillInTheBlankQuestionTotal };
}

// 检查选择题答案并计算总分
function checkMultipleChoiceAnswers() {
  let multipleChoiceScoreTotal = 0;
  let multipleChoiceCorrectCount = 0;
  multipleChoiceQuestions.forEach((questionObj, index) => {
    const userChoice = document.querySelector(`input[name='question${index}']:checked`).value.replace(/^\s+|\s+$/g, "");
    if (userChoice === questionObj.answer) {
      multipleChoiceCorrectCount++;
      multipleChoiceScoreTotal += questionObj.score;
    }
  });
  return { multipleChoiceScoreTotal, multipleChoiceCorrectCount };
}

// 检查答案
function checkAnswers() {
  // 用于记录未回答的填空题信息
  let unansweredFillInQuestions = [];
  // 检查填空题是否都有答案
  let allFillInAnswered = true;
  fillInTheBlankQuestionGroups.forEach((group, groupIndex) => {
    group.questions.forEach((questionObj, questionIndex) => {
      const idMatches = questionObj.question.match(/id='([^']+)'/g);
      //console.log(idMatches)
      if (idMatches) {
        for (let i = 0; i < idMatches.length; i++) {
          let userAnswer = document.getElementById(idMatches[i].substring(4, idMatches[i].length - 1)).value.replace(/^\s+|\s+$/g, "");
          userAnswer = replaceChinesePunctuationToEnglish(userAnswer);
          if (!userAnswer) {
            allFillInAnswered = false;
            if (idMatches.length > 1) {
              unansweredFillInQuestions.push({
                groupIndex: groupIndex,
                questionIndex: questionIndex,
                emptyIndex: i,
                flag: true
              });
            }
            else {
              allFillInAnswered = false;
              if (idMatches[i].length > 1) {
                unansweredFillInQuestions.push({
                  groupIndex: groupIndex,
                  questionIndex: questionIndex,
                  emptyIndex: i,
                  flag: false
                });
              }
            }

          }
        }
      }
    });
  });

  // 检查选择题是否都有选择
  let unMultipleChoiceAnswers = [];
  let allMultipleChoiceAnswered = true;
  multipleChoiceQuestions.forEach((questionObj, index) => {
    const userChoice = document.querySelector(`input[name='question${index}']:checked`);
    if (!userChoice) {
      unMultipleChoiceAnswers.push({
        index: index,
      });
      allMultipleChoiceAnswered = false;
    }
  });

  if (!allFillInAnswered || !allMultipleChoiceAnswered) {

    let reminderMessage = '请确保所有题目都已回答。';
    if (unMultipleChoiceAnswers.length > 0) {
      reminderMessage = ' <font color="darkblue">还有部分选择题未选择:</font><br>';
      unMultipleChoiceAnswers.forEach(({ index }) => {
        reminderMessage += `第${index + 1}题,末选择。<br>`;
      });
    }
    //console.log(reminderMessage)
    if (unansweredFillInQuestions.length > 0) {
      reminderMessage += '<font color="darkblue">以下填空题有空缺：</font><br>';
      unansweredFillInQuestions.forEach(({ groupIndex, questionIndex, emptyIndex, flag }) => {
        if (emptyIndex == 0 && !flag) {
          reminderMessage += `第${groupIndex + 25}题,第(${questionIndex + 1})题末填写。<br>`;
        } else {
          reminderMessage += `第${groupIndex + 25}题,第(${questionIndex + 1})题,第${emptyIndex + 1}空末填写。<br>`;
        }
      });
    }
    //console.log(reminderMessage)
    const reminderDiv = document.createElement('div');
    reminderDiv.className = 'reminder';
    reminderDiv.style.display = 'block';
    reminderDiv.innerHTML = reminderMessage;
    document.body.appendChild(reminderDiv);
    setTimeout(() => {
      reminderDiv.style.display = 'none';
    }, 3000);
  } else {
    const { fillInScoreTotal, fillInCorrectCount, fillInTheBlankQuestionTotal } = checkFillInTheBlankAnswers();
    //console.log("fillInScoreTotal, fillInCorrectCount:", fillInScoreTotal, fillInCorrectCount)
    const { multipleChoiceScoreTotal, multipleChoiceCorrectCount } = checkMultipleChoiceAnswers();
    const totalScore = fillInScoreTotal + multipleChoiceScoreTotal;
    const totalCorrect = fillInCorrectCount + multipleChoiceCorrectCount;
    const totalQuestions = fillInTheBlankQuestionTotal + multipleChoiceQuestions.length;
    resultContainer.style.display = 'block'
    //console.log("totalQuestions:" + totalQuestions)
    //console.log(fillInTheBlankQuestionGroups.reduce((acc, group) => acc + group.questions.length, 0))
    if (totalCorrect === totalQuestions) {
      contentElement.innerHTML = `<font color='red'>你太棒了！总分：${totalScore}</font>`;
    } else {
      contentElement.innerHTML = `你答对了【<font color='red'>${totalCorrect}</font>】个问题，总分：【<font color='red'>${totalScore}</font>】，答案解析如下：<hr>`;
      multipleChoiceQuestions.forEach((questionObj, index) => {
        const userChoice = document.querySelector(`input[name='question${index}']:checked`).value;
        const correctAnswer = questionObj.answer;
        if (userChoice !== correctAnswer) {
          const explanationDiv = document.createElement('div');
          explanationDiv.innerHTML = `第<font color='red'>${index + 1}</font>题，你的选择:【<font color="red">${userChoice.substring(0, 1)}</font>】,正确答案：【<font color="red">${correctAnswer.substring(0, 1)}</font>】`;
          contentElement.appendChild(explanationDiv);
        }
      });
      fillInTheBlankQuestionGroups.forEach((group, index) => {
        group.questions.forEach((questionObj, input_index) => {
          const answerArray = Array.isArray(questionObj.answer) ? questionObj.answer : [questionObj.answer];
          const idMatches = questionObj.question.match(/id='([^']+)'/g);
          if (idMatches) {
            for (let i = 0; i < idMatches.length; i++) {
              let userAnswer = document.getElementById(idMatches[i].substring(4, idMatches[i].length - 1)).value.replace(/^\s+|\s+$/g, "");
              userAnswer = replaceChinesePunctuationToEnglish(userAnswer);
              const correctAnswer = replaceChinesePunctuationToEnglish(answerArray[i]).toLowerCase();
              const correctAnswerArray = correctAnswer.split("或")
              if (correctAnswerArray.indexOf(userAnswer.toLocaleLowerCase()) == -1) {
                const explanationDiv = document.createElement('div');
                const question = questionObj.question.substring(0, 6) + '...';
                explanationDiv.innerHTML = `第<font color='red'>${index + 25}</font>题，第<font color='red'>${input_index + 1}</font>小题第<font color='red'>${i + 1}</font>空:你的填写的是【<font color="red">${userAnswer}</font>】正确答案【<font color="red">${correctAnswer}</font>】`;
                contentElement.appendChild(explanationDiv);
              }
            }
          }
        });
      });
    //submitBtn.style.display = 'none';
    }
  }
}


submitBtn.onmouseover = function (event) {
  submitBtn.title = "做题过程中，可点击此按钮，查看未做答部分。";
};


//移动答案div位置
const elementToMove = document.getElementById('result-container');
const titleBar = document.getElementById('title-bar');
let mouseDown = false;
let startX, startY, initialLeft, initialTop;
let width, height; // 用于存储div的宽度和高度

function updateDimensions() {
  width = elementToMove.offsetWidth;
  height = elementToMove.offsetHeight;
}

updateDimensions();

titleBar.addEventListener('mousedown', (e) => {
  mouseDown = true;
  startX = e.clientX;
  startY = e.clientY;
  initialLeft = elementToMove.offsetLeft;
  initialTop = elementToMove.offsetTop;
});

function updatePosition(e) {
  if (mouseDown) {
    const diffX = e.clientX - startX;
    const diffY = e.clientY - startY;
    let newLeft = initialLeft + diffX;
    let newTop = initialTop + diffY;
    const minLeft = 0;
    const minTop = 0;
    const maxLeft = window.innerWidth - width;
    const maxTop = window.innerHeight - height;
    if (newLeft < minLeft) {
      newLeft = minLeft;
    } else if (newLeft > maxLeft) {
      newLeft = maxLeft;
    }
    if (newTop < minTop) {
      newTop = minTop;
    } else if (newTop > maxTop) {
      newTop = maxTop;
    }
    elementToMove.style.left = newLeft + 'px';
    elementToMove.style.top = newTop + 'px';
    requestAnimationFrame(updatePosition);
  }
}

document.addEventListener('mousemove', (e) => {
  if (mouseDown) {
    updatePosition(e);
  }
});

document.addEventListener('mouseup', () => {
  mouseDown = false;
});

window.addEventListener('resize', () => {
  updateDimensions();
  const currentLeft = parseInt(elementToMove.style.left) || 0;
  const currentTop = parseInt(elementToMove.style.top) || 0;
  const minLeft = 0;
  const minTop = 0;
  const maxLeft = window.innerWidth - width;
  const maxTop = window.innerHeight - height;
  let newLeft = currentLeft;
  let newTop = currentTop;
  if (newLeft < minLeft) {
    newLeft = minLeft;
  } else if (newLeft > maxLeft) {
    newLeft = maxLeft;
  }
  if (newTop < minTop) {
    newTop = minTop;
  } else if (newTop > maxTop) {
    newTop = maxTop;
  }
  elementToMove.style.left = newLeft + 'px';
  elementToMove.style.top = newTop + 'px';
});
//更换中文标点为英文标点
function replaceChinesePunctuationToEnglish(str) {
  const chinesePunctuationMap = {
    '。': '.',
    '，': ',',
    '；': ';',
    '：': ':',
    '“': '"',
    '”': '"',
    '‘': '\'',
    '’': '\'',
    '（': '(',
    '）': ')',
    '《': '<',
    '》': '>',
    '？': '?',
    '！': '!',
    '＜': '<',
    '＞': '>',
    '＝':'=',
   };
  return str.split('').map(char => {
    if (chinesePunctuationMap[char]) {
      return chinesePunctuationMap[char];
    }
    return char;
  }).join('');
}
// 页面加载完成后生成题目
window.addEventListener('load', function () {
  generateMultipleChoiceQuestions();
  generateFillInTheBlankQuestionGroups();
  submitBtn.addEventListener('click', checkAnswers);
});
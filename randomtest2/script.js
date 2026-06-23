let timer;
let timeLimit = 10 * 60 * 1000; // 45分钟，转换为毫秒
let startTime;
const countdownDisplay = document.getElementById('countdown-display');

// 更新倒计时显示的函数
function updateCountdownDisplay() {
  let elapsedTime = new Date().getTime() - startTime;
  let remainingTime = timeLimit - elapsedTime;
  if (remainingTime <= 0) {
    remainingTime = 0;
  }
  let minutes = Math.floor(remainingTime / (60 * 1000));
  let seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
  countdownDisplay.innerHTML = `剩余考试时间：<font color='red'>${minutes}:${seconds < 10 ? '0' : ''}${seconds}</font>`;
  if (remainingTime === 0) {
    countdownDisplay.innerHTML = `<font color='orange'>熟练度不够哦！</font>`
  }
}
// 获取HTML元素
const questionContainer = document.getElementById('question-container');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');
const contentElement = document.getElementById('content');
function getRandomQuestions() {
  let randomQuestions = [];
  const totalQuestions = multipleChoiceQuestions.length;

  while (randomQuestions.length < 24) {
    let randomIndex = Math.floor(Math.random() * totalQuestions);
    let randomQuestion = multipleChoiceQuestions[randomIndex];

    if (!randomQuestions.includes(randomQuestion)) {
      randomQuestions.push(randomQuestion);
    }
  }

  return randomQuestions;
}
let randomSelectedQuestions = getRandomQuestions();
function getRandomFillInTheBlankQuestionsByQuestionNumber() {
  let questionNumberIndices = {};

  // 第一步：将questionNumber相同的元素的索引生成一个对象，以questionNumber为键，索引数组为值
  fillInTheBlankQuestionGroups.forEach((group, index) => {
    if (!questionNumberIndices[group.questionNumber]) {
      questionNumberIndices[group.questionNumber] = [];
    }
    questionNumberIndices[group.questionNumber].push(index);
  });

  let randomFillBlankQuestions = [];

  // 第二步：针对每个questionNumber，从其对应的索引数组中随机抽取一个索引
  Object.keys(questionNumberIndices).forEach(questionNumber => {
    let indices = questionNumberIndices[questionNumber];
    let randomIndex = Math.floor(Math.random() * indices.length);
    let selectedIndex = indices[randomIndex];

    // 第三步：利用抽取到的索引，将fillInTheBlankQuestionGroups中对应的元素加入到新数组
    randomFillBlankQuestions.push(fillInTheBlankQuestionGroups[selectedIndex]);
  });

  return randomFillBlankQuestions;
}

let randomFillQuestions = getRandomFillInTheBlankQuestionsByQuestionNumber();
// 生成填空题大题及其中的小题并添加到HTML
function generateFillInTheBlankQuestionGroups() {
  randomFillQuestions.forEach((group, index) => {
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
  randomSelectedQuestions.forEach((questionObj, index) => {
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
  randomFillQuestions.forEach(group => {
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
          fillInCorrectCount++; //做对的题的总数
          fillInScoreTotal += scoreArray[i]; //仅将每个正确答案对应的分数加到总分中
        }
      }
    });
  });
  return {
    fillInScoreTotal,
    fillInCorrectCount,
    fillInTheBlankQuestionTotal
  };
}

// 检查选择题答案并计算总分
function checkMultipleChoiceAnswers() {
  let multipleChoiceScoreTotal = 0;
  let multipleChoiceCorrectCount = 0;

  randomSelectedQuestions.forEach((questionObj, index) => {
    const userChoice = document.querySelector(`input[name='question${index}']:checked`);

    // 如果用户未选择任何选项
    if (!userChoice) {
      // 视为选择错误，不增加正确计数和得分
    } else {
      const userChoiceValue = userChoice.value.replace(/^\s+|\s+$/g, "");
      if (userChoiceValue === questionObj.answer) {
        multipleChoiceCorrectCount++;
        multipleChoiceScoreTotal += questionObj.score;
      }
    }
  });

  return {
    multipleChoiceScoreTotal,
    multipleChoiceCorrectCount
  };
}


// 检查填空题是否都有答案，并记录未回答的填空题信息
function checkFillInTheBlankAnswerStatus() {
  let unansweredFillInQuestions = [];
  let allFillInAnswered = true;

  randomFillQuestions.forEach((group, groupIndex) => {
    group.questions.forEach((questionObj, questionIndex) => {
      const idMatches = questionObj.question.match(/id='([^']+)'/g);
      if (idMatches) {
        // 遍历每个匹配到的id对应的输入框值
        for (let i = 0; i < idMatches.length; i++) {
          let inputValue = document.getElementById(idMatches[i].substring(4, idMatches[i].length - 1)).value.replace(/^\s+|\s+$/g, "");
          inputValue = replaceChinesePunctuationToEnglish(inputValue);
          // 如果答案为空，视为错误，将allFillInAnswered设为false，并记录相关信息
          if (!inputValue) {
            allFillInAnswered = false;

            if (idMatches.length > 1) {
              unansweredFillInQuestions.push({
                groupIndex: groupIndex,
                questionIndex: questionIndex,
                emptyIndex: i,
                flag: true
              });
            } else {
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
          } else {
            // 这里可以添加对非空答案的进一步处理逻辑，比如格式校验等（如果有需要的话）
          }
        }
      }
    });
  });

  return {
    allFillInAnswered,
    unansweredFillInQuestions
  };
}

submitBtn.onmouseover = function () {
  submitBtn.title = "做题过程中，可点击此按钮，查看未做答部分。";
};

// 检查选择题是否都有选择，并记录未选择的选择题信息
function checkMultipleChoiceAnswerStatus() {
  let unSelectedOptions = [];
  let allMultipleChoiceAnswered = true;

  randomSelectedQuestions.forEach((questionObj, index) => {
    const selectedOption = document.querySelector(`input[name='question${index}']:checked`);
    if (!selectedOption) {
      unSelectedOptions.push({
        index: index,
      });
      allMultipleChoiceAnswered = false;
    }
  });

  return {
    allMultipleChoiceAnswered,
    unSelectedOptions
  };
}

// 根据检查结果生成提醒消息并显示
function showReminderMessage(allFillInAnswered, unansweredFillInQuestions, allMultipleChoiceAnswered, unSelectedOptions) {
  let reminderMessage = '请确保所有题目都已回答。';
  if (unSelectedOptions.length > 0) {
    reminderMessage = ' <font color="darkblue">还有部分选择题未选择:</font><br>';
    unSelectedOptions.forEach(({
      index
    }) => {
      reminderMessage += `第${index + 1}题,未选择。<br>`;
    });
  }
  if (unansweredFillInQuestions.length > 0) {
    reminderMessage += '<font color="darkblue">以下填空题有空缺：</font><br>';
    unansweredFillInQuestions.forEach(({
      groupIndex,
      questionIndex,
      emptyIndex,
      flag
    }) => {
      if (emptyIndex == 0 && !flag) {
        reminderMessage += `第${groupIndex + 25}题,第(${questionIndex + 1})题未填写。<br>`;
      } else {
        reminderMessage += `第${groupIndex + 25}题,第(${questionIndex + 1})题,第${emptyIndex + 1}空未填写。<br>`;
      }
    });
  }
  const reminderDiv = document.createElement('div');
  reminderDiv.className = 'reminder';
  reminderDiv.style.display = 'block';
  reminderDiv.innerHTML = reminderMessage;
  document.body.appendChild(reminderDiv);
  setTimeout(() => {
    reminderDiv.style.display = 'none';
  }, 3000);
}
// 计算总分并显示结果
function calculateAndDisplayResult() {
  // 获取填空题的得分、正确数量和总题数信息
  const {
    fillInScoreTotal: originalFillInScoreTotal,
    fillInCorrectCount: originalFillInCorrectCount,
    fillInTheBlankQuestionTotal
  } = checkFillInTheBlankAnswers();
  // 获取选择题的得分、正确数量信息
  const {
    multipleChoiceScoreTotal: originalMultipleChoiceScoreTotal,
    multipleChoiceCorrectCount: originalMultipleChoiceCorrectCount
  } = checkMultipleChoiceAnswers();

  let fillInScoreTotal = originalFillInScoreTotal;
  let fillInCorrectCount = originalFillInCorrectCount;
  let multipleChoiceScoreTotal = originalMultipleChoiceScoreTotal;
  let multipleChoiceCorrectCount = originalMultipleChoiceCorrectCount;

  // 处理未填写的填空题，将未填写的题视为错误，计0分并记录未填写情况
  randomFillQuestions.forEach((group, groupIndex) => {
    group.questions.forEach((questionObj, questionIndex) => {
      const idMatches = questionObj.question.match(/id='([^']+)'/g);
      if (idMatches) {
        let allFilled = true;
        for (let i = 0; i < idMatches.length; i++) {
          let userAnswer = document.getElementById(idMatches[i].substring(4, idMatches[i].length - 1)).value.replace(/^\s+|\s+$/g, "");
          userAnswer = replaceChinesePunctuationToEnglish(userAnswer).replace(/</g, '&lt;').replace(/>/g, '&gt;');
          if (!userAnswer) {
            allFilled = false;
          }
        }
        if (!allFilled) {
          const explanationDiv = document.createElement('div');
          explanationDiv.innerHTML = `第${groupIndex + 25}题，第${questionIndex + 1}小题：【<font color="red">未填写</font>】，正确答案：【<font color="red">${questionObj.answer}</font>】`;
          contentElement.appendChild(explanationDiv);
        }
      }
    });
  });

  // 处理未选择的选择题，将未选择的题视为错误，计0分并记录未选择情况
  randomSelectedQuestions.forEach((questionObj, index) => {
    const userChoice = document.querySelector(`input[name='question${index}']:checked`);
    if (!userChoice) {
      const explanationDiv = document.createElement('div');
      explanationDiv.innerHTML = `第${index + 1}题：【<font color="red">未选择</font>】，正确答案：【<font color="red">${questionObj.answer.substring(0, 1)}</font>】`;
      contentElement.appendChild(explanationDiv);
    }
  });

  const totalScore = fillInScoreTotal + multipleChoiceScoreTotal;
  const totalCorrect = fillInCorrectCount + multipleChoiceCorrectCount;
  const totalQuestions = fillInTheBlankQuestionTotal + multipleChoiceQuestions.length;

  resultContainer.style.display = 'block';

  if (totalCorrect === totalQuestions) {
    contentElement.innerHTML = `<font color='red'>你太棒了！总分：${totalScore}</font>`;
  } else {
    contentElement.innerHTML = `你答对了【<font color='red'>${totalCorrect}</font>】个问题，总分：【<font color='red'>${totalScore}</font>】，答案解析如下：<hr>`;

    randomSelectedQuestions.forEach((questionObj, index) => {
      const userChoice = document.querySelector(`input[name='question${index}']:checked`);
      if (userChoice) {
        const correctAnswer = questionObj.answer;
        if (userChoice.value !== correctAnswer) {
          const explanationDiv = document.createElement('div');
          explanationDiv.innerHTML = `第${index + 1}题，你的选择:【<font color="red">${userChoice.value.substring(0, 1)}</font>】,正确答案：【<font color="red">${correctAnswer.substring(0, 1)}</font>】`;
          contentElement.appendChild(explanationDiv);
        }
      } else {
        const explanationDiv = document.createElement('div');
        explanationDiv.innerHTML = `第${index + 1}题：【<font color="red">未选择</font>】，正确答案：【<font color="red">${questionObj.answer.substring(0, 1)}</font>】`;
        contentElement.appendChild(explanationDiv);
      }
    });

    randomFillQuestions.forEach((group, index) => {
      group.questions.forEach((questionObj, input_index) => {
        const answerArray = Array.isArray(questionObj.answer) ? questionObj.answer : [questionObj.answer];
        const idMatches = questionObj.question.match(/id='([^']+)'/g);
        if (idMatches) {
          for (let i = 0; i < idMatches.length; i++) {
            let userAnswer = document.getElementById(idMatches[i].substring(4, idMatches[i].length - 1)).value.replace(/^\s+|\s+$/g, "");
            userAnswer = replaceChinesePunctuationToEnglish(userAnswer).replace(/</g, '&lt;').replace(/>/g, '&gt;');
            let correctAnswer = replaceChinesePunctuationToEnglish(answerArray[i]).toLowerCase();
            correctAnswer = correctAnswer.replace(/^\s+|\s+$/g, "");
            correctAnswer = correctAnswer.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            const correctAnswerArray = correctAnswer.split("或");
            if (correctAnswerArray.indexOf(userAnswer.toLocaleLowerCase()) == -1) {
              const explanationDiv = document.createElement('div');
              // 使用模板字符串优化innerHTML的生成
              explanationDiv.innerHTML = `第${index + 25}题，第${input_index + 1}小题第${i + 1}空:你的填写的是【<font color="red">${userAnswer}</font>】正确答案【<font color="red">${correctAnswer}</font>】`;
              contentElement.appendChild(explanationDiv);
            }
          }
        }
      });
    });
    submitBtn.style.display = 'none';
    submitTip.style.display = 'none';
    stopTimer()
  }
}

// 主函数，调用其他函数完成整体检查答案的流程
function checkAnswers() {
  // 首先检查填空题的答题情况
  const {
    allFillInAnswered,
    unansweredFillInQuestions
  } = checkFillInTheBlankAnswerStatus();
  // 然后检查选择题的答题情况
  const {
    allMultipleChoiceAnswered,
    unSelectedOptions
  } = checkMultipleChoiceAnswerStatus();

  if (!allFillInAnswered || !allMultipleChoiceAnswered) {
    showReminderMessage(allFillInAnswered, unansweredFillInQuestions, allMultipleChoiceAnswered, unSelectedOptions);
  } else {
    calculateAndDisplayResult();
  }
}

//停止计时器
function stopTimer() {
  clearInterval(timer);
}
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
    '＝': '=',
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

  const submitTip = document.getElementById('submitTip');
  submitBtn.disabled = true;
  // 设置定时器，15分钟（15 * 60 * 1000毫秒）后将按钮设置为可用状态
  setTimeout(function () {
    submitTip.innerHTML = '答题时间超过15分钟允许提交。';
    submitBtn.disabled = false;
  }, 10 * 60 * 1000);

  submitBtn.addEventListener('click', checkAnswers);
  startTime = new Date().getTime();
  timer = setInterval(function () {
    updateCountdownDisplay();
    let elapsedTime = new Date().getTime() - startTime;
    if (elapsedTime >= timeLimit) {
      clearInterval(timer);
      // 时间到了，修改checkAnswers函数的调用方式，传递参数表示不进行答案为空验证
      calculateAndDisplayResult();
    }
  }, 1000);
});
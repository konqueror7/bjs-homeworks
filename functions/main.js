'use strict';
//Решение к задачам домашнего задания по теме "Функции и объекты"
//Задача №1
showSolutionsMessage( 1, 2, 3 )
showSolutionsMessage( 7, 20, -3 )
showSolutionsMessage( 2, 4, 2 )

function showSolutionsMessage( a, b, c ) {
  let result = getSolutions(a, b, c);

  function getSolutions(a, b, c) {
    let D = b**2 - 4*a*c;
    if (D < 0) {
      return {
        D
      }
    }
    else  if (D === 0) {
      let x1 = -b / 2*a;
      return {
        roots: x1,
        D
      }
    }
    else if (D > 0) {
      let sqrtD = Math.sqrt(D);
      let x1 = (-b + sqrtD) / 2*a;
      let x2 = (-b - sqrtD) / 2*a;
      return {
        roots: [x1, x2],
        D
      }
    }
  }
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`)
  if (result.D < 0) {
    console.log('Уравнение не имеет вещественных корней');
  }
  else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
  }
  else {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

//Задача №2
console.log(getPersonData({
  aaa: 0,
  bbb: 0
}));
console.log(getPersonData({
  aaa: 0,
  bbb: 1
}));
console.log(getPersonData({
  aaa: 1,
  bbb: 0
}));
console.log(getPersonData({
  aaa: 1,
  bbb: 1
}));

function getPersonData(secretData) {
  function decodingFullName(secretDataProperty) {
    if (secretDataProperty === 0) {
      return 'Родриго';
    }
    else if (secretDataProperty === 1) {
      return 'Эмильо';
    }
  }
  return {
    firstName: decodingFullName(secretData.aaa),
    lastName: decodingFullName(secretData.bbb)
  }
}

//Задача №3
console.log(getAverageScore({
  algebra: [2, 4, 5, 2, 3, 4],
  geometry: [2, 4, 5],
  russian: [3, 3, 4, 5],
  physics: [5, 5],
  music: [2, 2, 5],
  english: [4, 4, 3],
  poetry: [5, 3, 4],
  chemistry: [2],
  french: [4, 4]
}));

function getAverageScore(Data) {
  let averageScore = new Object;

  let generalAverage = 0;
  let generalSumMark = 0;

  function knowledgeCounter( start = 0 ) {
    for (let schoolKnowledge in Data) {
      start++;
    }
      return start;
  }

  let knowledgeCount = knowledgeCounter( 0 );

  let averageMark = function(marksArray) {
    let sumMarks = 0;
    for (let mark of marksArray) {
      sumMarks += mark;
    }
    return sumMarks / marksArray.length;
  };

  for (let marksSchoolKnowledge in Data) {
    averageScore[marksSchoolKnowledge] = averageMark(Data[marksSchoolKnowledge]);
    generalSumMark += averageScore[marksSchoolKnowledge];
  }

  generalAverage = generalSumMark / knowledgeCount;
  averageScore.average = generalAverage;

  return averageScore;
}

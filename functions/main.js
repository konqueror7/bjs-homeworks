'use strict';
//Решение к задачам домашнего задания по теме "Функции и объекты"

//Задача №1
showSolutionsMessage( 1, 2, 3 )
showSolutionsMessage( 7, 20, -3 )
showSolutionsMessage( 2, 4, 2 )

/*Функция, показывающая результаты вычисления
корней квадратного уравнения
*/
function showSolutionsMessage( a, b, c ) {
  let result = getSolutions(a, b, c);

//Функция, вычисляющая корни квадратного уравнени
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

  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);

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

//Функция, декодирующая зашифрованное содержимое секретных данных
function getPersonData(secretData) {
  function decodeFullName(secretDataProperty) {
    if (secretDataProperty === 0) {
      return 'Родриго';
    }
    else if (secretDataProperty === 1) {
      return 'Эмильо';
    }
  }

  return {
    firstName: decodeFullName(secretData.aaa),
    lastName: decodeFullName(secretData.bbb)
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

/*Функция вычисляющая средние арифметические оценки
по каждому школьному предмету
*/
function getAverageScore(Data) {
//Создание объекта, содержащего средние арифметические оценки
  let averageScore = {};

// Функция подсчета количества школьных предметов, по которым есть оценки
  function countKnowledge (counter = 0) {
    for (let schoolKnowledge in Data) {
      counter++;
    }
      return counter;
  }

  //Расчет средней арифметической оценки по одному из предметов
  let countAverageMark = function(marksArray) {
    let sumMarks = 0;
    for (let mark of marksArray) {
      sumMarks += mark;
    }
    return sumMarks / marksArray.length;
  };

  //Функция вычисления общей суммы оценок по всем предметам
  function countGeneralSumMark(sumCount = 0) {
    for (let marksSchoolKnowledge in Data) {
      averageScore[marksSchoolKnowledge] = countAverageMark(Data[marksSchoolKnowledge]);
      sumCount += averageScore[marksSchoolKnowledge];
    }
    return sumCount;
  }

  //Вычисление средней арифметической оценки по всем предметам
  let generalAverage = countGeneralSumMark(0) / countKnowledge(0);

  //Создание свойства
  averageScore.average = generalAverage;

  return averageScore;
}

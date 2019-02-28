

function calculateQuadraticEquation() {
  let a = +window.a.value;
  let b = +window.b.value;
  let c = +window.c.value;
  let result = getResult(a, b, c);
  window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
  let span = window.result;
  span.textContent = "х = "+result;
}

function getResult(a, b, c) {
  //Включение режима совместимости ES-6
  'use strict';
  //Объявление и вычисление дискриминанта квадратного трехчлена
  let discriminantSquareTriple = (b**2) - (4*a*c);
  let x;
  let x1;
  let x2;
  //Возможные варианты нахождения решений в зависимости от значения дискриминанта
  switch (true) {
    //Когда дискриминант больше нуля
    case discriminantSquareTriple > 0 :
      let sqrtDiscriminantSquareTriple = Math.sqrt(discriminantSquareTriple);
      x1 = (-b + sqrtDiscriminantSquareTriple) / 2*a;
      x2 = (-b - sqrtDiscriminantSquareTriple) / 2*a;
      x = [x1, x2];
      console.log(x);
      break;
      //Когда дискриминант меньше нуля
    case discriminantSquareTriple < 0:
      x = NaN;
      console.log('Решения нет!');
      break;
      //Когда дискриминант равен нулю
    case discriminantSquareTriple === 0:
      x = (-b) / (2 * a);
      console.log('x = ' + x);
      break;
  }

  return x;
}

function calculateDrinkTask() {
  let name = window.personName.value;
  let dateOfBirthday = new Date(window.dateOfBirthday.value);
  let drink = askDrink(name, dateOfBirthday);
  window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday) {
    //Вычисление года из даты рождения клиента
    let birthdayYear = dateOfBirthday.getFullYear();
    let today = new Date();
    //Вычисление года из текущей даты клиента
    let currentYear = today.getFullYear();
    //Вычисление возраста клиента в полных года
    let age = currentYear - birthdayYear;
    //Выбор варианта ответа в зависимости от возраста клиента
    switch (true) {
      //Старше 18 лет
      case age > 18:
        result = `Не желаете ли олд-фэшн, ${name}?`;
        console.log(result);
        break;

      //Моложе 18 лет
      default:
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
        console.log(result);
        break;
    }

    console.log(result);
    return result;
}

function calculateAverageRating() {
    let marks = window.marks.value.split(" ").map(Number);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    /*
    * Проверка количества оценок в массиве marks
    * и выведение предупреждения если значение меньше 5
    */
    if (marks.length > 5) {
      console.log(`В массиве ${marks.length} оценок`);
    }

    //Перенос первых пяти оценок в новый массив
    let firstFiveMarks = marks.slice(0, 5);
    //Объявление средней арифметической оценки
    let averageMark;
    //Объявление и инициализация общей суммы оценок
    let sumMarks = 0;

    //Вычисление общей суммы оценок
    for (firstFiveMark of firstFiveMarks) {
       sumMarks += firstFiveMark;
    }

    //Вычисление средней арифметической оценки
    averageMark = sumMarks / firstFiveMarks.length;
    console.log(averageMark);
    return averageMark;
}

function initCheckBirthday() {
  const birthday = document.getElementById('birthday').value;

  const result = checkBirthday(birthday) ? "Да" : "Нет";

  document.getElementById('disclaimer').innerHTML = result;
}

function checkBirthday(birthday) {
  //Определяем текущую дату в виде количества милисекунд, прошедших с 00:00:00 01-01-1970 (UTC)
  let now = Date.now();
  //Создание переменной содержащей результат преобразования даты рождения в формат ISO 86001
  let dateOfBirth = new Date(birthday);
  // перезапись значения переменной birthday в виде количества милисекунд
  birthday = +dateOfBirth;
  //Вычисление возраста в милисекундах
  let diff = now - birthday;
  /*Каленарный год немного короче солнечного. в течение 4-х лет накапливается
  ошибка, которая компенсируется добавлением дополнительного дня в феврале.
  На каждый год приходится 1/4 суток или 2160000 мс. Поэтому за число милисекунд
  в году следует принять результат выражения 24 * 60 * 60 * 1000 * 365 + 2160000
  */
  let durationYearMilliseconds = 24 * 60 * 60 * 1000 *365 + 2160000;

  //Вычисление возраста в годах с дробной частью
  let age = diff / durationYearMilliseconds;

  console.log(`
    Текущая дата ${now} \n
    День рождения ${birthday} \n
    Возраст ${age}
    `);
  /*Сравнение возраста с возрастным ограничением старше 18 лет
  и передача во внешнее окружение (в константу result) значения логического типа true или false
  */
  return (age > 18);
}

function initPrintAnimalSound() {
  const animal = {
      sound: 'grrrr',
  };

  const result = getAnimalSound(animal);

  document.getElementById('sound').innerHTML = result;
}

function getAnimalSound(animal) {
  //Создание переменной, инициализированной значением свойства sound объекта animal
  let sound = animal.sound;
  console.log(`Звук ${sound}`);
  //Передача в константу result результата проверки значения переменной sound
  return  sound.valueOf() == 'undefined' ? null : sound;
}

function initCalculateStatement() {
  for (let idx = 0; idx < 3; idx++) {
    const marks = document.getElementById('learner-' + idx).value.split(',');
    console.log(marks);
    const average = getAverageMark(marks);
    document.getElementById('learner-' + idx + '-average').innerHTML = average;
  }
}

function getAverageMark(marks) {
  /*Создание и инициализация переменной,
  содержащей значение общего количества баллов ученика
  в числовом формате
  */
  let totalRating = 0;

  //Вычисление общего количества баллов ученика
  for (mark of marks) {
    /*Добавление к значению переменной результата
    преобразования строкового значения элемента индексного массива
    */
    totalRating += parseInt(mark);
  }

  //Вычисление среднего арифметического значения оценки и округление до ближайшего целого числа
  let roundedAverage = Math.round(totalRating / marks.length)

  //Возврат во внешнее окружение округленного значения среднего арифметического
  return roundedAverage;
}

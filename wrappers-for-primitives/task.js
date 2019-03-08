function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;
    console.log(date);
    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  /*Создание ассоциативного массива из переменных, полученных функцией в качестве аргументов:
  Условия кредита creditTerms:
   percent - процентной ставки,
   contribution - первоначального взноса,
   amount - общей суммы кредита
  Период кредитования - date.
  */
  let TotalMortgage = {
    creditTerms: {
      percent: percent,
      contribution: contribution,
      amount: amount,
    },
    date: date
  };

  //Проверка значений условий кредита creditTerms на соотвествие целочисленному типу даных
  for (let key in TotalMortgage.creditTerms) {
    if (parseInt(TotalMortgage.creditTerms[key]) !== parseInt(TotalMortgage.creditTerms[key])) {
      return totalAmount = `Параметр ${key} содержит неправильное значение ${TotalMortgage.creditTerms[key]}`;
    }
  }

  //Определние текущей даты в стандартном формате
  let currentDate = new Date();
  //Преобразование даты окончания кредитования из строки в экземпляр объекта Date
  let dateRepayment = new Date(TotalMortgage.date);
  //Вычисление периода кредитования в месяцах
  let repaymentPeriod = (dateRepayment.getFullYear() - currentDate.getFullYear()) * 12 - (currentDate.getMonth()+1) + (dateRepayment.getMonth()+1);

  //Преобразование строковых значений усовий кредитования в целочисленные
  let percentFraction = parseInt(TotalMortgage.creditTerms.percent) / 100;
  let downPayment = parseInt(TotalMortgage.creditTerms.contribution);
  let loanAmount = parseInt(TotalMortgage.creditTerms.amount);

  //Вычисление ежемесячной выплаты за кредит
  let monthlyPayment = (loanAmount * (percentFraction + percentFraction / (((1 + percentFraction)**repaymentPeriod) - 1))).toFixed(2);

  //Вычисление общей суммы выплат по кредиту
  totalAmount = (monthlyPayment * repaymentPeriod - downPayment).toFixed(2);

  //Вывод информации о кредите в консоль
  console.log(`
    Текушая дата ${currentDate} \n
    Дата возврата ${dateRepayment} \n
    Период ${repaymentPeriod} \n
    Процент ${percentFraction} \n
    Ежемесячный платеж ${monthlyPayment} \n
    Общая сумма ${totalAmount}
    `);

    //Передача результата вычисления переменной totalAmount во внешнее окружение
    return totalAmount;
}

function sayHello() {
  let name = window.personName.value;
  let greeting = getGreeting(name);
  let span = window.helloResult;
  span.textContent = greeting;
}

function getGreeting(name) {
  //Объявление переменной, в которую будет сохраняться имя посетителя
  let userName;

  //Запись в переменную userName значения 'Аноним' если она имеет значения '', 'null', 'undefined'
  if (!name || name.valueOf() == 'null' || name.valueOf() == 'undefined') {
    userName = 'Аноним';
  }
  // Во всех остальных случаях присвоение введенного значения
  else {
    userName = name;
  }
  //Шаблон вывода приветсвия
  greeting = `Привет, мир! Меня зовут ${userName}.`;
  //Вывод приветствия в консоль
  console.log(greeting);
  //передача приветствия во внешнее окружение
  return greeting;
}

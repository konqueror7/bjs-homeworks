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
  let TotalMortgage = {
    percent: percent,
    contribution: contribution,
    amount: amount
  };

  for (let key in TotalMortgage) {
    if (parseInt(TotalMortgage[key]) !== parseInt(TotalMortgage[key])) {
      return totalAmount = `Параметр ${key} содержит неправильное значение ${TotalMortgage[key]}`;
    }
  }

  let currentDate = new Date();
  let dateRepayment = new Date(date);
  let repaymentPeriod = (dateRepayment.getFullYear() - currentDate.getFullYear()) * 12 - (currentDate.getMonth()+1) + (dateRepayment.getMonth()+1);
  let percentFraction = parseInt(percent) / 100;
  let downPayment = parseInt(contribution);
  let loanAmount = parseInt(amount);
  let monthlyPayment = (loanAmount * (percentFraction + percentFraction / (((1 + percentFraction)**repaymentPeriod) - 1))).toFixed(2);
  totalAmount = (monthlyPayment * repaymentPeriod - downPayment).toFixed(2);
  // repaymentPeriod = currentDate.getFullYear();

  console.log(`
    Текушая дата ${currentDate} \n
    Дата возврата ${dateRepayment} \n
    Период ${repaymentPeriod} \n
    Процент ${percent} \n
    Ежемесячный платеж ${monthlyPayment} \n
    Общая сумма ${totalAmount}
    `);
    // код для задачи №1 писать здесь
    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
}

'use strict'
class StudentLog {
  constructor(name) {
    this.name = name;
    this.gradesSubjects = [];
  }

  getName() {
    console.log(`Студент - ${this.name}`);
  }

  search(subject) {
    return this.gradesSubjects.find(function(gradesSubject) {
      return gradesSubject.subject === subject;
    });
  }

  addGrade(grade, subject) {
    const gradesSubject = this.search(subject);

    if (parseInt(grade) !== parseInt(grade) || parseInt(grade) > 5) {
      console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}.\nМожно вводить только целое число от 1 до 5`);
    }
    else {
      if (gradesSubject) {
        gradesSubject.grades.push(parseInt(grade));
        return gradesSubject.grades.length;
      }

      this.gradesSubjects.push({subject, grades: [parseInt(grade)]});
    }

    return  this.search(subject).grades.length;
    // if (parseInt(grade) !== parseInt(grade) || parseInt(grade) > 5) {
    //   console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}.\nМожно вводить только целое число от 1 до 5`);
    // }
    // else {
    //   if (subject in this.gradesSubjects) {
    //     this.gradesSubjects[subject].push(grade);
    //   }
    //   else {
    //     this.gradesSubjects[subject] = [];
    //     this.gradesSubjects[subject].push(grade);
    //   }
    // }
    // return this.gradesSubjects[subject].length;
    // return this.gradesSubjects.[subject].[grades].length;
  }

  getAverageBySubject(subject) {
    const gradesSubject = this.search(subject);
    if (!gradesSubject) {
      return 0;
    }

    let sum = 0;
    for (let rating of gradesSubject.grades) {
      sum += rating;
    }

    return sum / gradesSubject.grades.length;
  }

  getTotalAverage() {
    let totalAverage = 0;
    let gradesCount = 0;

    for (let gradesSubject of this.gradesSubjects) {
      gradesSubject.grades.forEach(function(item) {
        totalAverage += item;
        gradesCount++;
      });
    }

    if (totalAverage === 0) {
      return 0;
    }
    else {
      return totalAverage / gradesCount;
    }

  }

  getGradesBySubject(subject) {
    const gradesSubject = this.search(subject);
    if (!gradesSubject) {
      return [];
    }
    return console.log(gradesSubject.grades);
  }

  getGrades() {

  }

}

const log = new StudentLog('Василий Теркин');
log.getName();
// console.log(log);
// log.addGrade(5, 'Геометрия');
// log.addGrade(5, 'Геометрия');
// console.log(log.addGrade(3, 'Тригонометрия'));
// log.addGrade('5', 'География');
// log.addGrade('3', 'География');
// log.addGrade('4', 'Геометрия');
console.log(log.addGrade('5', 'Geography'));
console.log(log.addGrade('5', 'Geography'));
console.log(log.addGrade('3', 'Ariphmetic'));
console.log(log.addGrade('4', 'Ariphmetic'));
// console.log(log.addGrade('24', 'Арифметика'));
// console.log(log.addGrade('ОТлично!', 'Арифметика'));
console.log(log.getAverageBySubject('Ariphmetic'));
console.log(log.getTotalAverage());
// console.log(log.addGrade('25', 'Тригонометрия'));
// console.log(log.getGrades());
console.log(log);

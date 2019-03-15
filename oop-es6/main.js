'use strict'
class StudentLog {
  constructor(name) {
    this.name = name;
    this.gradesSubjects = {};
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
    if (parseInt(grade) !== parseInt(grade) || parseInt(grade) > 5) {
      console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}.\nМожно вводить только целое число от 1 до 5`);
      if (subject in this.gradesSubjects) return this.gradesSubjects[subject].length
      else return 0;
    }
    else {
      if (subject in this.gradesSubjects) {
        this.gradesSubjects[subject].push(parseInt(grade));
        return this.gradesSubjects[subject].length;
      }
      this.gradesSubjects[subject] = [];
      this.gradesSubjects[subject].push(parseInt(grade));
      return this.gradesSubjects[subject].length;
    }
  }

  getAverageBySubject(subject) {
    // const gradesSubject = this.search(subject);
    if (!this.gradesSubjects[subject]) {
      return 0;
    }

    let sum = 0;
    for (let i = 0; i < this.gradesSubjects[subject].length; i++) {
      sum += this.gradesSubjects[subject][i];
    }

    return sum / this.gradesSubjects[subject].length;
  }

  getTotalAverage() {
    let totalAverage = 0;
    let totalCount = 0;
    for (let key in this.gradesSubjects) {
      this.gradesSubjects[key].forEach(function(item) {
        totalAverage += item;
      });
      totalCount += this.gradesSubjects[key].length;
    }
    if (totalAverage === 0) {
      return 0;
    }
    return totalAverage / totalCount;
  }

  getGradesBySubject(subject) {
    //const gradesSubject = this.search(subject);
    if (!this.gradesSubjects[subject]) {
      return [];
    }
    return this.gradesSubjects[subject];
  }

  getGrades() {
    if (!this.gradesSubjects) {
      return [];
    }
    return this.gradesSubjects;
  }

}

const log = new StudentLog('Василий Теркин');
log.getName();
console.log(log.addGrade('5', 'geography'));
console.log(log.addGrade('5', 'geography'));
console.log(log.addGrade('3', 'ariphmetic'));
console.log(log.addGrade('4', 'ariphmetic'));
console.log(log.addGrade('24', 'ariphmetic'));
console.log(log.addGrade('ОТлично!', 'ariphmetic'));
console.log(log.addGrade('25', 'geography'));
console.log(log.getAverageBySubject('ariphmetic'));
console.log(log.getTotalAverage());
console.log(log.getGradesBySubject('ariphmetic'));
console.log(log.getGradesBySubject('math'));
console.log(log.getGrades());
// console.log(log);

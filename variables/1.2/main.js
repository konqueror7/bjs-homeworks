let algebra = 5;
let geography = 4;
let physics = 4;

let subjectsRatings = [algebra, geography, physics];
let subjectsRatingsSum = 0;

for (var i = 0; i < subjectsRatings.length; i++) {
  subjectsRatingsSum += subjectsRatings[i];
}

let averageRatings = subjectsRatingsSum / subjectsRatings.length;

console.log('Средняя оценка по всем предметам - ' + averageRatings);

'use strict'
class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.initDurability = durability;
    this.range = range;
  }

  takeDamage(damage) {
    let longevity = this.durability - damage;
    longevity < 0 ? this.durability = 0 : this.durability = longevity;
  }

  getDamage() {
   if (this.durability >= (this.initDurability * 0.3)) {
     return this.attack;
   }

   else if (this.durability <= 0) {return 0;}
   else {return this.attack / 2;}
  }

  isBroken() {
   if (this.durability > 0) {return false} else {return true}
  }
}


class Arm extends Weapon {
  constructor(name = 'Рука', attack = 1, durability = Infinity, range = 1) {
    super(name, attack, durability, range);
  }
}

class Bow extends Weapon {
  constructor(name = 'Лук', attack = 10, durability = 200, range = 3) {
    super(name, attack, durability, range);
  }
}

class LongBow extends Bow {
  constructor(name = 'Длинный лук', attack = 15, durability, range = 4) {
    super(name, attack, durability, range);
  }
}

class Sword extends Weapon {
  constructor(name = 'Меч', attack = 25, durability = 500, range = 1) {
    super(name, attack, durability, range);
  }
}

class Axe extends Sword {
  constructor(name = 'Секира', attack = 27, durability = 800, range) {
    super(name, attack, durability, range);
  }
}

class Knife extends Weapon {
  constructor(name = 'Нож', attack = 5, durability = 300, range = 1) {
    super(name, attack, durability, range);
  }
}

class Staff extends Weapon {
  constructor(name = 'Посох', attack = 8, durability = 300, range = 2) {
    super(name, attack, durability, range);
  }
}

class StormStaff extends Staff {
  constructor(name = 'Посох Бури', attack = 10, durability, range = 3) {
    super(name, attack, durability, range);
  }
}

class Player {
  constructor() {
    this.life = 100;
    this.magic = 20;
    this.speed = 1;
    this.attack = 10;
    this.agility = 5;
    this.luck = 10;
    this.description = 'Игрок';
    this.weapon = new Arm;
    this.name;
    this.position = 0; //HW #3
  }

  getLuck() {
    let randomNumber = Math.random() * 100;
    return (randomNumber + this.luck) / 100;
  }

  getDamage(distance) {
    const weaponDamage = this.weapon.getDamage();
    if (distance > this.weapon.range) {
      return 0;
    }
    else {
      return (this.attack + weaponDamage) * this.getLuck() / distance;
    }
  }

  takeDamage(damage) {
    if (this.life > damage) {
      this.life -= damage;
    }
    else {
      this.life = 0;
    }
  }

  isDead() {
    return this.life === 0;
  }

  //Homework #3 "RPG-battle" metods
  //Смещение влево
  moveLeft(distance) {
    if (distance <= this.speed) {
      this.position -= distance;
    }
    else {
      this.position -= this.speed;
    }
  }

  //Смещение вправо
  moveRight(distance) {
    if (distance <= this.speed) {
      this.position += distance;
    }
    else {
      this.position += this.speed;
    }
  }

  move(distance) {
    if (distance < 0) {
      this.moveLeft(-distance);
    }
    else {
      this.moveRight(distance);
    }
  }

  isAttackBlocked() {
    if (this.getLuck() > (100 - this.luck) / 100) {
      return true;
    }
    else {
      return false;
    }
  }

  dodged() {
    if (this.getLuck() > ((100 - this.agility - this.speed * 3) / 100)) {
      return true;
    }
    else {
      return false;
    }
  }

  takeAttack(damage) {
    if (this.isAttackBlocked()) {
      this.weapon.takeDamage(damage);
    }
    else if (this.dodged()) {
      this.takeDamage(0);
    }
    else {
      this.takeDamage(damage);
    }
  }

  checkWeapon() {
    if (this.weapon.isBroken()) {
      this.weapon = this.weaponReserve.shift();
    }
  }

  tryAttack(enemy) {
    let distance;
    if (this.position > enemy.position) {
      distance = this.position - enemy.position;
    }
    else if (this.position < enemy.position) {
      distance = enemy.position - this.position;
    }
    console.log(distance);
  }

}

class Warrior extends Player {
  constructor(magic, agility, luck) {
    super();
    this.life = 120;
    this.initLife = 120;
    this.speed = 2;
    this.attack = 10;
    this.description = 'Воин';
    this.weapon = new Sword;
    this.weaponReserve = [new Knife, new Arm];
    this.name;
  }

  takeDamage(damage) {
    if ((this.life - damage) > this.initLife * 0.5 || this.magic <= 0) {
      super.takeDamage(damage);
    }
    if ((this.life - damage) < this.initLife * 0.5 && this.getLuck() > 0.8) {
      if (this.magic <= damage) {
        this.magic = 0;
      }
      else {
        this.magic -= damage;
      }
    }
  }
}

class Dwarf extends Warrior {
  constructor(magic, speed, agility) {
    super();
    this.life = 130;
    this.attack = 15;
    this.luck = 20;
    this.description = 'Гном';
    this.weapon = new Axe;
    this.name;
    this.countDamage = 0;
  }

  takeDamage(damage) {
    let endDamage = (damage / 2);
    this.countDamage++;
    if ((this.countDamage % 6) > 0 && this.getLuck() <= 0.5 ) {
      super.takeDamage(damage);
    }
    else {
      this.life = this.life - endDamage;
    }
  }
}

class Archer extends Player {
  constructor(speed, luck) {
    super();
    this.life = 80;
    this.magic = 35;
    this.attack = 5;
    this.agility = 10;
    this.description = 'Лучник';
    this.weapon = new Bow;
    this.weaponReserve = [new Knife, new Arm];
    this.name;
  }

  getDamage(distance) {
    const weaponDamage = this.weapon.getDamage();
    if (distance > this.weapon.range) {
      return 0;
    }
    else {
      return (this.attack + weaponDamage) * this.getLuck() * distance / this.weapon.range;
    }
  }
}

class Crossbowman extends Archer {
  constructor(magic, speed) {
    super();
    this.life = 85;
    this.attack = 8;
    this.agility = 20;
    this.luck = 15;
    this.description = 'Арбалетчик';
    this.weapon = new LongBow;
    this.name;
  }
}

class Mage extends Player {
  constructor(speed, luck) {
    super();
    this.life = 70;
    this.magic = 100;
    this.initMagic = 100;
    this.attack = 5;
    this.agility = 8;
    this.description = 'Маг';
    this.weapon = new Staff;
    this.weaponReserve = [new Knife, new Arm];
    this.name;
  }

  takeDamage(damage) {
    if (this.magic > this.initMagic * 0.5) {
      this.magic -= 12;
      if (this.life > damage) {
        this.life -= damage / 1.5;
      }
      else {
        this.life = 0;
      }
    }
    else {
      super.takeDamage(damage);
    }
  }

}

class Demiurge extends Mage {
  constructor(speed, agility) {
    super();
    this.life = 80;
    this.magic = 120;
    this.attack = 6;
    this.luck = 12;
    this.description = 'Демиург';
    this.weapon = new StormStaff;
    this.name;
  }

  getDamage(distance) {
    let weaponDamage;

    if (this.magic > 0 && this.getLuck() > 0.6) {
      weaponDamage = this.weapon.getDamage() * 1.5;
    }
    else {
      weaponDamage = this.weapon.getDamage();
    }

    if (distance > this.weapon.range) {
      return 0;
    }
    else {
      return (this.attack + weaponDamage) * this.getLuck() / distance;
    }
  }

}

var player = new Warrior();
player.moveLeft(9);
console.log(player.position);
player.moveRight(1);
console.log(player.position);
player.moveRight(2);
console.log(player.position);
player.move(-2);
console.log(player.position);
player.move(-2);
console.log(player.position);
player.takeAttack(40);
console.log(player);



// const weapon = new Weapon ('Старый меч', 20, 100, 1);
// const myArm = new Arm ();
// const myBow = new Bow ();
// const myLongBow = new LongBow ();
// const myAxe = new Axe ();
// const mySword = new Sword ();
// const myStaff = new Staff ();
// const myStormStaff = new StormStaff ();
// console.log(player);
// const player = new Player ();
// player.name = 'Иван Демидов';
// myWarrior.weapon.takeDamage(600);
// myWarrior.weapon.checkWeapon;
// const myArcher = new Archer ();
// const myMage = new Mage ();

// weapon.takeDamage(5);
// myBow.takeDamage(150);
// console.log(weapon.durability);
// console.log(myBow.durability);
// console.log(myBow.getDamage());
// weapon.takeDamage(50);
// console.log(weapon.durability);
// console.log(weapon.getDamage(), weapon.durability, weapon.isBroken());
// console.log(myArm);
// console.log(myBow);
// console.log(myLongBow);
// console.log(mySword);
// console.log(myAxe);
// console.log(myStaff);
// console.log(myStormStaff);
// console.log(player);
// console.log(player.getLuck());
// console.log(player.getDamage(1));
// player.takeDamage(10);
// console.log(player.life);
// player.takeDamage(80);
// console.log(player.life);
// player.takeDamage(90);
// console.log(player.life);
// console.log(player.isDead());
// console.log(myArcher);
// console.log(myMage);

// const myWarrior = new Warrior ();
// console.log(myWarrior.life, myWarrior.magic);
// myWarrior.takeDamage(50);
// console.log(myWarrior.life, myWarrior.magic);
// myWarrior.takeDamage(20);
// console.log(myWarrior.life, myWarrior.magic);
// myWarrior.takeDamage(5);
// console.log(myWarrior.life, myWarrior.magic);
// myWarrior.takeDamage(7);
// console.log(myWarrior.life, myWarrior.magic);
// myWarrior.takeDamage(5);
// console.log(myWarrior.life, myWarrior.magic);
// myWarrior.takeDamage(22);
// console.log(myWarrior.life, myWarrior.magic);
// myWarrior.takeDamage(30);
// console.log(myWarrior.life, myWarrior.magic);

// const myMage = new Mage ();
// console.log(myMage.life, myMage.magic);
// myMage.takeDamage(50);
// console.log(myMage.life, myMage.magic);
// myMage.takeDamage(20);
// console.log(myMage.life, myMage.magic);
// myMage.takeDamage(5);
// console.log(myMage.life, myMage.magic);
// myMage.takeDamage(7);
// console.log(myMage.life, myMage.magic);
// myMage.takeDamage(5);
// console.log(myMage.life, myMage.magic);
// myMage.takeDamage(22);
// console.log(myMage.life, myMage.magic);
// myMage.takeDamage(30);
// console.log(myMage.life, myMage.magic);

// const myDwarf = new Dwarf ();
// myDwarf.countDamage = 11;
// console.log(myDwarf);
// myDwarf.takeDamage(10);
// console.log(myDwarf.countDamage, myDwarf.life, myDwarf.magic);
// myDwarf.takeDamage(10);
// console.log(myDwarf.countDamage, myDwarf.life, myDwarf.magic);
// myDwarf.takeDamage(10);
// console.log(myDwarf.countDamage, myDwarf.life, myDwarf.magic);
// myDwarf.takeDamage(10);
// console.log(myDwarf.countDamage, myDwarf.life, myDwarf.magic);
// myDwarf.takeDamage(10);
// console.log(myDwarf.countDamage, myDwarf.life, myDwarf.magic);
// myDwarf.takeDamage(10);
// console.log(myDwarf.countDamage, myDwarf.life, myDwarf.magic);
// myDwarf.takeDamage(10);
// console.log(myDwarf.countDamage, myDwarf.life, myDwarf.magic);

// const myDemiurge = new Demiurge ();
// console.log(myDemiurge.getDamage(3));
// myDemiurge.takeDamage(10);
// console.log(myDemiurge.life, myDemiurge.magic);
// myDemiurge.takeDamage(40);
// // console.log(myDemiurge);
// myDemiurge.takeDamage(40);
// // console.log(myDemiurge);
// myDemiurge.takeDamage(40);
// console.log(myDemiurge);
// myDemiurge.weapon.takeDamage(300);
// myDemiurge.weapon.takeDamage(100);
// myDemiurge.checkWeapon();
// console.log(myDemiurge.life, myDemiurge.magic);

// const myDwarf = new Dwarf ();
// const myCrossbowman = new Crossbowman ();
// const myDemiurge = new Demiurge ();
// myWarrior.name = 'Василий Бабушкин';
// const myArcher = new Archer ();
// const myMage = new Mage ();
// console.log(myWarrior);
// myWarrior.weapon.takeDamage(500)
// myWarrior.checkWeapon();
// console.log(myWarrior);
// myWarrior.weapon.takeDamage(300);
// myWarrior.takeDamage(100);
// myWarrior.checkWeapon();
// myWarrior.weapon.takeDamage(300);
// myWarrior.checkWeapon();
// myWarrior.weapon.takeDamage(300);
// myWarrior.checkWeapon();
// myWarrior.weapon.takeDamage(300);
// myWarrior.checkWeapon();
// console.log(myWarrior);
// console.log(myArcher);
// console.log(myArcher.getDamage(1));
// console.log(myMage);
// console.log(myDwarf);
// console.log(myCrossbowman);
// console.log(myDemiurge);

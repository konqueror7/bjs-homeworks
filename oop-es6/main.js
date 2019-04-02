'use strict'
class Weapon {
  constructor(options = {}) {
      this.name = options.name;
      this.attack = options.attack;
      this.durability = options.durability;
      this.initDurability = options.durability;
      this.range = options.range;
  }
  // constructor(options = {}) {
  //   const {
  //     name = name,
  //     attack = attack,
  //     durability = durability,
  //     initDurability = durability,
  //     range = range
  //     } = options;
  //   Object.assign(this, {
  //     name,
  //     attack,
  //     durability,
  //     initDurability,
  //     range
  //   });
  // }
  // constructor(name, attack, durability, range) {
  //   this.name = name;
  //   this.attack = attack;
  //   this.durability = durability;
  //   this.initDurability = durability;
  //   this.range = range;
  // }

  takeDamage(damage) {
    if (this.durability < damage) {
      this.durability = 0;
    }
    else if (this.durability > damage) {
      this.durability -= damage;
    }
    else if (this.durability === Infinity) {
      return;
    }
    // longevity < 0 ? this.durability = 0 : this.durability = longevity;
    // let longevity = this.durability - damage;
    // longevity < 0 ? this.durability = 0 : this.durability = longevity;
  }

  getDamage() {
   if (this.durability >= (this.initDurability * 0.3)) {
     return this.attack;
   }

   else if (this.durability <= 0) {return 0;}
   else {return this.attack / 2;}
  }

  isBroken() {
    return this.durability === 0;
   // if (this.durability > 0) {return false} else {return true}
  }
}


class Arm extends Weapon {
  constructor(options = {}) {
    super(options);
      this.name = options.name || 'Рука';
      this.attack = options.attack || 1;
      this.durability = Infinity;
      this.initDurability = this.durability;
      // this.durability = options.durability || Infinity;
      // this.initDurability = options.durability || this.durability;
      this.range = options.range || 1;
  }
}
// class Arm extends Weapon {
//   constructor(options = {name: 'Рука', attack: 1, durability: Infinity, range: 1}) {
//     super(options);
//     const {
//       name,
//       attack,
//       durability,
//       range
//     } = options;
//     Object.assign(this, {
//       name,
//       attack,
//       durability,
//       range
//     });
//   }
// }
// class Arm extends Weapon {
//   constructor(name = 'Рука', attack = 1, durability = Infinity, range = 1) {
//     super(name, attack, durability, range);
//   }
// }

class Bow extends Weapon {
  constructor(options = {}) {
    super(options);
      this.name = options.name || 'Лук';
      this.attack = options.attack || 10;
      this.durability = options.durability || 200;
      this.initDurability = options.durability || this.durability;
      this.range = options.range || 3;
  }
  // constructor(options = {name: 'Лук', attack: 10, durability: 200, range: 3}) {
  //   super(options);
  //   const {
  //     name,
  //     attack,
  //     durability,
  //     range
  //   } = options;
  //   Object.assign(this, {
  //     name,
  //     attack,
  //     durability,
  //     range
  //   });
  // }
}
// class Bow extends Weapon {
//   constructor(name = 'Лук', attack = 10, durability = 200, range = 3) {
//     super(name, attack, durability, range);
//   }
// }

class LongBow extends Bow {
  constructor(options = {}, durability) {
    super(options, durability);
      this.name = options.name || 'Длинный лук';
      this.attack = options.attack || 15;
      this.range = options.range || 4;
  }
  // constructor(options = {name: 'Длинный лук', attack: 15, range: 4}, durability) {
  //   super(options, durability);
  //   const {
  //     name,
  //     attack,
  //     range
  //   } = options;
  //   Object.assign(this, {
  //     name,
  //     attack,
  //     range
  //   });
  // }
}

// class LongBow extends Bow {
//   constructor(name = 'Длинный лук', attack = 15, durability, range = 4) {
//     super(name, attack, durability, range);
//   }
// }

class Sword extends Weapon {
  constructor(options = {name: 'Меч', attack: 25, durability: 500, range: 1}) {
    super(options);
      this.name = options.name || 'Меч';
      this.attack = options.attack || 25;
      this.durability = options.durability || 500;
      this.range = options.range || 1;
  }
  // constructor(options = {name: 'Меч', attack: 25, durability: 500, range: 1}) {
  //   super(options);
  //   const {
  //     name,
  //     attack,
  //     durability,
  //     range
  //   } = options;
  //   Object.assign(this, {
  //     name,
  //     attack,
  //     durability,
  //     range
  //   });
  // }
}
// class Sword extends Weapon {
//   constructor(name = 'Меч', attack = 25, durability = 500, range = 1) {
//     super(name, attack, durability, range);
//   }
// }

class Axe extends Sword {
  constructor(options = {name: 'Секира', attack: 27, durability: 800}, range) {
    super(options, range);
      this.name = options.name || 'Секира';
      this.attack = options.attack || 27;
      this.durability = options.durability || 800;
  }
  // constructor(options = {name: 'Секира', attack: 27, durability: 800}, range) {
  //   super(options, range);
  //   const {
  //     name,
  //     attack,
  //     durability
  //   } = options;
  //   Object.assign(this, {
  //     name,
  //     attack,
  //     durability
  //   });
  // }
}

// class Axe extends Sword {
//   constructor(name = 'Секира', attack = 27, durability = 800, range) {
//     super(name, attack, durability, range);
//   }
// }

class Knife extends Weapon {
  constructor(options = {}) {
    super(options);
      this.name = options.name || 'Нож';
      this.attack = options.attack || 5;
      this.durability = options.durability || 300;
      this.initDurability = options.durability || this.durability;
      this.range = options.range || 1;
  }
  // constructor(options = {name: 'Нож', attack: 5, durability: 300, range: 1}) {
  //   super(options);
  //   const {
  //     name,
  //     attack,
  //     durability,
  //     range
  //   } = options;
  //   Object.assign(this, {
  //     name,
  //     attack,
  //     durability,
  //     range
  //   });
  // }
}
// class Knife extends Weapon {
//   constructor(name = 'Нож', attack = 5, durability = 300, range = 1) {
//     super(name, attack, durability, range);
//   }
// }

class Staff extends Weapon {
  constructor(options = {}) {
    super(options);
    this.name = options.name || 'Посох';
    this.attack = options.attack || 8;
    this.durability = options.durability || 300;
    this.initDurability = options.durability || this.durability;
    this.range = options.range || 2;
  }
}
// class Staff extends Weapon {
//   constructor(name = 'Посох', attack = 8, durability = 300, range = 2) {
//     super(name, attack, durability, range);
//   }
// }

class StormStaff extends Staff {
  constructor(options = {}, durability) {
    super(options, durability);
    this.name = options.name || 'Посох Бури';
    this.attack = options.attack || 10;
    this.range = options.range || 3;
  }
}
// class StormStaff extends Staff {
//   constructor(name = 'Посох Бури', attack = 10, durability, range = 3) {
//     super(name, attack, durability, range);
//   }
// }

class Player {
  constructor(options = {}) {
    const {
      life = 100,
      magic = 20,
      speed = 1,
      attack = 10,
      agility = 5,
      luck = 10,
      description = 'Игрок',
      weapon = new Arm,
      name,
      position = 0
    } = options;
    Object.assign(this, {
      life,
      initLife: life,
      magic,
      initMagic: magic,
      speed,
      attack,
      agility,
      luck,
      description,
      weapon,
      name,
      position
    });
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
    if (this.life === 0) {
      return true;
    }
    else {
      return false;
    }
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

    console.log(`Позиция ${this.name} - ${this.position}, позиция ${enemy.name} - ${enemy.position}`);

    if (this.position > enemy.position) {
      distance = this.position - enemy.position;
    }
    else if (this.position < enemy.position) {
      distance = enemy.position - this.position;
    }
    else if (this.position === enemy.position) {
      distance = 0;
    }

    console.log(`Ранг оружия ${this.weapon.range}, дистанция ${distance}`);

    if (this.weapon.range < distance) {
      return;
    }
    // else {
      this.weapon.takeDamage(10 * this.getLuck());
      enemy.takeAttack(this.getDamage(distance));
    // }

    if (distance === 0) {
      enemy.moveRight(1);
      enemy.takeAttack(this.getDamage(distance + 1) * 2);
    }
  }

  chooseEnemy(players) {
    let enemy;
    let enemyLife = Infinity;
    let meNumb = players.indexOf(this);
    let i;
    for (i = 0; i < players.length; i++) {
      if (i === meNumb) {
        continue;
      }
      if (players[i].isDead()) {
        continue;
      }
      if (enemyLife > players[i].life && players[i].life > 0) {
        enemyLife = players[i].life;
        enemy = players[i];
      }
    }

    return enemy;
  }

  moveToEnemy(enemy) {
    let distance = enemy.position - this.position;
    this.move(distance);
  }

  turn(players) {
    this.checkWeapon();
    const enemy = this.chooseEnemy(players);
    if (enemy !== undefined) {
      this.moveToEnemy(enemy);
      this.tryAttack(enemy);
    }
    else {
      return console.log(`Победил ${this.name}`);
    }
  }

}

class Warrior extends Player {
  constructor(options = {position, name}, magic, agility, luck) {
    super(magic, agility, luck);
    const {
      life = 120,
      speed = 2,
      attack = 10,
      description = 'Воин',
      weapon = new Sword,
      weaponReserve = [new Knife, new Arm],
      position = position,
      name = name
    } = options;
    Object.assign(this, {
      life,
      initLife: life,
      speed,
      attack,
      description,
      weapon,
      weaponReserve,
      position,
      name
    });
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
  constructor(options = {position, name}, magic, speed, agility) {
    super(options, magic, speed, agility);
    const {
      life = 130,
      attack = 15,
      luck = 20,
      description = 'Гном',
      weapon = new Axe,
      countDamage = 0,
      position = position,
      name = name
    } = options;
    Object.assign(this, {
      life,
      initLife: life,
      attack,
      luck,
      description,
      weapon,
      countDamage,
      position,
      name
    });
  }

  takeDamage(damage) {
    let endDamage = (damage / 2);
    this.countDamage++;
    if ((this.countDamage % 6) > 0 && this.getLuck() <= 0.5 ) {
      super.takeDamage(damage);
    }
    else {
      this.life = this.life - endDamage;
      if (this.life < 0) {
        this.life = 0;
      }
    }
  }
}

class Archer extends Player {
  constructor(options = {position, name}, speed, luck) {
    super(speed, luck);
    const {
      life = 80,
      magic = 35,
      attack = 5,
      agility = 10,
      description = 'Лучник',
      weapon = new Bow,
      weaponReserve = [new Knife, new Arm],
      position = position,
      name = name
    } = options;
    Object.assign(this, {
      life,
      initLife: life,
      magic,
      initMagic: magic,
      attack,
      agility,
      description,
      weapon,
      weaponReserve,
      position,
      name
    });
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
  constructor(options = {position, name}, magic, speed) {
    super(options, magic, speed);
    const {
      life = 85,
      attack = 8,
      agility = 20,
      luck = 15,
      description = 'Арбалетчик',
      weapon = new LongBow,
      position = position,
      name = name
    } = options;
    Object.assign(this, {
      life,
      attack,
      agility,
      luck,
      description,
      weapon,
      position,
      name
    });
  }
}

class Mage extends Player {
  constructor(options = {position, name}, speed, luck) {
    super(speed, luck);
    const {
      life = 70,
      magic = 100,
      attack = 5,
      agility = 8,
      description = 'Маг',
      weapon = new Staff,
      weaponReserve = [new Knife, new Arm],
      position = position,
      name = name
    } = options;
    Object.assign(this, {
      life,
      initLife: life,
      magic,
      initMagic: magic,
      attack,
      agility,
      description,
      weapon,
      weaponReserve,
      position,
      name
    });
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
  constructor(options = {position, name}, speed, agility) {
    super(options, speed, agility);
    const {
      life = 80,
      magic = 120,
      attack = 6,
      luck = 12,
      description = 'Демиург',
      weapon = new StormStaff,
      position = position,
      name = name
    } = options;
    Object.assign(this, {
      life,
      magic,
      attack,
      luck,
      description,
      weapon,
      position,
      name
    });
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

let players = [
  // new Player({position: 10, name: 'Игрок 0'}),
  new Warrior({position: 10, name: 'Игрок 1'}),
  new Dwarf({position: 55, name: 'Игрок 2'}),
  new Archer({position: 0, name: 'Игрок 3'}),
  new Crossbowman({position: 20, name: 'Игрок 4'}),
  new Mage({position: 25, name: 'Игрок 5'}),
  new Demiurge({position: 15, name: 'Игрок 6'}),
  new Warrior({position: 21, name: 'Игрок 7'}),
  new Warrior({position: 12, name: 'Игрок 8'}),
];

let winner;


play(players);

console.log(winner);
// console.log(players);

function play(players) {
  let countStep = 1;
  while (players.length > 1) {
    console.log(`Ход ${countStep++}`);
    console.log('Сводная информация');
    for (let player of players) {
      console.log(`${player.description} ${player.name} (pos ${player.position})\: ${player.life}\/${player.magic}`, player.weapon);
    }
    for (let player of players) {
      console.log(`Ходит игрок ${player.name}`);
      player.turn(players);
    }

    for (let player of players) {
      if (player.isDead()) {
        console.log(`${player.description} ${player.name} погиб! R.I.P`);
        console.log(player);
      }
    }

    players = players.filter(function(player) {return player.isDead() !== true;});
  }
    if (players.length > 0) {
      winner = players.pop();
      console.log(`Победитель ${winner.name}`);
    }
    else {
      console.log('Вечная слава павшим героям!');
    }
  }


//Displaying Heading npm Packages
const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');

//Accepting users input npm package
const inquirer   = require('inquirer');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('JUNGLE  LIFE', { horizontalLayout: 'full' })
  )
);

let tigerCount = 0, monkeyCount = 0, snakeCount = 0;

//Super Class
class Animal{
		constructor(){
	    
			this.energy = 0;
		}
		makeSound(){
			console.log('sound');
			this.energy -= 3;
		}
		eatFood(sustenance){
			console.log('eating '+sustenance.name);
			this.energy += 5;
		}
		sleep(){
			console.log('sleep');
			this.energy += 10;
		}
}

//Sub classes
//Tiger
class Tiger extends Animal{
	constructor(){
		super();
		tigerCount++;
	}
	sleep(){
		console.log('tiger');
		this.energy += 5;
	}
	eatFood(sustenance){
		if(sustenance.name == "grain"){
			console.log('Cannot eat Grain.');
		}else{
			console.log('tiger');
			super.eatFood(sustenance);
		}
	}
	howManyTotalTigers(){
		return tigerCount;
	}
}





//Monkey
class Monkey extends Animal{
	constructor(){
		super();
		monkeyCount++;
	}
	makeSound(){
		console.log('monkey sound');
		this.energy -= 4;
		}
	eatFood(sustenance){
		console.log('monkey eating '+sustenance.name);
		this.energy += 2;
	}
	play(){
		console.log(this.energy>=8?'Oooo Oooo Oooo':"Monkey is too tired");
		this.energy -= 8;
	}

 	howManyTotalMonkeys(){
		return monkeyCount;
	}
}



//Snake
class Snake extends Animal{
	constructor(){
		super();
		snakeCount++;
	}
	howManyTotalSnakes(){
		return snakeCount;
	}
}


//Jungle declaration
class Jungle {
	constructor(animalArray){
		this.animals = animalArray==null?[]:animalArray; //set to empty, else prepopulate
		this.food = [];
	}
	soundOff(){
		this.animals.forEach(function(animal){
			animal.makeSound();
		});
	}
}


//ll Foods

class Food{
	constructor(name){
	   this.name = name;
	}
}

//Meat
class Meat extends Food{
	constructor(){
		super("meat");
	}
}


class Fish extends Food{
	constructor(){
		super("fish");
	}
}

//Bugs
class Bugs extends Food{
	constructor(){
		super("bugs");
	}
}

//Grain
class Grain extends Food{
	constructor(){
		super("grain");
	}
}

//Challenge 
let tiger = new Tiger();
let tiger2 = new Tiger();
let tiger3 = new Tiger();
tiger.sleep();
bugs = new Bugs();
let grain = new Grain();
tiger.eatFood(bugs);
tiger.eatFood(grain);
console.log("Number of Tigers in Jungle "+tigerCount);
console.log("Tiger's Energy Levels "+tiger.energy);
let monkey = new Monkey();
console.log("Number of Monkeys in Jungle "+monkeyCount);
monkey.sleep();
monkey.play();
tiger.sleep();
let snake = new Snake();
console.log("Number of Snakes in Jungle "+snakeCount);
let jungle = new Jungle([tiger, tiger2, tiger3, monkey, snake]);
jungle.soundOff();


const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;


function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
};

Pet.prototype.growUp = function () {
    if(!this.isAlive){
        throw new Error('Your pet is no longer alive');
    } else {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    }
};

Pet.prototype.walk = function (){
    if (!this.isAlive){
        throw new Error('Your pet is no longer alive')
    }
    if ((this.fitness + 4) <= MAXIMUM_FITNESS){
        this.fitness += 4;
    } else {
    this.fitness = MAXIMUM_FITNESS;
    }
};

Pet.prototype.feed = function () {
    if(!this.isAlive){
        throw new Error ('Your pet is no longer alive')
    }
    if((this.hunger - 3) <= MINIMUM_HUNGER){
        this.hunger = MINIMUM_HUNGER;
    } else {
    this.hunger -= 3;
    }
};

Pet.prototype.checkUp = function () {
const HUNGRY_PET = this.hunger >= 5;
const PET_NEEDS_WALK = this.fitness <= 3;
const HUNGRY_PET_RESPONSE = 'I am hungry';
const PET_NEEDS_WALK_RESPONSE = 'I need a walk';

    if (HUNGRY_PET && PET_NEEDS_WALK){
        return HUNGRY_PET_RESPONSE + ' AND ' + PET_NEEDS_WALK_RESPONSE;
    }
    if(PET_NEEDS_WALK) {
        return PET_NEEDS_WALK_RESPONSE;
    } 
    if(HUNGRY_PET){
        return HUNGRY_PET_RESPONSE;
    }
    return 'I feel great!'
};

module.exports = Pet;



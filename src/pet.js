const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const HUNGER_LIMIT = 5;
const FITNESS_LIMIT = 3;
const PET_NOT_ALIVE = 'Your pet is no longer alive';

class Pet{
    constructor(name){
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.fitness = 10;
        this.children = [];
    }
    
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }

    growUp() {
        if(!this.isAlive){
            throw new Error(PET_NOT_ALIVE);
        } else {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
        }
    }

    walk() {
        if (!this.isAlive){
            throw new Error(PET_NOT_ALIVE)
        }

        this.fitness = Math.min(this.fitness + 4, MAXIMUM_FITNESS)
    }

    feed() {
        if(!this.isAlive){
            throw new Error (PET_NOT_ALIVE)
        }
        this.hunger = Math.max(this.hunger- 3, MINIMUM_HUNGER)
    }

    checkUp() {
        const HUNGRY_PET_RESPONSE = 'I am hungry';
        const PET_NEEDS_WALK_RESPONSE = 'I need a walk';

        if(!this.isAlive){
            return PET_NOT_ALIVE
        }
        if (this.hunger >= HUNGER_LIMIT && this.fitness <= FITNESS_LIMIT){
            return HUNGRY_PET_RESPONSE + ' AND ' + PET_NEEDS_WALK_RESPONSE;
        }
        if(this.fitness <= FITNESS_LIMIT) {
            return PET_NEEDS_WALK_RESPONSE;
        } 
        if(this.hunger >= HUNGER_LIMIT){
            return HUNGRY_PET_RESPONSE;
        }
        return 'I feel great!'
    }

    adoptChild(child) {
        this.children.push(child)
    }

    haveBaby(bName) {
        const child = new Pet (bName);
        this.children.push(child)
    }

}

module.exports = Pet;

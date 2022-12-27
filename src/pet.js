const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
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
        if ((this.fitness + 4) <= MAXIMUM_FITNESS){
            this.fitness += 4;
        } else {
        this.fitness = MAXIMUM_FITNESS;
        }
    }

    feed() {
        if(!this.isAlive){
            throw new Error (PET_NOT_ALIVE)
        }
        if((this.hunger - 3) <= MINIMUM_HUNGER){
            this.hunger = MINIMUM_HUNGER;
        } else {
        this.hunger -= 3;
        }
    }

    checkUp() {
        const HUNGRY_PET = this.hunger >= 5;
        const PET_NEEDS_WALK = this.fitness <= 3;
        const HUNGRY_PET_RESPONSE = 'I am hungry';
        const PET_NEEDS_WALK_RESPONSE = 'I need a walk';

    if(!this.isAlive){
        return PET_NOT_ALIVE
    }
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



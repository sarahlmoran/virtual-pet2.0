const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it ('sets the name property', () => {
      const pet = new Pet ('Prince')
      expect(pet.name).toEqual('Prince');
    });

    it ('has an initial age of 0', () => {
      const pet = new Pet ('Prince')
      expect(pet.age).toEqual(0);
    });

    it ('has an initial hunger of 0', () => {
      const pet = new Pet ('Prince')
      expect(pet.hunger).toEqual(0);
    });

    it ('has an initial fitness of 10', () => {
      const pet = new Pet ('Prince')
      expect(pet.fitness).toEqual(10);
    });
  });

  describe('isAlive', () => {
    it('tells you if your pets fitness is 0 so has died', () => {
      const pet = new Pet ('Satan')
      pet.fitness= 0;

      expect(pet.isAlive).toBe(false);
    });

    it('tells you if your pets hunger is 10 or more so has died', () => {
      const pet = new Pet ('Satan')
      pet.hunger= 10;

      expect(pet.isAlive).toBe(false);
    });

    it('tells you if your pets age is 30 so has died', () => {
      const pet = new Pet ('Satan')
      pet.age= 30;

      expect(pet.isAlive).toBe(false);
    });

  });

  describe('growUp', () => {
    it ('increases age by 1', () => {
      const pet = new Pet ('Giermo')
      pet.growUp();

      expect(pet.age).toEqual(1);
    });

    it ('increases hunger by 5', () => {
      const pet = new Pet ('Laslo')
      pet.growUp();

      expect(pet.hunger).toEqual(5);

    });

    it ('decreases fitness by 3', () => {
      const pet = new Pet ('Nadya')
      pet.growUp();

      expect(pet.fitness).toEqual(7);
    });

    it('throws an error if the pet is not alive', () => {
      const pet = new Pet ('Satan');
      pet.age = 30;

      expect(() => pet.growUp()).toThrow('Your pet is no longer alive');
    });

  });

  describe ('walk', () => {
    it ('Assert fitness level increments properly and stays within correct range', () => {
      const pet = new Pet ('Jackie Daytona')
      pet.fitness = 8;
      pet.walk();

      expect(pet.fitness).toEqual(10);
    }); 

    it('throws an error if the pet is not alive', () => {
      const pet = new Pet ('Satan');
      pet.age = 30;

      expect(() => pet.walk()).toThrow('Your pet is no longer alive');
    });
  });

  describe('feed', () => {
    it('decreases hunger', () => {
      const pet = new Pet ('Nandor')
      pet.hunger = 5;
      pet.feed();

      expect(pet.hunger).toEqual(2);
    });

    it('decreases hunger to a minimum of 0', () => {
      const pet = new Pet ('Colin Robinson')
      pet.hunger = 3;
      pet.feed();

      expect(pet.hunger).toEqual(0);
    });

    it('throws an error if the pet is not alive', () => {
      const pet = new Pet ('Satan');
      pet.age = 30;

      expect(() => pet.feed()).toThrow('Your pet is no longer alive');
    });
  });

  describe('checkUp', () => {
    it('tells you if your pet is no longer alive', () => {
      const pet = new Pet ('Satan')
      pet.age = 30

      expect(pet.checkUp()).toBe('Your pet is no longer alive');
    });


    it('tells you if your pet is both hungry and needs a walk', () => {
      const pet = new Pet ('Bob')
      pet.fitness = 3;
      pet.hunger = 5;
      
      expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });

    it('tells you if your pet needs a walk', () => {
      const pet = new Pet ('Elton')
      pet.fitness = 3;

      expect(pet.checkUp()).toBe('I need a walk');

    });

    it ('tells you if your pet needs feeding', () => {
      const pet  = new Pet ('Lionel')
      pet.hunger = 5;

      expect(pet.checkUp()).toBe('I am hungry');
    });

    it('tells you if your pet is neither hungry or needs a walk', () => {
      const pet = new Pet ('Stevie')
      pet.hunger = 0;
      pet.fitness = 10;

      expect(pet.checkUp()).toBe('I feel great!');
    });
  });

  describe('adoptChild', () => {
    it('puts the child in the children property of the parent', () => {
      const parent = new Pet('Spider');
      const child = new Pet ('Prince');
      parent.adoptChild(child);

      expect(parent.children[0]).toEqual(child);

    });
  });

  describe('haveBaby', () => {
    it ('creates a child in the children array of the parent', () => {
      const parent = new Pet ('Dave');
      parent.haveBaby('Amelia');

      expect(parent.children[0].name).toBe('Amelia');
    });
  });
  
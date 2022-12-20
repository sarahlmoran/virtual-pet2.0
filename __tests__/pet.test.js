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

  });

  describe ('walk', () => {
    it ('increases fitness by 4, to a maximum of 10', () => {
      const pet = new Pet ('Jackie Daytona')
      pet.fitness= 8;
      pet.walk();

      expect(pet.fitness).toEqual(10);
    }); 
  });

  describe('feed', () => {
    it('decreases hunger by 3', () => {
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
  });

  describe('checkUp', () => {
    it('tells you if your pet is both hungry and needs a walk', () => {
      const pet = new Pet ('Bob')
      pet.fitness = 3;
      pet.hunger = 5;
      
      expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });
    it('tells you if your pet needs a walk if their fitness is 3 or less', () => {
      const pet = new Pet ('Elton')
      pet.fitness = 3;

      expect(pet.checkUp()).toBe('I need a walk');

    });
    it ('tells you if your pet needs feeding if their hunger is 5 or more', () => {
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

  
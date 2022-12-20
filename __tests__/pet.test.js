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

  
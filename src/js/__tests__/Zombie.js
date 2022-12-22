import Zombie from '../Zombie';

test('Zombie', () => {
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'player1',
    type: 'Zombie',
  };
  const received = new Zombie('player1', 'Zombie');
  expect(received).toEqual(expected);
});

test('type error in Zombie ', () => {
  function typeZombie() {
    return new Zombie('player1', 'sometype');
  }

  expect(typeZombie).toThrowError(new Error('Некорректный тип персонажа'));
});

import Swordsman from '../Swordsman';

test('Swordsman', () => {
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'player1',
    type: 'Swordsman',
  };
  const received = new Swordsman('player1', 'Swordsman');
  expect(received).toEqual(expected);
});

test('type error in Swordsman', () => {
  function typeSwordsman() {
    return new Swordsman('player1', 'sometype');
  }

  expect(typeSwordsman).toThrowError(new Error('Некорректный тип персонажа'));
});

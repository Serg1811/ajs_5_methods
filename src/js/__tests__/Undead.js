import Undead from '../Undead';

test('Undead', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'player1',
    type: 'Undead',
  };
  const received = new Undead('player1', 'Undead');
  expect(received).toEqual(expected);
});

test('type error in Undead', () => {
  function typeUndead() {
    return new Undead('player1', 'sometype');
  }

  expect(typeUndead).toThrowError(new Error('Некорректный тип персонажа'));
});

import Bowman from '../Bowman';

test('Bowman', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'player1',
    type: 'Bowman',
  };
  const received = new Bowman('player1', 'Bowman');
  expect(received).toEqual(expected);
});

test('type error in Bowman', () => {
  function typeBowman() {
    return new Bowman('player1', 'sometype');
  }

  expect(typeBowman).toThrowError(new Error('Некорректный тип персонажа'));
});

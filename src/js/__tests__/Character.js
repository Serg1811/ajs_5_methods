import Character from '../Character';

test('Character', () => {
  const expected = {
    health: 100,
    level: 1,
    name: 'player1',
  };
  const received = new Character('player1');
  expect(received).toEqual(expected);
});

test('throw in Character', () => {
  function throwCharacter() {
    return new Character('q');
  }

  expect(throwCharacter).toThrowError(new Error('Длина имени должна быть от 2 до 10 символов'));
});

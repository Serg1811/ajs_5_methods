import Bowman from '../Bowman';

test('damage', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 85,
    level: 1,
    name: 'player1',
    type: 'Bowman',
  };
  const received = new Bowman('player1', 'Bowman');
  received.damage(20);
  expect(received).toEqual(expected);
});

test('health error in damage', () => {
  function healthDamage() {
    const npc = new Bowman('player1', 'Bowman');
    npc.health = -12;
    return npc.damage(45);
  }
  expect(healthDamage).toThrowError(new Error('Персонаж уже мертв'));
});

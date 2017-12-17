import join from './join';

test('join `galactic` and `sand` to `galactic sand`', () => {
  expect(join('galactic', 'sand')).toBe('galactic sand');
});

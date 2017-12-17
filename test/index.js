import test from 'ava';
import FunWithStrings from '../js/index';

test('foo', (t) => {
  t.pass();
});

test('bar', async (t) => {
  const bar = Promise.resolve('bar');

  t.is(await bar, 'bar');
});

test('reversy', (t) => {
  const str = 'jamaica';
  const reverseStr = 'aciamaj';
  const funWithStrings = new FunWithStrings();

  t.is(funWithStrings.reversy(str), reverseStr);
});

import test from 'ava';
import PromiseResolver from '.';

test('PromiseResolver class', t => {
  t.is(typeof PromiseResolver, 'function');

  const resolver = new PromiseResolver(Promise.resolve('test'));
  t.is(typeof resolver.promise.toString(), '[object Promise]');
  t.is(typeof resolver.resolve, 'function');
  t.is(typeof resolver.reject, 'function');
});

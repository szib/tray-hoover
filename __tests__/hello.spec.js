import sayHello from '../src/hello';

describe('sayHello', () => {
  it('says hello', () => {
    expect(sayHello('Pikachu')).toEqual('Hello Pikachu!');
  });
  it('says hello to the world with no arguments', () => {
    expect(sayHello()).toEqual('Hello World!');
  });
});

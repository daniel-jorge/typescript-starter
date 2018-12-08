import hello from './index';

describe('when i call hello() with a param', () => {
  it('should return "hello <param>" string', () => {
    expect(hello('me')).toEqual('Hello me');
  });
});

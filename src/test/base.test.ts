import {getGreeting} from '../main/greeting';

describe('Greeting', () => {
  it('should greet World', () => {
    expect(getGreeting('World')).toBe('Hello World!');
  });
});

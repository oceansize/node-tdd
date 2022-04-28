import {
  greeting,
} from '../src/application';

describe('Application', function () {
  it('should greet someone by name', () => {
    expect(greeting("Josué")).toEqual("Hello Josué!");
  });
});

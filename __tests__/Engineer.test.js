const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('if github can be set via constructor argument', () => {
  const testValue = 'testgithub';
  const e = new Engineer('foo', 3, 'test@test.com', testValue);

  expect(e.getGithub()).toBe(testValue);
});

test('if getRole returns Engineer', () => {
  const testValue = 'Engineer';
  const e = new Engineer('foo', 3, 'test@test.com', 'testgithub');

  expect(e.getRole()).toBe(testValue);
});

test('if you can get github via getGithub', () => {
  const testValue = 'testgithub';
  const e = new Engineer('foo', 3, 'test@test.com', testValue);

  expect(e.getGithub()).toBe(testValue);
});
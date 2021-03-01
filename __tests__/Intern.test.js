const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('if school can be set via constructor argument', () => {
  const testValue = 'vanderbilt';
  const e = new Intern('foo', 3, 'test@test.com', testValue);

  expect(e.getSchool()).toBe(testValue);
});

test('if getRole returns Intern', () => {
  const testValue = 'Intern';
  const e = new Intern('foo', 3, 'test@test.com', 'vanderbilt');

  expect(e.getRole()).toBe(testValue);
});

test('if you can get school via getSchool', () => {
  const testValue = 'vanderbilt';
  const e = new Intern('foo', 3, 'test@test.com', testValue);

  expect(e.getSchool()).toBe(testValue);
});
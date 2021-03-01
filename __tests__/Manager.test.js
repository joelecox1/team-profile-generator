const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('if office number can be set via constructor argument', () => {
  const testValue = 100;
  const e = new Manager('foo', 3, 'test@test.com', testValue);

  expect(e.officeNumber).toBe(testValue);
});

test('if getRole returns Manager', () => {
  const testValue = 'Manager';
  const e = new Manager('foo', 3, 'test@test.com', 100);

  expect(e.getRole()).toBe(testValue);
});

test('if you can get office number via getOfficeeNumber', () => {
  const testValue = 100;
  const e = new Manager('foo', 3, 'test@test.com', testValue);

  expect(e.getOfficeNumber()).toBe(testValue);
});
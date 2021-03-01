const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('can instantiate employee instance', () => {
  const employee = new Employee();

  expect(typeof(employee)).toBe('object');
});

test('can you set name via constructor arguments', () => {
  const name = 'foo';
  const employee = new Employee(name);

  expect(employee.name).toBe(name);
});

test('can you set id via constructor arguments', () => {
  const id = 3;
  const employee = new Employee('foo', id);

  expect(employee.id).toBe(id);
});

test('can you set email via constructor arguments', () => {
  const email = 'test@test.com'
  const employee = new Employee('foo', 3, email);

  expect(employee.email).toBe(email);
});

test('can you get name from getName function', () => {
  const name = 'foo';
  const employee = new Employee(name);

  expect(employee.getName()).toBe(name);
});

test('can you get id from getId function', () => {
  const id = 3;
  const employee = new Employee('foo', id);

  expect(employee.getId()).toBe(id);
});

test('can you get email from getEmail function', () => {
  const email = 'test@test.com';
  const employee = new Employee('foo', 3, email);

  expect(employee.getEmail()).toBe(email);
});

test('getRole function returns employee', () => {
  const testValue = 'Employee';
  const employee = new Employee('foo', 3, 'test@test.com');

  expect(employee.getRole()).toBe(testValue);
});
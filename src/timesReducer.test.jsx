// src/timesReducer.test.js

import { vi } from 'vitest';
import { initializeTimes, updateTimes } from './AppRouterContent'; // Adjust path if functions are in App.jsx

// --- Mocking the global window.fetchAPI function ---
const mockFetchAPI = vi.fn((date) => {
  const dateString = date.toISOString().split('T')[0];

  if (dateString === '2025-12-24') {
    return ['17:00', '18:00', '19:00'];
  } else if (dateString === '2025-12-25') {
    return ['20:00', '21:00'];
  }
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
});

beforeAll(() => {
  global.window = { ...global.window, fetchAPI: mockFetchAPI };
});

afterAll(() => {
  delete global.window.fetchAPI;
});

// --- Unit Tests ---

test('initializeTimes returns an empty array as its initial state', () => {
  // Clear any previous calls to the mock before this test
  mockFetchAPI.mockClear();

  const result = initializeTimes();

  // Assert that initializeTimes now returns an empty array
  expect(result).toEqual([]);
  // Assert that fetchAPI was NOT called by initializeTimes directly
  expect(mockFetchAPI).not.toHaveBeenCalled();
});

test('updateTimes returns times based on the selected date from fetchAPI', () => {
  mockFetchAPI.mockClear();

  const initialState = [];

  const selectedDateString = '2025-12-24';
  const selectedDateObject = new Date(selectedDateString);

  const action = { type: 'UPDATE_TIMES', payload: { date: selectedDateString } };

  const result = updateTimes(initialState, action);

  expect(mockFetchAPI).toHaveBeenCalledWith(selectedDateObject);

  expect(result).toEqual(['17:00', '18:00', '19:00']);
});

test('updateTimes returns different times for a different selected date', () => {
  mockFetchAPI.mockClear();

  const initialState = [];
  const selectedDateString = '2025-12-25';
  const selectedDateObject = new Date(selectedDateString);
  const action = { type: 'UPDATE_TIMES', payload: { date: selectedDateString } };

  const result = updateTimes(initialState, action);

  expect(mockFetchAPI).toHaveBeenCalledWith(selectedDateObject);
  expect(result).toEqual(['20:00', '21:00']);
});

test('updateTimes returns current state for unknown action types', () => {
  mockFetchAPI.mockClear();

  const initialState = ['some_time'];
  const action = { type: 'UNKNOWN_ACTION' };

  const result = updateTimes(initialState, action);

  expect(mockFetchAPI).not.toHaveBeenCalled();
  expect(result).toEqual(initialState);
});

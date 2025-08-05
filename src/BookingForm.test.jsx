// src/BookingForm.test.jsx

import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from 'vitest'; // Import vi for mocking functions
import BookingForm from './BookingForm'; // Make sure the path is correct

// --- Mocks for Props and Global API Functions ---

// Mock the dispatch function that BookingForm receives as a prop
const mockDispatch = vi.fn();
// Mock the submitForm function that BookingForm receives as a prop
const mockSubmitForm = vi.fn();
// Provide some mock available times for the select dropdown
const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

// Mock the global fetchAPI function that initializeTimes and updateTimes use
// This mock is needed for the functions that are called in AppRouterContent,
// but since we're only testing BookingForm here, we primarily mock it for
// the initial state setting if BookingForm were to call it directly,
// or if its internal logic somehow depended on it being available.
// In this setup, fetchAPI is called by the reducer in AppRouterContent,
// but it's good practice to have it mocked if any part of the component
// or its props indirectly relies on it.
const mockGlobalFetchAPI = vi.fn((date) => {
  const dateString = date.toISOString().split('T')[0];
  if (dateString === '2025-12-24') {
    return ['17:00', '18:00', '19:00'];
  } else if (dateString === '2025-12-25') {
    return ['20:00', '21:00'];
  }
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
});

// Set up global mocks before all tests in this file
beforeAll(() => {
  global.window = { ...global.window, fetchAPI: mockGlobalFetchAPI, submitAPI: vi.fn(() => true) }; // Mock submitAPI too
});

// Clean up global mocks after all tests in this file
afterAll(() => {
  delete global.window.fetchAPI;
  delete global.window.submitAPI;
});

// Clear mocks before each test to ensure test isolation
beforeEach(() => {
  vi.clearAllMocks(); // Clears all mocks created with vi.fn()
});

// --- Unit Tests for BookingForm Component ---

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  // Assuming your heading is "Make Your Reservation" or "Book Your Table"
  const headingElement = screen.getByRole('heading', { name: /make your reservation/i });
  expect(headingElement).toBeInTheDocument();
});

// --- Tests for HTML5 Validation Attributes ---

test('Date input has required attribute and type="date"', () => {
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toBeRequired();
  expect(dateInput).toHaveAttribute('type', 'date');
});

test('Time select has required attribute', () => {
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  const timeSelect = screen.getByLabelText(/choose time/i);
  expect(timeSelect).toBeRequired();
});

test('Number of guests input has required, min="1", and max="10" attributes', () => {
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
});

test('Occasion select has required attribute', () => {
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  const occasionSelect = screen.getByLabelText(/occasion/i);
  expect(occasionSelect).toBeRequired();
});

test('Submit button is initially disabled', () => {
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });
  expect(submitButton).toBeDisabled();
});

// --- Tests for JavaScript Validation and Submission ---

test('Submit button is enabled when all fields are valid', () => {
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });
  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const occasionSelect = screen.getByLabelText(/occasion/i);

  // Simulate valid input for all fields
  fireEvent.change(dateInput, { target: { value: '2025-12-24' } });
  fireEvent.change(timeSelect, { target: { value: '17:00' } });
  fireEvent.change(guestsInput, { target: { value: '5' } });
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

  // After valid input, the button should be enabled
  expect(submitButton).toBeEnabled();
});

test('Submit button remains disabled if date is empty', () => {
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });
  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const occasionSelect = screen.getByLabelText(/occasion/i);

  // Simulate valid input for all but date (empty)
  fireEvent.change(dateInput, { target: { value: '' } }); // Invalid date
  fireEvent.change(timeSelect, { target: { value: '17:00' } });
  fireEvent.change(guestsInput, { target: { value: '5' } });
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

  expect(submitButton).toBeDisabled();
});

test('Submit button remains disabled if guests is invalid (e.g., 0)', () => {
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });
  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const occasionSelect = screen.getByLabelText(/occasion/i);

  // Simulate valid input for all but guests
  fireEvent.change(dateInput, { target: { value: '2025-12-24' } });
  fireEvent.change(timeSelect, { target: { value: '17:00' } });
  fireEvent.change(guestsInput, { target: { value: '0' } }); // Invalid guests
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

  expect(submitButton).toBeDisabled();
});

test('submitForm is called on valid form submission', () => {
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });
  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const occasionSelect = screen.getByLabelText(/occasion/i);

  // Simulate valid input for all fields
  fireEvent.change(dateInput, { target: { value: '2025-12-24' } });
  fireEvent.change(timeSelect, { target: { value: '17:00' } });
  fireEvent.change(guestsInput, { target: { value: '5' } });
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

  // Click the submit button
  fireEvent.click(submitButton);

  // Assert that submitForm was called exactly once
  expect(mockSubmitForm).toHaveBeenCalledTimes(1);
  // Assert that submitForm was called with the correct form data
  expect(mockSubmitForm).toHaveBeenCalledWith({
    date: '2025-12-24',
    time: '17:00',
    guests: 5,
    occasion: 'Birthday',
  });
});

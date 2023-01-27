import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import './__mocks__/axiosMock';
import { MOCK_ERROR_MESSAGE } from './src/lib/constants/test.constants';

class LocalStorageMock {
  store: Record<string, string>;
  length: number = 0;
  key: (index: number) => string = (idx) => '';

  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: string) {
    this.store[key] = String(value);
  }

  removeItem(key: string) {
    delete this.store[key];
  }
}
if (!global.localStorage) {
  (global as any).localStorage = new LocalStorageMock();
}

jest.mock('react-i18next', () => ({
  initReactI18next: { type: '3rdParty', init: jest.fn() },
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  Trans: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock('react-google-recaptcha-v3', () => ({
  useGoogleReCaptcha: () => ({
    executeRecaptcha: (action: string) => new Promise((resolve) => resolve('token')),
  }),
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

process.env.TZ = 'UTC';

// List of message warnings we want to filter from warning logs in tests
const filteredWarnMessages: string[] = [
  'React.createFactory()',
  'async-validator:',
  'componentWillReceiveProps has been renamed',
  'value provided is not in a recognized RFC2822 or ISO format',
];
const filteredWarnVariables: string[] = [];
const privateWarnLog = console.warn;
jest.spyOn(console, 'warn').mockImplementation((msg: string, ...args: unknown[]) => {
  filteredWarnMessages.some((message) => msg.includes(message)) ||
  filteredWarnVariables.some((variable) => variable === args[0])
    ? jest.fn()
    : privateWarnLog(msg, ...args);
});

// List of message errors we want to filter from error logs in tests
const filteredErrorMessages: string[] = [
  'when doing server-side rendering',
  'If you want to write it to the DOM, pass a string instead',
  MOCK_ERROR_MESSAGE,
];

const filteredErrorVariables: string[] = ['warnKey'];
const privateErrorLog = console.error;
jest.spyOn(console, 'error').mockImplementation((msg: string, ...args: unknown[]) => {
  filteredErrorMessages.some((message) => msg.includes(message)) ||
  filteredErrorVariables.some((variable) => variable === args[0])
    ? jest.fn()
    : privateErrorLog(msg, ...args);
});

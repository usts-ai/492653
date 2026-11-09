import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('framer-motion', () => {
  const ReactActual = require('react');
  const passthrough = ReactActual.forwardRef(
    (
      {
        children,
        ...props
      }: { children?: React.ReactNode; [key: string]: unknown },
      ref: React.Ref<HTMLElement>
    ) => {
      const safe: Record<string, unknown> = {};
      Object.keys(props).forEach((key) => {
        if (
          key === 'className' ||
          key === 'id' ||
          key === 'style' ||
          key === 'href' ||
          key === 'type' ||
          key === 'aria-label' ||
          key.startsWith('data-') ||
          key === 'onClick' ||
          key === 'src' ||
          key === 'alt'
        ) {
          safe[key] = props[key];
        }
      });
      return ReactActual.createElement('div', { ...safe, ref }, children);
    }
  );

  return {
    motion: new Proxy(
      {},
      {
        get: () => passthrough,
      }
    ),
    AnimatePresence: ({ children }: { children?: React.ReactNode }) =>
      ReactActual.createElement(ReactActual.Fragment, null, children),
    useScroll: () => ({ scrollYProgress: { get: () => 0, on: () => () => {}, off: () => {} } }),
    useTransform: () => 0,
    useInView: () => true,
  };
});

test('affiche la marque Nexora', () => {
  render(<App />);
  expect(screen.getAllByText(/Nexora/i).length).toBeGreaterThan(0);
});

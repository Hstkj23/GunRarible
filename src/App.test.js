// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GunRarible title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GunRarible/i);
    expect(titleElement).toBeInTheDocument();
});

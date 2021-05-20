import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  //Renderizado de la aplicacion
  render(<App />);
  //si contiene un texto
  const linkElement = screen.getByText(/phonebook/i);
  expect(linkElement).toBeInTheDocument();
});

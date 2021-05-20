import { fireEvent, render, screen } from '@testing-library/react';
import FormContact from './FormContact';


  // Renderizado del componente 
  test('renders contact form', () => {
      const contact = {
          name: "Prueba Test",
          number: "0-123456"
      }
      const idContact = "60974f58b880903d68bcb4cf"
    // Renderizado del componente
    render(<FormContact contact={contact} />);
  });

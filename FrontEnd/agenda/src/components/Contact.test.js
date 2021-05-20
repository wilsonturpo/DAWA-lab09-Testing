import { fireEvent, render } from '@testing-library/react';
import Contact from './Contact';

// Renderizado del componente
test('renders contact', () => {
    let contacto = {
        _id: "60974f58b880903d68bcb4cf",
        name: "Prueba Test",
        number: "0-123456"
    }
  // Renderizado del componente
  const component = render(<Contact contact={contacto}/>);
  // Validar el contenido del renderizado, debe contener el number y nombre
  const name = component.getByText('Prueba Test')
  expect(name).toBeInTheDocument();
  const phone = component.getByText('0-123456')
  expect(phone).toBeInTheDocument();
});

// Verificacion de click en funciones
test('click button handler once', () => {
  let contacto = {
      _id: "60974f58b880903d68bcb4cf",
      name: "Prueba Test",
      number: "0-123456"
  }
  //funcion de prueba
  const mockHandlerEditar = jest.fn()
  const mockHandlerEliminar = jest.fn()
  // Renderizado del componente
  const component = render(<Contact contact={contacto} handleEditar={mockHandlerEditar} handleEliminar={mockHandlerEliminar}/>);
  // boton de edicion y eliminacion
  const buttonEditar = component.getByText('Editar')
  const buttonEliminar = component.getByText('Eliminar')
  // 1 llamada realizada para cada boton
  fireEvent.click(buttonEditar)
  fireEvent.click(buttonEliminar)
  // se espera la llamada 1 vez en cada boton
  expect(mockHandlerEditar).toHaveBeenCalledTimes(1)
  expect(mockHandlerEliminar).toHaveBeenCalledTimes(1)
});



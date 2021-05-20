const Contact = ({contact, handleEditar, handleEliminar}) =>{
  return (
    <tr>
        <td>{contact.name}</td>
        <td>{contact.number}</td>
        <td>
            <button className="btn btn-Editar" onClick={() => handleEditar(contact)}>Editar</button>
            <button className="btn btn-Eliminar" onClick={() => handleEliminar(contact._id)}>Eliminar</button>
        </td>
    </tr>
  );
}

export default Contact;

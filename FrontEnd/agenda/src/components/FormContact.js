const FormContact = ({contact, handleSubmit, handleCancel, btnSend, handleChange, idContact}) =>{
    return (
        <form className="App-form" onSubmit={handleSubmit}>
          <input 
              onChange={handleChange} 
              className="form-control" 
              placeholder="Name Contact"
              type="text" 
              name="name"
              value={contact.name} 
          />
          <input 
              onChange={handleChange} 
              className="form-control"
              placeholder="Phone Number"
              type="text" 
              name="number" 
              value={contact.number} 
          />
          <button id="agregar" className="btn-Submit" type="submit" >{btnSend}</button>
          {
            idContact !== 0 ? <button className="btn-Cancel" onClick={handleCancel}>Cancelar</button>: ''
          }
        </form>
    );
  }
  
  export default FormContact;
  
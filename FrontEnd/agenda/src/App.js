import logo from './logo.svg';
import api from './api'
import './App.css';
import { useState, useEffect } from 'react';
import Contact from './components/Contact';
import FormContact from './components/FormContact';


function App() {

  const [contacts, setContacts] = useState([{}])
  const [idContact, setIdContact] = useState(0)
  const [btnSend, setBtnSend] = useState("Crear contacto")

  const [contact, setContact] = useState({
    name:'',
    number:''
  })

  useEffect(() => {
    fetchContacts()
  }, []);

  const fetchContacts = async ()=>{
    try{
      const contactsList = await api.agenda.list();
      setContacts(contactsList.data)
      console.log(contactsList.data)
    }catch(error){
      console.log(error)
    }
  }  

  const handleChange = e =>{
    setContact(
      {
        ...contact, 
        [e.target.name]: e.target.value,
      })
  };
  const handleEditar = async contact =>{
    setContact({
      name: contact.name,
      number: contact.number
    })
    setIdContact(contact._id)
    setBtnSend("Editar contacto")
    /* 
    try{
      let contactEdit = await api.agenda.read(id);
      //fetchContacts()
      setContact({
        name: contactEdit.data.name,
        number: contactEdit.data.number
      })
      
    }catch (error){
      console.log(error)
    }
    */
  };
  const handleEliminar = async id =>{
    try{
        await api.agenda.remove(id);
        fetchContacts()
    }catch (error){
        console.log(error)
    }
  };

  const handleSubmit = async e =>{
    e.preventDefault();
    if (idContact !== 0) {
      // Editar
      try{
        let n = await api.agenda.update(idContact, contact);
        console.log(n)
        fetchContacts()
        handleCancel()
      }catch (error){
          console.log(error)
      }
    }else{
      // Crear
      try{
          await api.agenda.create(contact);
          fetchContacts()
          handleCancel()
      }catch (error){
          console.log(error)
      }

    }
  }

  const handleCancel = () => {
    setIdContact(0)
    setBtnSend("Crear contacto")
    setContact({
      name:'',
      number:''
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        Phonebook
      </header>
      <div className="App-container">
        <div className="column">
          <table className="flat-table flat-table-1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <Contact key={index} contact={contact} handleEditar={handleEditar} handleEliminar={handleEliminar}/>
              ))}
            </tbody>
          </table>
        </div>
        <div className="column">
          <FormContact contact={contact}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            btnSend={btnSend}
            handleChange={handleChange}
            idContact={idContact}
          />
        </div>
          
      </div>
      
    </div>
  );
}

export default App;

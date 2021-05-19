import logo from './logo.svg';
import api from './api'
import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [contacts, setContacts] = useState([{}])

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

  const handleSubmit = async e =>{
    e.preventDefault();
    try{
        console.log(contact)
        let newContact = await api.agenda.create(contact);
        //fetchContacts()
        setContacts([...contacts,newContact.data])
    }catch (error){
        console.log(error)
    }
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
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.name}</td>
                  <td>{contact.number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="column">
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
            <button className="btn-Submit" type="submit" >Crear contacto</button>
          </form>
        </div>
          
      </div>
      
    </div>
  );
}

export default App;

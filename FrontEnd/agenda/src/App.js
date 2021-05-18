import logo from './logo.svg';
import api from './api'
import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [data, setData] = useState([{}])

  const [contact, setContact] = useState({
    name:'',
    number:''
  })

  useEffect(() => {
   fetchData()
  }, []);

  const fetchData = async ()=>{
    try{
      const contacts = await api.agenda.list();
      setData(contacts.data)
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
        await api.agenda.create(contact);
        fetchData()
    }catch (error){
        console.log(error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {data.map((person, index) => (
            <p key={index} >Hello, {person.name}!</p>
          ))}

        </a>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Name</label>
            <input 
                onChange={handleChange} 
                className="form-control" 
                type="text" 
                name="name"
                value={contact.name} 
            />
        </div>

        <div className="form-group">
            <label>Number</label>
            <input 
                onChange={handleChange} 
                className="form-control"
                type="text" 
                name="number" 
                value={contact.number} 
            />
        </div>
        <button className="btn btn-primary" type="submit" >Crear contacto</button>
      </form>
      
    </div>
  );
}

export default App;

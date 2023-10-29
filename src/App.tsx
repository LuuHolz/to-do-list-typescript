import { useState, useEffect } from 'react';
import './App.css'
import List from './Components/List'
import Form from './Components/Form'
import {Sub} from './type'


//________________________________________________________________________________________________


// interface Persona {
//   name: string,
//   age: number
// }

interface AppState {
  subs: Sub[],
  newSubsNumber: number
}


const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador a veces'
  },
  {
    nick: 'Sergio_serrano',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano',
  }
]



//________________________________________________________________________________________________

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]); 
  // Tambien puedo colocarlo asi: useState<Array>Sub>>([])
  const [newSubsNumber, SetNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)


  // const [person, setPerson] = useState<Persona>({name:"", age:0})

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])
  

//________________________________________________________________________________________________


  return (
    <div className='App'>
      <h1>Misu subs</h1>
      <List subs={subs}/>
      <Form/>
    </div>
  );
}

export default App

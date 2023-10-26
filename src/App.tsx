import { useState } from 'react';
import './App.css'

function App() {
  const [subs, setSubs] = useState([
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador a veces'
  },
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
  }
])


  return (
    <div className='App'>
      <h1>Misu subs</h1>
      <ul>
        {
          subs.map(sub => {
            return(
              <li key={sub.nick}>
                <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description?.substring(0, 100)}</p>
                {/* substring y acalro que solo quiero que aparezcan los 100 promeros caracteres de la descripcion */}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App

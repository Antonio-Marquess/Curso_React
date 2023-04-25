import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';

function App() {
  const n = 15
  const [name] = useState("Antonio")

  return (
    <div className="App">
        {/*CSS global*/}
        <h1>React com CSS</h1>
        {/*CSS de componente*/}
        <MyComponent />
        <p>Parágrafo do App.js</p>
        {/*CSS inline*/}   
        <p style={{color: 'red', padding: '25px', borderTop: '2px solid red'}}>
            Parágrafo do App.js com CSS inline
        </p>
        {/*CSS inlene dinâmico*/}
          <h2 style={n < 10 ? ({ color: "purple" }) : ({ color: "pink" })}>
              CSS Dinâmico</h2>
          <h2 style={n > 10 ? ({ color: "purple" }) : ({ color: "pink" })}>
              CSS Dinâmico</h2>
          <h2 style={name === "Antonio" ? ({ color: "green", backgroundColor: "#000" })
              : null
          }
          >
              CSS Dinâmico, teste nome
          </h2>
             

    </div>
  );
}

export default App;

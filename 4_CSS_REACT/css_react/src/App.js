import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';
import Title from './components/Title';

function App() {
  const n = 15
  const [name] = useState("Antonio")
  const redTitle = true

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
        {/*CSS Classe dinâmico*/}
          <h2 className={redTitle ? "red-title" : "title"}>
              Este título vai ter classe dinâmico
          </h2>
        {/*CSS modules*/}
        <Title />
        <h2 className="my_title">Teste</h2>
      </div>
  );
}

export default App;

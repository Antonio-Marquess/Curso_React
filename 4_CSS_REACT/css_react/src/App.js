import './App.css';
import MyComponent from './components/MyComponent';

function App() {
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
    </div>
  );
}

export default App;

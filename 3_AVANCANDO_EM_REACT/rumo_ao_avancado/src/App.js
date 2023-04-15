import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import Universo2 from './assets/universo2.jpg';


function App() {
    return (
        <div className="App">
            <h1>Avançando em React</h1>
            {/*Imagem em public*/}
            <div>
                <img src="/universo.jpg" alt="Universo" />
            </div>

            {/*Imagem em assets*/}
            <div>
                <img src={Universo2} alt="Planeta" />
            </div>
            <ManageData />
            <ListRender />
        </div>

    );
}
export default App;

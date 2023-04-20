import { useState } from 'react';
import './App.css';

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import Universo2 from './assets/universo2.jpg';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';


function App() {
    //const name = "John";
    const [userName] = useState("Kaio");

    const cars = [
        { id: 1, brand: "Ferrari", km: 0, color: "Vermelha", newCar: true },
        { id: 2, brand: "Fiat", km: 20000, color: "Azul", newCar: false },
        { id: 3, brand: "Ford", km: 30000, color: "Preto", newCar: false },
    ]

    function showMessage() {
        console.log("Evento do componente pai!!!");
    }

    const [message, setMessage] = useState("");

    const handleMessage = (msn) => {
        setMessage(msn);
    }

    const user = [
        { id: 1, name: "Kaio", age: 30, job: "Desenvolvedor", email: "kaio@dev.com" },
        { id: 2, name: "John", age: 25, job: "QA", email: "john@qa.com " },
        { id: 3, name: "Maria", age: 20, job: "Designer", email: "maria@ux.com" },
        { id: 4, name: "Antonio", age: 35, job: "Gerente de projeto", email: "antonio@gprojeto.com" },
        { id: 5, name: "Lucas", age: 17, job: "Estagiário", email: "lucas@estagio.com" }
    ]
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
            <ConditionalRender />
            {/*Passando props*/}    
            <ShowUserName  name={userName}/>
            {/* Destructuring */}
            <CarDetails  brand="HB20" km={10000} color="Prata" newCar={false} />
             {/*Reaproveitando */}
            <CarDetails  brand="Gol" km={20000} color="Preto" newCar={true} />
            <CarDetails  brand="Civic" km={30000} color="Vermelho" newCar={false} />
            {/*loop com array de objetos*/}
            {cars.map((car) => ( 
                <CarDetails
                    key={car.id} 
                    brand={car.brand} 
                    km={car.km} 
                    color={car.color} 
                    newCar={car.newCar} 
                />
            ))}
            {/*Fragment*/}
            <Fragment propFragment="teste" />
            {/*Children*/}
            <Container myValue="testing">
                <p>E este é o conteúdo</p>
            </Container>
            <Container myValue="testing 2">
                <h5>testando container</h5>
            </Container>
            {/* Execultar função*/}
            <ExecuteFunction myFunction={showMessage} />
            {/*state lift*/}
            <Message msg= {message}/>
            <ChangeMessageState handleMessage={handleMessage} />

            {/*Atividade*/}
            {user.map((user) => (
                <UserDetails
                    key={user.id} 
                    name={user.name}
                    age={user.age} 
                    job={user.job}
                    email={user.email}
                />
            ))}
        </div>

    );
}
export default App;

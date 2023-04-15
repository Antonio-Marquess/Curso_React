import { useState} from 'react'
const ManageData = () => {
    let someData = 10
    console.log(someData)

    const [number, setNumber] = useState(13)
    console.log(number)

  return (
    <div>
        <h2>Valor: {someData}</h2>
        <button onClick={() => (someData = 15)}>Mudar Variável</button>
        <h2>Valor: {number}</h2>
        <button onClick={() => setNumber(25)}>Mudar state</button>
    </div>
  )
}

export default ManageData
import { useState } from "react"

const ListRender = () => {
    const [listy] = useState(["Morzinho", "Bolinha", "Bistequinha"])

    const [users, setUsers] = useState([
        {id: 1, name: "Morzinho", age: 43},
        {id: 2, name: "Bolinha", age: 12},
        {id: 3, name: "Bistequinha", age: 2},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() *4)
        
        setUsers ((prevState) => {
            return prevState.filter((user) => randomNumber !== user.id)
        })
    }

    return <div>
        <ul>
            {listy.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete radom user</button>
    </div>
   
        
  
}

export default ListRender
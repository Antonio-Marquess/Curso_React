import { useState } from "react"

const ListRender = () => {
const [listy] = useState(["Morzinho", "Bolinha", "Bistequinha"])

  return  <div>
    <ul>
        <ul>
            {listy.map((item) => (
                <li> {item}</li>
            ))}
        </ul>
    </ul>
  </div>
   
        
  
}

export default ListRender
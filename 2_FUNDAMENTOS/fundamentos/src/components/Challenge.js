const Challenge = () => {
    const valueOne = 3
    const valueTwo = 6

    return (
        <div>
            <h3>O primeiro valor numérico é: {valueOne}</h3>
            <h3>O segundo valor numerico é: {valueTwo}</h3>
            <button onClick={() => console.log(valueOne + valueTwo)}>
                Clique para a soma!!!
            </button>
        </div >
    )

}
export default Challenge





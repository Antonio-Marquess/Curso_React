const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Ativou o evento!")
    }
    const handleSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizando isso!</h1>
        }
    }



    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={()=> console.log("Clicou!!!")}>
                    Clique aqui também!
                </button>
                
            </div>
            {handleSomething(true)}
            {handleSomething(false)}
        </div>
    )

}

export default Events
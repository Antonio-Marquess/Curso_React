const TemplateExpressions = () => {
    const name = "Antonio";
    const data = {
        age: 43,
        job: "Developer"
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>Qual é sua: {data.age}</p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>

        </div>
    )
}

export default TemplateExpressions
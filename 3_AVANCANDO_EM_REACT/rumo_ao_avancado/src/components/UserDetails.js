const UserDetails = ({ name, age, job, email }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Idade: {age}</p>
            <p>Profissão: {job}</p>
            <p>E-mail: {email}</p>
            {age >= 18 ? (
                <p>É maior de idade, pode tirar carteira de habilitação</p>
            ) : (
                <p>Menor de idade, não pode tirar carteira de habilitação</p>
            )}
        </div>
    )
}

export default UserDetails
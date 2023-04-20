const ShowUserName = (props) => {
  return (
    <div>
        <h2>O nome do usuário: {props.name}</h2>
    </div>
  )
}

ShowUserName.propTypes = {}

export default ShowUserName
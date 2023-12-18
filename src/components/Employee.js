function Employee(props){
    return (
    <>
        <h3>Employee {props.name}</h3>
        <p>{props.role ? props.role : "No role"}</p>
        {props.role ? <p class="role">{props.role}</p> : <p class="norole">No role</p>}
    </>
    )
}

export default Employee;
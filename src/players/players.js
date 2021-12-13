function Players(props) {
    return (
        <div>
            <img src={props.image} alt=""/>
            <h2>name: {props.name}</h2>
            <h2>age: {props.age}</h2>
        </div>
    )
}

export default Players;
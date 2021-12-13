function Players(props) {
    let {name, age, country, position, image} = props;
    return (
        <div>
            <div>{image} {name} {age}</div>
        </div>
    )
}

export default Players;
export default function User ({item, chosenUser}) {
    return (
        <div>
            <h2>{item.id} - {item.name}</h2>
            <div>{item.email}</div>
            <button onClick={() => chosenUser(item.id)}>details</button>
        </div>
    )
}
export default function Post ({item, find}) {
    return (
        <div>
            <h2>id: {item.id} - title: {item.title}</h2>
            <div>body: {item.body} (userID: {item.userId})</div>
            <button onClick={() => find(item.id)}>details</button>
        </div>
    )
}
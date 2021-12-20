export default function Comment ({item, single}) {
    return (
        <div>
            <h2>id: {item.id} - name: {item.name}</h2>
            <h3>email: {item.email}</h3>
            <button onClick={() => single(item.id)}>details</button>
            <hr/>
        </div>
    )
}
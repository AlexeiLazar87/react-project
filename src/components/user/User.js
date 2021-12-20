export default function User({item, info}) {
    return (
        <div>
            <h2>{item.id}_name: {item.name} - lastname: {item.username}</h2>
            <h4>email: {item.email}</h4>
            <div>city: {item.address.city}_zipcode: {item.address.zipcode}</div>
            <button onClick={() => info(item.id)}>info</button>
            <hr/>
        </div>
    )
}
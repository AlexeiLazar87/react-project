import {
    Link
} from "react-router-dom";

export default function Post ({item}) {
    return (
        <div>
            <h2>
                {item.id}
                <div>{item.title}</div>
                <Link to={`/posts/${item.id}`}><button>post {item.id} details</button></Link>
                <hr/>
            </h2>
        </div>
    )
}

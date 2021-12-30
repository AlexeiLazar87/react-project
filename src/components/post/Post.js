import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Post ({item}) {
    return (
        <div>
            <h2>
                {item.id}
                <div>{item.title}</div>
                <Link to={`/posts/${item.id}`}><button>post {item.id} details</button></Link>
            </h2>
        </div>
    )
}

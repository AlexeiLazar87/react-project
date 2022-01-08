import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import './postsDetailsStyle.css';

export default function PostDetails() {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(value => value.json())
            .then(value => {
                setPost(value)
            })
    }, [id])

    return (
        <div className={'postDetailsWrap'}>
            {
                post && <div> <h1>{post.id} - {post.title}</h1> <p>{post.body}</p> </div>
            }
        </div>
    )
}

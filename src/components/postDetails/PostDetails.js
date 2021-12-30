import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPost} from "../../services/api";


export default function PostDetails() {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    // useEffect(async () => {
    //     let p = await getPost();
    //     setPost(p);
    // }, [id])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(value => value.json())
            .then(value => {
                setPost(value)
            })
    }, [id])

    return (
        <div>
            {
                post && <div>
                            <h1>{post.id} - {post.title}</h1>
                            <p>{post.body}</p>
                        </div>

            }
        </div>
    )
}

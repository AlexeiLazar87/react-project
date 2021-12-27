import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../../services/api";

export default function Posts () {
    let [posts, setPosts] = useState([]);

    useEffect(async () => {
        let posts = await getPosts();
        setPosts([...posts]);
    },[])

    return (
        <div>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }
        </div>
    )
}
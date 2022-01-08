import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../../services/api";
import './postsStyle.css';

export default function Posts () {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData () {
            let posts = await getPosts();
            setPosts([...posts]);
        }
        fetchData();
    },[]);

    return (
        <div className={'postsWrap'}>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }
        </div>
    )
}
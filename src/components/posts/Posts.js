import Post from "../post/Post";
import {useEffect, useState} from "react";
import './postsStyle.css'

export default function Posts() {
    let [posts, setPosts] = useState([]);
    let [singlePost, setSinglePost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts([...value])
            })
    }, [])

    const search = (id) => {
        let findSinglePost = posts.find(value => value.id === id);
        setSinglePost(findSinglePost);
    }

    return (
        <div className={'wrap'}>
            <div className={'a'}>
                {
                    posts.map(value => <Post key={value.id} item={value} find={search}/>)
                }
            </div>
            <div className={'b'}>
                {
                    singlePost ? <h2>{JSON.stringify(singlePost)}</h2> : <h2>post not defined</h2>
                }
            </div>
        </div>
    )
}
import Comment from "../comment/comment";
import {useEffect, useState} from "react";
import './style1.css'

export default function Comments () {
    let [comments, setComments] = useState([]);
    let [singleComment, setSingleComment] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {setComments([...value])})
    });

    const findSingleComment = (id) => {
        let find = comments.find(value => value.id === id);
        setSingleComment(find)
    };

    return (
        <div className={'wrap'}>
            <div className={'first'}>
                {
                    comments.map(value => <Comment key={value.id} item={value} single={findSingleComment}/>)
                }
            </div>
            <div className={'second'}>
                {
                    singleComment ? <h2>{singleComment.body}</h2> : <h2>comment is not defined</h2>
                }
            </div>
        </div>

    )
}
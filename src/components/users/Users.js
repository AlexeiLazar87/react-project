import {useEffect, useState} from "react";
import User from "../user/User";
import "./Users_css.css"

export default function Users() {

    let [users, setUsers] = useState([]);
    let [singleUser, setSingleUser] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
            })
    }, [])

    const userInfo = (id) => {
        let find = users.find(value => value.id === id)
        setSingleUser(find)
    }

    return (
        <div className={'wrap'}>
            <div className={'first'}>
                {
                    users.map(value => <User key={value.id} item={value} info={userInfo}/>)
                }
            </div>
            <div className={'second'}>
                {
                    singleUser ?
                        (<h2>
                            {JSON.stringify(singleUser)}
                        </h2>) :
                        (<h2>not defined</h2>)
                }
            </div>
        </div>
    )
}
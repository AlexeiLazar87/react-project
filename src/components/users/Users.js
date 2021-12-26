import User from "../user/User";
import {getUsers} from "../../services/api"
import {useEffect, useState} from "react";
import "./usersStyle.css";

export default function Users() {
    let [users, setUsers] = useState([]);
    let [singleUser, setSingleUser] = useState(null);

    useEffect(async () => {
        let users = await getUsers();
        setUsers([...users])
    });

    const findSingleUser = (id) => {
        let find = users.find(value => value.id === id);
        setSingleUser(find);
    }

    return (
        <div className={'wrap'}>
            <div className={'a'}>
                {
                    users.map(value => <User key={value.id} item={value} chosenUser={findSingleUser}/>)
                }
            </div>
            <div className={'b'}>
                {
                    singleUser ?
                        (<h3>{singleUser.id}<br/>{singleUser.name}<br/>{singleUser.username}<br/>{singleUser.address.city}</h3>) :
                        <h3>User not defined</h3>
                }
            </div>
        </div>
    )
}
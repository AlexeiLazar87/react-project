import User from "./User";
import {useState} from "react";



export default function Users() {

    const usersList = [
        {name: 'vasya', age: 31, isMarried: false},
        {name: 'petya', age: 30, isMarried: true},
        {name: 'kolya', age: 29, isMarried: true},
        {name: 'olya', age: 28, isMarried: false},
        {name: 'max', age: 30, isMarried: true},
        {name: 'anya', age: 31, isMarried: false},
        {name: 'oleg', age: 28, isMarried: false},
        {name: 'andrey', age: 29, isMarried: true},
        {name: 'masha', age: 30, isMarried: true},
        {name: 'olya', age: 31, isMarried: false},
        {name: 'max', age: 31, isMarried: true}
    ];

    let [user, setUser] = useState(usersList);

    const deleteUser = () => {
      user.pop();
      setUser([...user])
    }

    return (
        <div>
            {user.map((value, index) => {
                return <User key={index}
                       age={value.age}
                       name={value.name}
                       isMarried={value.isMarried}/>
            })}
            <button onClick={deleteUser}>DELETE</button>
        </div>
    )
}
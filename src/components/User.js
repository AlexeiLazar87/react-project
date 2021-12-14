
export default function User (props) {
    let {age, name, isMarried} = props;
    return (
        <div className={'user'}>
            <h2>
                Name: {name}
                <br/>
                Age: {age}
            </h2>
            <h3>Status: {isMarried.toString()}</h3>
            <hr/>
        </div>
    )
}
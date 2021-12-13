import './App.css';
import Players from "./players/players";

function App() {
    return (
        <div className={'wrap'}>

            <div id={'title'}>
                <div className={'name'}>manchester united</div>
                <div className={'buttons'}>
                    <button>Login</button>
                    <button>Help</button>
                    <button>Contacts</button>
                </div>
            </div>
            <img src={"https://upload.wikimedia.org/wikipedia/ru/thumb/7/7a/Manchester_United_FC_crest.svg/640px-Manchester_United_FC_crest.svg.png"}/>
            <Players/>


        </div>
    );
}

export default App;

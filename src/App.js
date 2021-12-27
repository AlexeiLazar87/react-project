import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink, useParams
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import PostDetails from "./components/postDetails/PostDetails";

function App() {
    return (
        <Router>
            <div className="App">
                <div className={'link'}>
                    <div><NavLink to={'/'}><h3>home</h3></NavLink></div>
                    <div><NavLink to={'/users'}><h3>to users</h3></NavLink></div>
                    <div><NavLink to={'/posts'}><h3>to posts</h3></NavLink></div>
                </div>
                <Routes>
                    <Route exact={true} path={'/'} element={<h1><img
                        src="https://marketer.ua/wp-content/uploads/2017/09/google-ranking-factors.png" alt="'Google"/>
                    </h1>}/>
                    <Route exact={true} path={'/users'} element={<Users/>}/>
                    <Route exact={true} path={'/posts'} element={<Posts/>}/>
                    <Route exact={true} path={'/posts/:id'} element={<PostDetails/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

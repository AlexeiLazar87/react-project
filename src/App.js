import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
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
                    <Route path={'/'} element={<h1>Home</h1>}/>
                    <Route path={'/users'} element={<Users/>}/>
                    <Route path={'/posts'} element={<Posts/>}/>
                    <Route path={'/posts/:id'} element={<PostDetails/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

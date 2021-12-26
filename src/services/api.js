import axios from "axios";

let options = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

export async function getUsers() {
    let users = await options.get('/users');
    return users.data;
}

async function getPosts () {
    let posts = await options.get('/posts');
    return posts.data;
}

export default {getUsers, getPosts}
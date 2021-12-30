import axios from "axios";

let options = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

export async function getUsers() {
    let users = await options.get('/users');
    return users.data;
}

export async function getPosts () {
    let posts = await options.get('/posts');
    return posts.data;
}

// export async function getPost (id) {
//     let p = await options.get(`/posts/${id}`);
//     return p;
// }


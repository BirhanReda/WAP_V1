const userURL = 'https://jsonplaceholder.typicode.com/users/1';
const postURL = 'https://jsonplaceholder.typicode.com/posts/1';

export async function sequentialFetch() {

    const uRes = await fetch(userURL);
    const user = await uRes.json();
    console.log('user.name:', user.name);

    const pRes = await fetch(postURL);
    const post = await pRes.json();
    console.log('post.title:', post.title);
}

export async function parallelFetch() {

    const [uRes, pRes] = await Promise.all([fetch(userURL), fetch(postURL)]);
    const [user, post] = await Promise.all([uRes.json(), pRes.json()]);
    console.log('user.name:', user.name);
    console.log('post.title:', post.title);
}
sequentialFetch();
parallelFetch();
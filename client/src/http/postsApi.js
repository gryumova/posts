import {$authHost, $host} from "./index";

export const createPost = async (post) => {
    const {data} = await $host.post('api/post', post);
    return data
}

export const fetchPosts = async () => {
    const {data} = await $host.get('api/post')
    return data
}

export const fetchOnePost = async (id) => {
    const {data} = await $host.get('api/post/' + id)
    return data
}

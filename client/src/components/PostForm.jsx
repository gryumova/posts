import React from "react"
import { useState } from "react";
import MyButton from "./UI/button/MyButtton";
import MyInput from "./UI/input/MyInput"

const PostForm = ({create}) => {
    const [post, setPost] = useState({name:"", body:""})
    const [files, setFiles] = useState(null)

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = new FormData();

        newPost.append('name', post.name);
        newPost.append('body', post.body);
        newPost.append('img', files);
        
        create(newPost);

        setPost({name:"", body:""});
        setFiles(null);
    }

    const loadFile = (e) => {
        setFiles(e.target.files[0]);
    }

    return (
        <form>
            <MyInput 
                value={post.title}
                onChange={e => setPost({...post, name : e.target.value})}
                type="text" 
                placeholder="Название поста"
                required
            />
            <MyInput 
                value={post.body}
                onChange={e => setPost({...post, body : e.target.value})}
                type="text" 
                placeholder="Описание поста"
                required
            />
            <MyInput type="file" onChange={loadFile}/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    )
}

export default PostForm;
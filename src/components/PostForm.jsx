import React from "react"
import { useState } from "react";
import MyButton from "./UI/button/MyButtton";
import MyInput from "./UI/input/MyInput"
import getFormatedTime from "../utils/time"

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:"", body:""})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now(), date: getFormatedTime()
        }
        create(newPost)
        setPost({title:"", body:""})
    }

    return (
        <form>
            <MyInput 
                value={post.title}
                onChange={e => setPost({...post, title : e.target.value})}
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
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    )
}

export default PostForm;
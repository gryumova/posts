import React from "react"
import MyButton from "./UI/button/MyButtton"
import { useNavigate } from "react-router-dom"

const PostItem = (props) => {
    const router = useNavigate() 

    return (
        <div className="post">
            <div className="post_content">
                <h2>{props.number}. {props.post.title}</h2>
                <h4>{props.post.date}</h4>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="posts_btn">
                <MyButton
                    onClick={() => router(`/posts/${props.post.id}`)}
                >
                    Открыть
                </MyButton>
                <MyButton
                    onClick={()=>props.remove(props.post)}
                >
                    Удалить
                 </MyButton>
            </div>
        </div>
    )
} 

export default PostItem;
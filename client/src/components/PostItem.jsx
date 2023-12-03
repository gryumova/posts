import React from "react"
import MyButton from "./UI/button/MyButtton"
import { useNavigate } from "react-router-dom"

const PostItem = (props) => {
    const router = useNavigate() 

    return (
        <div className="post">
            <div className="post_content">
                <h3>{props.number}. {props.post.title}</h3>
                <h6>{props.post.date}</h6>
                <div className="post_text">
                    <p style={{lineHeight:2}}>{props.post.body}</p>
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
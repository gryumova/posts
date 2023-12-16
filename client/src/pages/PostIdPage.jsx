import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/index.css";
import "../styles/PostIdPage.css";
import { fetchOnePost } from "../http/postsApi";
import Spinner from 'react-bootstrap/Spinner';

const PostIdPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState();
    
    useEffect(() => {
        fetchOnePost(id).then((data) => {setPost(data)})
        fetchOnePost(id).then((data) => {console.log(data)})
    }, [id])

    return (
        post?
            <div className="wrapper">
                <div className="post_title">
                    <h1>{post.name}</h1>
                </div>
                <div className="post_body">
                    <p>{post.body}</p>
                </div>
                <div className="post_img">
                    {post.img}
                </div>
            </div>
        :
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
    )
}

export default PostIdPage;
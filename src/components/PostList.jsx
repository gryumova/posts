import React from "react";
import PostItem from "./PostItem";

const PostList = ({remove, posts, title}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign:'center'}}>
                Статьи не найдены!
            </h1>
        )
    }

    return (
        <div className="post-list">
            <h1 style={{textAlign:"center"}}>
                {title}
            </h1>
                {posts.map((post, index) => 
                    <PostItem remove={remove} number={index+1} post={post} key={post.id}/>
                )}
        </div>
    )
}

export default PostList;
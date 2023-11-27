import React from "react";
import { useParams } from "react-router-dom";

const PostIdPage = () => {
    const params = useParams();
    
    return (
        <div>
            Вы открыли страницу поста! Параметры {params.id}
        </div>
    )
}

export default PostIdPage;
import React, { useState } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal"
import MyButton from "../components/UI/button/MyButtton";
import usePosts from "../hooks/usePosts"
import '../styles/App.css'
import "../styles/index.css"
import { fetchPosts, createPost } from "../http/postsApi";
import { useEffect } from "react";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort:'', query:''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query); 

    useEffect(() => {
        fetchPosts().then(data => setPosts([...data]));
    }, [])
    
    const handleCreatePost = (newPost) => {
        setModal(false);
        createPost(newPost).then((data) => {
            setPosts([...posts, {
                id: data.id,
                name: data.name,
                body: data.body,
                createdAt: data.createdAt
            }])
        });
    }

    const removePost = (post) => {
        setPosts(posts.filter((el) => el.id !== post.id));
    }

    return (
      <div className="App">
          <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>Создать пост</MyButton>
          <MyModal visible={modal} setVisible={setModal}>
              <PostForm create={handleCreatePost}></PostForm>
          </MyModal>
          <PostFilter 
              filter={filter} 
              setFilter={setFilter}
          />
          <PostList 
              remove={removePost} 
              posts={sortedAndSearchedPosts} 
              title="Статьи ССерво Восход"
          />
      </div>
    );
};

export default Posts;

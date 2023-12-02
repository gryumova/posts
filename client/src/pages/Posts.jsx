import React, { useState } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal"
import MyButton from "../components/UI/button/MyButtton";
import usePosts from "../hooks/usePosts"
import '../styles/App.css'
import "../styles/index.css"

function Posts() {
  const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'Начало положено! ',
            date: "26.08.2002",
            body: 'Эта прекрасная пятница прошла не просто так! Наш отряд познакомился с кандидатами в весёлой и заряженной обстановке. Ребята прочувствовали вайб отряда и участвовали во всех креативных заданиях. Каждый узнал друг друга чуточку ближе✨ А в конце была душевная отрядная спевка! '
        },
        {
          id: 2,
          title: 'Спартакиада Штаба СОТ ',
          date: "30.09.2042",
          body: 'Субботним утром, 11 ноября в рамках Осеннего фестиваля состоялась Спартакиада студенческих отрядов Тимерязевки. В ходе мероприятия бойцы соревновались в таких командных играх как волейбол и стритбол. Наши ребята в сборной команде с ССхО «Кристалл» активно поучаствовали в каждой игре. В итоге, благодаря сплоченному коллективу и энергичной поддержки болельщиков, мы смогли показать преВосходный результат! '
        },
        {
          id: 3,
          title: 'Однажды летом...  ',
          date: "13.04.2022",
          body: 'Как бы нам не хотелось, но целина всегда рано или поздно заканчивается. И для того чтобы пронести сквозь года атмосферу того самого лета, мы используем фотографии 📸 Поэтому с радостью принимаем эстафету, которую передали нам наши друзья из ССО«Комета». '
        }
      ])

  const [filter, setFilter] = useState({sort:'', query:''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query); 
  
  const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false);
  }

  const removePost = (post) => {
      setPosts(posts.filter((el) => el.id !== post.id));
  }

  return (
    
    <div className="App">
        <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>Создать пост</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}></PostForm>
        </MyModal>
        <PostFilter 
          filter={filter} 
          setFilter={setFilter}
        />
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Статьи ССерво Восход"/>
    </div>
  );
}

export default Posts;

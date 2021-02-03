import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { fetchPosts } from "../../redux/action";

export default () => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.fetchedPosts );
    const loading = useSelector(state => state.app.loading);

    if (loading) {
        return (
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    if (!posts.length) {
        return <button onClick={() => dispatch(fetchPosts())}
            className="btn btn-primary">Загрузить</button>
    }
    return posts.map(post => {return <Post post={post} key={post.id}/>})
}

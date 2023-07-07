import React, { useState, useEffect } from 'react';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch();
    }, []);

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{`Post ID: ${post.id}`}</h2>
                    <p>Title: {post.title}</p>
                    <button onClick={() => handlePostClick(post)}>Show Details</button>
                    {selectedPost && selectedPost.id === post.id && (
                        <div>
                            <h3>Post Details</h3>
                            <p>ID: {selectedPost.id}</p>
                            <p>Title: {selectedPost.title}</p>
                            <p>Body: {selectedPost.body}</p>
                        </div>
                    )}
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default PostList;

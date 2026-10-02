import React from 'react';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';
import { CommentList } from './components/CommentList/CommentList';
import './App.scss';

export const App = () => {
  const posts = postsFromServer.map(post => ({
    ...post,
    user: usersFromServer.find(user => user.id === post.userId),
  }));

  return (
    <div className="App">
      <h1 className="App__title">Static List of Posts</h1>

      <div className="App__content">
        <PostList posts={posts} />
        <CommentList comments={commentsFromServer} />
      </div>
    </div>
  );
};

export default App;

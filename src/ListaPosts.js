import React from 'react';
import Post from './Post';

const ListaPosts = ({ posts }) => {
  return (
    <div className="space-y-4">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ListaPosts;

import React, { useState } from 'react';
import CrearPost from './CrearPost';
import ListaPosts from './ListaPosts';

const Foro = () => {
  const [posts, setPosts] = useState([]);

  const agregarPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Foro</h2>
      <CrearPost agregarPost={agregarPost} />
      <ListaPosts posts={posts} />
    </div>
  );
};

export default Foro;

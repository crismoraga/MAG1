import React, { useState } from 'react';

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comentarios, setComentarios] = useState(post.comentarios);
  const [comentario, setComentario] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComentarioSubmit = (e) => {
    e.preventDefault();
    const nuevoComentario = {
      id: Date.now(),
      texto: comentario
    };
    setComentarios([...comentarios, nuevoComentario]);
    setComentario('');
  };

  return (
    <div className="border border-gray-300 p-4 rounded shadow">
      <h3 className="text-xl font-bold mb-2">{post.titulo}</h3>
      <p className="text-gray-700 mb-4">{post.contenido}</p>
      <p className="text-gray-500 mb-2">Por: {post.nombre} ({post.email})</p>
      <div className="flex items-center mb-4">
        <button onClick={handleLike} className="mr-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300">Me gusta ({likes})</button>
      </div>
      <form onSubmit={handleComentarioSubmit} className="space-y-2 mb-4">
        <div>
          <label htmlFor="comentario" className="block mb-2">Agregar Comentario:</label>
          <textarea
            id="comentario"
            name="comentario"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-700 transition duration-300">Comentar</button>
      </form>
      <div>
        <h4 className="font-bold">Comentarios:</h4>
        {comentarios.length > 0 ? (
          <ul className="list-disc ml-4">
            {comentarios.map(coment => (
              <li key={coment.id} className="mt-2">{coment.texto}</li>
            ))}
          </ul>
        ) : (
          <p>No hay comentarios aún.</p>
        )}
      </div>
    </div>
  );
};

export default Post;

import React, { useState } from 'react';

const CrearPost = ({ agregarPost }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoPost = {
      id: Date.now(),
      nombre,
      email,
      titulo,
      contenido,
      likes: 0,
      comentarios: []
    };
    agregarPost(nuevoPost);
    setNombre('');
    setEmail('');
    setTitulo('');
    setContenido('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <div>
        <label htmlFor="nombre" className="block mb-2">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="titulo" className="block mb-2">Título del Post:</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="contenido" className="block mb-2">Contenido:</label>
        <textarea
          id="contenido"
          name="contenido"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300">Publicar</button>
    </form>
  );
};

export default CrearPost;

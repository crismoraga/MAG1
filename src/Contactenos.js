import React from 'react';

const Contactenos = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Contáctenos</h2>
    <p>Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos mediante el siguiente formulario.</p>
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-2">Nombre:</label>
        <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" required />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2">Correo Electrónico:</label>
        <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" required />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2">Mensaje:</label>
        <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded" required></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300">Enviar</button>
    </form>
  </div>
);

export default Contactenos;

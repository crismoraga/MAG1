import React, { useState } from 'react';

const CursosMejoramiento = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  
  const cursos = [
    { id: 1, nombre: 'Curso de Desarrollo Profesional', descripcion: 'Mejora tus habilidades profesionales con este curso avanzado.', imagen: 'https://via.placeholder.com/150' },
    { id: 2, nombre: 'Curso de Comunicación Efectiva', descripcion: 'Aprende a comunicarte de manera efectiva en el lugar de trabajo.', imagen: 'https://via.placeholder.com/150' },
    { id: 3, nombre: 'Curso de Gestión del Tiempo', descripcion: 'Optimiza tu tiempo y aumenta tu productividad con nuestras estrategias.', imagen: 'https://via.placeholder.com/150' },
  ];

  const handleCourseClick = (curso) => {
    setSelectedCourse(curso);
  };

  return (
    <div className="p-4 bg-white bg-opacity-80 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Cursos de Mejoramiento</h1>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/2 py-2">Nombre del Curso</th>
            <th className="w-1/4 py-2">Acción</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso) => (
            <tr key={curso.id} className="bg-gray-100 border-b">
              <td className="py-2 px-4">
                <div className="flex items-center">
                  <img src={curso.imagen} alt={curso.nombre} className="w-16 h-16 mr-4" />
                  <div>{curso.nombre}</div>
                </div>
              </td>
              <td className="py-2 px-4 text-center">
                <button onClick={() => handleCourseClick(curso)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Ver detalles</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCourse && (
        <div className="mt-4 p-4 border border-gray-300 rounded">
          <h2 className="text-2xl font-bold mb-2">{selectedCourse.nombre}</h2>
          <p>{selectedCourse.descripcion}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 mt-2">Postular</button>
        </div>
      )}
    </div>
  );
};

export default CursosMejoramiento;

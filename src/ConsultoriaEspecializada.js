import React from 'react';

const ConsultoriaEspecializada = () => (
  <div className="p-4 relative">
      <div className="centered ml-4">
        <h2 className="text-2xl font-bold mb-4">Consultoría Especializada</h2>
        <p>Proporcionamos consultoría especializada a medida para resolver problemas específicos de tu negocio.</p>
        <ul className="list-disc ml-4">
          <li>Consultoría en Tecnología</li>
          <li>Consultoría en Recursos Humanos</li>
          <li>Consultoría en Finanzas</li>
        </ul>
    </div>
    <div className="w-1/2 pl-2">
      <img src="https://i.ibb.co/QnsHBqW/office-employee-with-ai-generated-free-png-4.png" alt="Imagen de un empleado de oficina" className="w-full shadow" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  </div>
);

export default ConsultoriaEspecializada;
import React from 'react';
const MentoriaEmpresarial = () => (
  <div className="p-4 relative">
    <div className="absolute right-0 w-1/2">
      <img src="https://i.ibb.co/QDqqK0q/freelance-with-ai-generated-free-png.png" alt="Imagen de un empleado de oficina" className="shadow" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
    <div className="ml-4">
      <h2 className="text-2xl font-bold mb-4">Mentoría Empresarial</h2>
      <p>Ofrecemos servicios de mentoría para ayudarte a llevar tu negocio al siguiente nivel.</p>
      <ul className="list-disc ml-4">
        <li>Asesoramiento en Estrategia de Negocios</li>
        <li>Mentoría en Liderazgo</li>
        <li>Consultoría en Innovación</li>
      </ul>
    </div>
  </div>
);

export default MentoriaEmpresarial;
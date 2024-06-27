import React, { useState } from 'react';

const validCodes = ['12345', '67890', '54321']; // Lista de códigos válidos

const PerfilesAcreditados = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  const handleVerify = () => {
    if (validCodes.includes(code)) {
      setMessage('Trabajador Verificado');
    } else {
      setMessage('Trabajador no verificado');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Verificar Trabajador</h2>
      <input
        type="text"
        placeholder="Ingrese el código"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <button
        onClick={handleVerify}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
      >
        Verificar
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default PerfilesAcreditados;

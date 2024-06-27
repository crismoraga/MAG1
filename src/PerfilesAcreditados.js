import React, { useState } from 'react';

const validCodes = ['12345', '67890', '54321']; // Lista de códigos válidos

const PerfilesAcreditados = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  const handleVerify = () => {
    if (validCodes.includes(code)) {
      setMessage('Código Válido');
    } else {
      setMessage('Código Invalido');
    }
  };

return (
  <div className="p-4 flex"> {/* Agregar la clase flex para usar flexbox */}
    <div className="w-1/2 pr-2"> {/* Dividir en dos columnas, mitad izquierda */}
      <h2 className="text-2xl font-bold mb-4">Verificar Trabajador</h2>
      <input
        type="text"
        placeholder="Ingrese el código a verificar"
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
    <div className="w-1/2 pl-2">
      <div>
        <img src="https://i.ibb.co/b6MQt8H/office-employee-with-ai-generated-free-png-2.png" alt="Office Employee" className="shadow"  />
      </div>
    </div>
  </div>
  );
}
export default PerfilesAcreditados;

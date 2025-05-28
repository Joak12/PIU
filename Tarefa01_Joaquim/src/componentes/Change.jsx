import React, { useState } from 'react';

export default function Change() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    
    // Alternando o estilo diretamente
    document.body.style.background = darkMode ? "white" : "black";
    
    const color = darkMode ? "black" : "white";
    document.querySelectorAll('p').forEach(p => {
      p.style.color = color;
    });
    
    document.querySelectorAll('h1').forEach(h1 => {
      h1.style.color = color;
    });
  };

  return (
    <div className="min-h-screen p-8" style={{ background: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black' }}>
      <h1 className="text-3xl font-bold mb-4">Modo {darkMode ? 'Escuro' : 'Claro'}</h1>
      <button
        className="px-4 py-2 bg-gray-800 text-white rounded"
        onClick={toggleDarkMode}
      >
        Alternar Modo
      </button>
    </div>
  );
}
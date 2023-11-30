import React, { useEffect, useState } from 'react';

const Plants_ = () => {
  const [phpData, setPhpData] = useState(null);

  useEffect(() => {
    fetch('../../scr/api/produccion.php')
      .then(response => response.json())
      .then(data => setPhpData(data))
      .catch(error => console.error('Error al obtener datos desde PHP', error));
  }, []); 

  return (
    <div>
      {phpData ? <p>{phpData.message}</p> : <p>Cargando datos desde PHP...</p>}
    </div>
  );
};

export default Plants_;
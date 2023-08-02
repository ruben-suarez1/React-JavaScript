const Objetos = () => {
  /* Objetos */
  const persona = {
    nombre: 'Dario',
    apellido: 'Suarez',
    edad: 25,
    direccion: {
      ciudad: ' Bogota D. C.',
      zip: 11001,
      lat: 14.2598,
      lng: 34.515
    }
  };

  const { nombre, apellido, edad, direccion } = persona;
  const { ciudad, zip, lat, lng } = direccion;
  return (
    <div className="componente">
      <h4 className="pagination">2</h4>
      <h1 className="titulos">Objetos</h1>
      <p className="parrafos">Nombre: {nombre}</p>
      <p className="parrafos">Apellido: {apellido}</p>
      <p className="parrafos">Edad: {edad}</p>
      <h3 className="subtitulos">Direccion</h3>
      <p className="parrafos">Ciudad: {ciudad}</p>
      <p className="parrafos">Latitud: {lat}</p>
      <p className="parrafos">Longitud: {lng}</p>
      <p className="parrafos">Codigo Postal: {zip}</p>
    </div>
  )
}

export default Objetos;

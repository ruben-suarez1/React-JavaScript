const Variables = () => {
  /* Variables */
  const nombre = 'Ruben';
  const apellido = 'Suarez';
  return (
    <div className="componente">
      <h4 className="pagination">1</h4>
      <h1 className="titulos">Variables</h1>
      <p className="parrafos">Hola soy {nombre} {apellido}</p>
    </div>
  )
}

export default Variables;

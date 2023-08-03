const OperadorTernario = () => {

    const activo = true;

    const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
    
    const mensaje2 = activo && 'Activo'

  return (
    <div className="componente">
            <h4 className="pagination">9</h4>
            <h1 className="titulos">Operador Condiconal Ternario</h1>
            <p className="parrafos">{mensaje}</p>
            <p className="parrafos">{mensaje2}</p>
        </div>
  )
}

export default OperadorTernario
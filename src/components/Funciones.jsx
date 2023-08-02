const Funciones = () => {
    /* Funciones */
    const saludar = (alias) => {
        return `Hola, ${alias}`;
    };
    const sumar = () => {
        const numero1 = 2;
        const numero2 = 5;
        const sumaTotal = numero1 * numero2;
        return `Suma Total = ${sumaTotal}`;
    };
    const getUser = (nombre) => {
        return {
            uid: 'ABCDKAK',
            username: nombre
        }
    };

    const { uid, username } = getUser;
    return (
        <div className="componente">
            <h4 className="pagination">4</h4>
            <h1 className="titulos">Funciones</h1>
            <p className="parrafos">{saludar(' Suarez')}</p>
            <p className="parrafos">{sumar()}</p>
            <p className="parrafos">{uid}</p>
            <p className="parrafos">{username}</p>
        </div>
    )
}

export default Funciones;

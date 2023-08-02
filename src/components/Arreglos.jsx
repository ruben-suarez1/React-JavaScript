const Arreglos = () => {
    /* Arreglos */
    const arreglo = [1, 2, 3, 4];
    let arreglo2 = [...arreglo, 5];
    const arreglo3 = arreglo2.map(function (numero) {
        return numero * 2;
    });
    return (
        <div className="componente">
            <h4 className="pagination">3</h4>
            <h1 className="titulos">Arreglos</h1>
            <p className="parrafos">{arreglo2}</p>
            <p className="parrafos">{arreglo3}</p>
        </div>
    )
}

export default Arreglos;

const Desestructuración = () => {
    /* desestructuración */
    const account = {
        alias: 'Ruben',
        edad: 30,
        contrasena: 'toby'
    }
    const { alias, edad, contrasena } = account;

    const ciudades = ['neiva', 'medellin', 'bogota', 'ibague', 'cali'];

    const [neiva, medellin, bogota, ibague, cali] = ciudades;

    const useContex = ({ alias, edad, contrasena }) => {
        return {
            nombreClave: contrasena,
            anios: edad,
            nombreUser: alias

        }
    }
    const { nombreClave, anios, nombreUser } = useContex(account);

    return (
        <div className="componente">
            <h4 className="pagination">5</h4>
            <h1 className="titulos">Desestructuración de objeto</h1>
            <p className="parrafos">{alias}</p>
            <p className="parrafos">{edad}</p>
            <p className="parrafos">{contrasena}</p>

            <h1 className="titulos">Desestructuración de arreglo</h1>
            <p className="parrafos"> {neiva} - {medellin} - {bogota} - {ibague} - {cali} </p>

            <h1 className="titulos">Desestructuración en una Funcion</h1>
            <p className="parrafos">{nombreClave} - {anios} - { nombreUser }</p>
        </div>
    )
}

export default Desestructuración;

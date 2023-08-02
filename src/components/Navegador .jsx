import { useState } from 'react';

const Navegador = ({ listaComponentes }) => {
    const [indiceComponente, setIndiceComponente] = useState(0);
    const totalComponentes = listaComponentes.length;

    const irAlSiguienteComponente = () => {
        setIndiceComponente((prevIndice) => (prevIndice + 1) % totalComponentes);
    };

    const irAlComponenteAnterior = () => {
        setIndiceComponente((prevIndice) =>
            prevIndice === 0 ? totalComponentes - 1 : prevIndice - 1
        );
    };

    const renderComponenteActual = () => {
        const ComponenteActual = listaComponentes[indiceComponente];
        return <ComponenteActual />;
    };

    return (
        <div>
            <div className="navegador-content">{renderComponenteActual()}</div>
            <div className='arrows'>
                <button className="navegador-btn" onClick={irAlComponenteAnterior}>&larr;</button>
                <button className="navegador-btn" onClick={irAlSiguienteComponente}>&rarr;</button>
            </div>

        </div>
    );
};

export default Navegador;
import { useState, useEffect } from 'react';

const FechApi = () => {

    const [imageUrl, setImageUrl] = useState('');
    const key = 'rNYRYZFLxj1vKqMQNy8Jrz6juBekyzME';

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=${key}`)
            .then((resp) => resp.json())
            .then(({ data }) => {
                const { url } = data.images.original;
                setImageUrl(url);
            })
            .catch(console.warn);
    }, []);

    return (
        <div className="componente">
            <h4 className="pagination">7</h4>
            <h1 className="titulos">Fech API</h1>
            <p className="parrafos">API giphy</p>
            <div id="gift">
                {imageUrl && <img src={imageUrl} alt="GIF" className='gift' />}
            </div>
        </div>
    )
}

export default FechApi;
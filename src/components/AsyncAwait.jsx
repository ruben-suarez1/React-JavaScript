import { useState, useEffect } from 'react';

const AsyncAwait = () => {

    const [imageUrl, setImageUrl] = useState('');
    const key = 'rNYRYZFLxj1vKqMQNy8Jrz6juBekyzME';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${key}`);
                const { data } = await response.json();
                const { url } = data.images.original;
                setImageUrl(url);
            } catch (error) {
                console.warn(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="componente">
            <h4 className="pagination">8</h4>
            <h1 className="titulos"> Async - Await</h1>
            <p className="parrafos">API giphy</p>
            <div id="gift">
                {imageUrl && <img src={imageUrl} alt="GIF" className='gift' />}
            </div>
        </div>
    );
}

export default AsyncAwait;

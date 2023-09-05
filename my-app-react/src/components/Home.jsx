import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        console.log('componente montado');
        return () => console.log('ahora sale');
    }, [])
    return (
        <div>
            Home
        </div>
    );
}

export default Home;

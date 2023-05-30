import React from 'react';

const UnifiedExample = () => {

    function sayHello(name) {
        alert(`hello, ${name}`);
    }

    return (
        <button onClick={() => sayHello('James')}>Greet</button>
    );
}

export default UnifiedExample;
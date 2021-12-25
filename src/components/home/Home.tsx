import React from 'react';
import { deckOfApiCalls } from '../../dictionaries/deckOfApiCalls';
import useFetch from '../../hooks/useFetch';

const Home = () => {
    const data: any = useFetch(deckOfApiCalls.getAllCards, '');
    const cards = data.data.cards;

    return (
        <div>
            This is the home section
        </div>
    )
}

export default Home;

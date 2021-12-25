
import React from 'react';
import { deckOfApiCalls } from '../../dictionaries/deckOfApiCalls';
import useFetch from '../../hooks/useFetch';
import { Card, CardMedia } from '@mui/material';
import { ICard } from '../../interfaces/ICard';

const Home = () => {
    const getAllCards: any = useFetch(deckOfApiCalls.getAllCards, {});

    if (!getAllCards.response) {
        return <>Loading...</>
    }

    const cards: ICard[] = getAllCards.response.cards;
    
    return (
        <>
        {cards.map(card => (
            <Card key={card.code} sx={{ width: 1/8, display: 'inline-block' }}>
                <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.code}
                />
            </Card>
        ))}
        </>
    )
}

export default Home;

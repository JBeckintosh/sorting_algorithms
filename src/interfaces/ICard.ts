export interface IDeck {
    success: boolean;
    deck_id: string;
    shuffled: boolean;
    remaining: number;
}

export interface ICard {
    image: string;
    value: string;
    suit: string;
    code: string;
}
export interface IDish {
    id: number;
    image: string;
    name: string;
    time: number;
    ingredients: [{
        id_ingredients: number;
        name: string;
    }]
}
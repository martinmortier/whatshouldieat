export interface IDish {
    id_dish: number;
    name: string;
    time: number;
    ingredients: [{
        id_ingredient: number;
        name: string;
    }]
}
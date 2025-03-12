export interface Todo {
    type: string;
    name: string;
}

export enum TodoType {
    FRUIT = "Fruit",
    VEGETABLE = "Vegetable",
}
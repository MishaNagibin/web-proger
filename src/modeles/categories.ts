export interface Categories {
    ID: number;
    name: string;
    description: string;
    route: string;
}

export interface CategoriesFrontend {
    ID: number;
    name: string;
    description: string;
    slug?: string;
}

export interface Categories {
    [key: string]: Subcategories[]
}

export interface Subcategories {
    ID: number
    name: string
    description: string
    categorySlug?: string
    langSlug?: string
}

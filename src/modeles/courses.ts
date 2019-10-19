export interface Courses {
    ID: number
    name: string
    description: string
    image: string
    slug: string
    category: string
    lang: string,
    lessons: Lessons[]
}

export interface Lessons {
    ID: number
    name: string
    link: string
}

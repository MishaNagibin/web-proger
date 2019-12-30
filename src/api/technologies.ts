import { api } from "@/utils"
import { Technologies } from '@/modeles';

const technologies = [
    {
        ID: 1,
        name: "HTML",
        description:
            "Какой то текст про htmlКакой то текст про htmlКакой то текст про htmlКакой то текст про htmlКакой то текст про htmlКакой то текст про htmlКакой то текст про htmlКакой то текст про htmlКакой то текст про htmlКакой то текст про htmlКакой то текст про htmlКакой то текст про htmlКакой то текст про htmlКакой то текст про htmlКакой то текст про htmlКакой то текст про htmlКакой то текст про htmlКакой то текст про html",
        image: "html.png",
        slug: "html",
        category: "Вёрстка",
    },
    {
        ID: 2,
        name: "CSS",
        description:
            "Какой то текст про css",
        image: "css.png",
        slug: "css",
        category: "Вёрстка",
    },
    {
        ID: 3,
        name: "JavaScript",
        description:
            "Какой то текст про JavaScript",
        image: "javascript.jpg",
        slug: "javascript",
        category: "Frontend",
    },
    {
        ID: 4,
        name: "JavaScrip4t",
        description:
            "Какой то текст про JavaScript",
        image: "javascript.jpg",
        slug: "javascript",
        category: "Frontend",
    },
    {
        ID: 5,
        name: "JavaScript3",
        description:
            "Какой то текст про JavaScript",
        image: "javascript.jpg",
        slug: "javascript",
        category: "Frontend",
    },
    {
        ID: 3,
        name: "JavaScript",
        description:
            "Какой то текст про JavaScript",
        image: "javascript.jpg",
        slug: "javascript",
        category: "Frontend",
    },
    {
        ID: 3,
        name: "JavaScript",
        description:
            "Какой то текст про JavaScript",
        image: "javascript.jpg",
        slug: "javascript",
        category: "Frontend",
    },
    {
        ID: 3,
        name: "JavaScript",
        description:
            "Какой то текст про JavaScript",
        image: "javascript.jpg",
        slug: "javascript",
        category: "Frontend",
    },
] as Technologies[]

function get(technology?: Technologies) {
    if (technology === undefined) {
        return Promise.resolve<Technologies[]>(technologies)
    }

    const result = technologies.filter(p => p.ID === technology.ID)
    return Promise.resolve<Technologies[]>(result)

}

export default {
    get,
}
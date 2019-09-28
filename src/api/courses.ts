import { api } from "@/utils"
import { Courses } from '@/modeles';

function get() {
    return Promise.resolve([
        {
            ID: 1,
            name: "Vue",
            description:
                "Vue.js — JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов. Легко интегрируется в проекты с использованием других JavaScript-библиотек. Может функционировать как веб-фреймворк для разработки одностраничных приложений в реактивном стиле.",
            image: "vue.jpg",
            slug: "vue",
            category: "Frontend",
            lang: "Vue"
        },
        {
            ID: 2,
            name: "React",
            description:
                "React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.",
            image: "react.png",
            slug: "react",
            category: "Frontend",
            lang: "React"
        },
        {
            ID: 3,
            name: "Angular",
            description:
                "Angular — это открытая и свободная платформа для разработки веб-приложений, написанная на языке TypeScript, разрабатываемая командой из компании Google, а также сообществом разработчиков из различных компаний. Angular — это полностью переписанный фреймворк от той же команды, которая написала AngularJS.",
            image: "angular.jpg",
            slug: "angular",
            category: "Frontend",
            lang: "Angular"
        },
        {
            ID: 4,
            name: "TypeScript",
            description:
                "TypeScript — язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript. Разработчиком языка TypeScript является Андерс Хейлсберг, создавший ранее Turbo Pascal, Delphi и C#.",
            image: "typescript.png",
            slug: "typescript",
            category: "Frontend",
            lang: "TypeScript"
        },
        {
            ID: 5,
            name: "RxJS",
            description:
                "RxJS — это библиотека для JS, которая использует паттерн Observable (с англ. “Обозреватель”) для упрощения обработки и компановки асинхронного или callback кода. Проще говоря реактивное программирование.",
            image: "rxjs.png",
            slug: "rxjs",
            category: "Frontend",
            lang: "RxJS"
        },
        {
            ID: 6,
            name: "JavaScript",
            description:
                "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией языка ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.",
            image: "js.png",
            slug: "javascript",
            category: "Frontend",
            lang: "JavaScript"
        },
        {
            ID: 7,
            name: "JQuery",
            description:
                "jQuery — библиотека JavaScript, фокусирующаяся на взаимодействии JavaScript и HTML. Библиотека jQuery помогает легко получать доступ к любому элементу DOM, обращаться к атрибутам и содержимому элементов DOM, манипулировать ими. Также библиотека jQuery предоставляет удобный API для работы с AJAX.",
            image: "jq.jpg",
            slug: "jquer",
            category: "Frontend",
            lang: "JQuery"
        },
        {
            ID: 8,
            name: "EcmaScript",
            description:
                "ECMAScript — это встраиваемый расширяемый не имеющий средств ввода-вывода язык программирования, используемый в качестве основы для построения других скриптовых языков. Стандартизирован международной организацией ECMA в спецификации ECMA-262. Расширения языка: JavaScript, JScript и ActionScript.",
            image: "es6.jpg",
            slug: "ecmascript6",
            category: "Frontend",
            lang: "EcmaScript"
        },
        {
            ID: 9,
            name: "Redux основы",
            description:
                "Redux - это мощный инструмент, помогающий управлять состоянием JS по мере масштабирования приложения. В этом курсе вы узнаете, как быстро воспользоваться преимуществами Redux для любого веб-приложения, независимо от того, используете вы React или нет.",
            image: "redux-osnovi.png",
            slug: "redux-osnovi",
            category: "Frontend",
            lang: "Redux"
        },
        {
            ID: 10,
            name: "Nuxt",
            description:
                "Полное руководство по Nuxt. Почему стоит посмотреть этот курс? Полный охват теоретических и практических знаний с полным циклом разработки: клиентская и серверная части. Nuxt.js позволяет создавать SEO-дружественные приложения, которые можно продвигать в поисковых системах. По урокам курса создайте с нуля универсальное SPA-приложение и поместите его в портфолио. Создание и настройка SSR-приложений занимает много времени. Nuxt позволяет крайне просто создавать универсальные приложения.",
            image: "nuxtjs.jpg",
            slug: "nuxt",
            category: "Frontend",
            lang: "Nuxt"
        },
        {
            ID: 11,
            name: "Yii2",
            description:
                "Yii — объектно-ориентированный компонентный фреймворк, написанный на PHP и реализующий парадигму MVC.",
            image: "yii2.jpg",
            slug: "yii2",
            category: "Backend",
            lang: "Yii2"
        },
    ] as Courses[])
}

export default {
    get,
}
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
            lang: "Yii"
        },
        {
            ID: 13,
            name: "Основы Node.js",
            description:
                "Node или Node.js — программная платформа, основанная на движке V8, превращающая JavaScript из узкоспециализированного языка в язык общего назначения.",
            image: "nodejs.jpg",
            slug: "basics-nodejs",
            category: "Backend",
            lang: "NodeJS"
        },
        {
            ID: 14,
            name: "Курс по созданию Telegram-бота",
            description:
                "В данном курсе вы научитесь работать с API Telegram, поработаете с Node.js. И научитесь создавать бота для телеграма.",
            image: "telegram.png",
            slug: "telegram-bot-creation-course",
            category: "Backend",
            lang: "NodeJS"
        },
        {
            ID: 15,
            name: "Курс по MongoDB",
            description:
                "MongoDB — документоориентированная система управления базами данных с открытым исходным кодом, не требующая описания схемы таблиц. Классифицирована как NoSQL, использует JSON-подобные документы и схему базы данных. Написана на языке C++.",
            image: "mongodb.jpg",
            slug: "mongodb",
            category: "Backend",
            lang: "MongoDB"
        },
        {
            ID: 16,
            name: "Курс по PHP",
            description:
                "PHP — скриптовый язык общего назначения, интенсивно применяемый для разработки веб-приложений. В настоящее время поддерживается подавляющим большинством хостинг-провайдеров и является одним из лидеров среди языков, применяющихся для создания динамических веб-сайтов.",
            image: "php.jpg",
            slug: "php",
            category: "Backend",
            lang: "PHP"
        },
        {
            ID: 17,
            name: "Курс по MySQL",
            description:
                "MySQL — свободная реляционная система управления базами данных. Разработку и поддержку MySQL осуществляет корпорация Oracle, получившая права на торговую марку вместе с поглощённой Sun Microsystems, которая ранее приобрела шведскую компанию MySQL AB.",
            image: "mysql.jpg",
            slug: "mysql",
            category: "Backend",
            lang: "MySQL"
        },
        {
            ID: 18,
            name: "Курс по Python, TKinter, Django.",
            description:
                "Python — высокоуровневый язык программирования общего назначения, ориентированный на повышение производительности разработчика и читаемости кода. Синтаксис ядра Python минималистичен. В то же время стандартная библиотека включает большой объём полезных функций.",
            image: "Python-Tkinter--Django.jpg",
            slug: "python-tkinter-django",
            category: "Backend",
            lang: "Python"
        },
        {
            ID: 19,
            name: "Курс по Symfony",
            description:
                "Symfony — свободный фреймворк, написанный на PHP, который использует паттерн Model-View-Controller. Symfony предлагает быструю разработку и управление веб-приложениями, позволяет легко решать рутинные задачи веб-программиста. Работает только с PHP 5 и выше. Имеет поддержку множества баз данных.",
            image: "symfony.jpg",
            slug: "symfony",
            category: "Backend",
            lang: "Symfony"
        },
        {
            ID: 20,
            name: "Курс по PostgreSQL",
            description:
                "PostgreSQL — свободная объектно-реляционная система управления базами данных. Существует в реализациях для множества UNIX-подобных платформ, включая AIX, различные BSD-системы, HP-UX, IRIX, Linux, macOS, Solaris/OpenSolaris, Tru64, QNX, а также для Microsoft Windows.",
            image: "pgsql.jpg",
            slug: "postgresql",
            category: "Backend",
            lang: "PostgreSQL"
        },
        {
            ID: 21,
            name: "Курс по Laravel",
            description:
                "Laravel — бесплатный веб-фреймворк с открытым кодом, предназначенный для разработки с использованием архитектурной модели MVC. Laravel выпущен под лицензией MIT. Исходный код проекта размещается на GitHub.",
            image: "laravel.jpg",
            slug: "laravel",
            category: "Backend",
            lang: "Laravel"
        },
        {
            ID: 22,
            name: "Курс по Ruby",
            description:
                "Ruby — динамический, рефлективный, интерпретируемый высокоуровневый язык программирования. Язык обладает независимой от операционной системы реализацией многопоточности, сильной динамической типизацией, сборщиком мусора и многими другими возможностями.",
            image: "ruby.jpg",
            slug: "ruby",
            category: "Backend",
            lang: "Ruby"
        },
        {
            ID: 23,
            name: "Курс по Ruby on Rails",
            description:
                "Ruby on Rails — фреймворк, написанный на языке программирования Ruby, реализует архитектурный шаблон Model-View-Controller для веб-приложений, а также обеспечивает их интеграцию с веб-сервером и сервером баз данных. Является открытым программным обеспечением и распространяется под лицензией MIT.",
            image: "ruby-on-rails.jpg",
            slug: "ruby-on-rails",
            category: "Backend",
            lang: "RubyOnRails"
        },
        {
            ID: 24,
            name: "Курс по C# от Udemy",
            description:
                "C# — объектно-ориентированный язык программирования.",
            image: "sharp-udemy.png",
            slug: "sharp-udemy",
            category: "Backend",
            lang: "C#"
        },
        {
            ID: 25,
            name: "Java Professional",
            description:
                "С должным подходом, ты за 60 дней сможешь писать на Java. После прохождения этого курса ты будешь с уверенностью чувствовать себя с ООП в Java, знать как работать с графическими компонентами, работать з базами данных и тд. Также ты научишься не только программировать но и проектировать.",
            image: "java_profi.jpg",
            slug: "java-professional",
            category: "Backend",
            lang: "Java"
        },
        {
            ID: 26,
            name: "Java. От простого к сложному",
            description:
                "После изучения материала данного курса студенты будут уметь программировать на языке Java на уровне, достаточном для самостоятельной разработки приложений и поиска своей первой работы в данной сфере. Те кто уже имел предварительный опыт программирования на других языках, смогут освоить концепции и практики используемые в языке Java.",
            image: "java-prosto-slojno.jpg",
            slug: "java-from-simple-to-complex",
            category: "Backend",
            lang: "Java"
        },
        {
            ID: 27,
            name: "Slim микрофреймворк PHP",
            description:
                "В данном курсе вы познакомитесь с PHP микрофреймворком Slim. Вы изучите роуты, шаблонизатор, многое другое и создадите cms.",
            image: "slim.png",
            slug: "slim",
            category: "Backend",
            lang: "Slim"
        },
        {
            ID: 28,
            name: "Программирование на Go",
            description:
                "В данном курсе вы познакомитесь и изучите Go. Go — компилируемый многопоточный язык программирования, разработанный внутри компании Google.",
            image: "golang.jpg",
            slug: "go-programming",
            category: "Backend",
            lang: "Golang"
        },
    ] as Courses[])
}

export default {
    get,
}
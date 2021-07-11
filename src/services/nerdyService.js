export default class  NerdyService {
    // Зробив так тільки для економії часу і безпроблемного деплою
    _announcements = [
        {   
            name: "Senior Front end developer",
            id: "senior_front_end_developer", 
            createdAt: "30.04.2021",
            description: 
                `     Qualifications:
                    - 3+ years of experience in commercial front-end development
                    - high level of knowledge of native JS
                    - good knowledge of HTML / CSS
                    - knowledge of Async code callbacks, promises, async / await
                    - experience with REST API
                    - experience in a grocery company
                `
        },
        {
            name: "Senior Fullstack developer (Laravel + Vue.js)", 
            id: "senior_fullstack_developer_(Laravel)", 
            createdAt: "01.01.2021",
            description: `
                С какими технологиями ты будешь работать на проекте:
                Backend:
                - PHP 7.4
                - Laravel 5.8
                - Mysql 5.7
                - Redis
                - Elasticsearch
                - Clickhouse
                - Gitlab CI
                - Docker.
                
                Frontend:
                - Vue.js 2.6
                - Vuex
                - Webpack 4
                - Sass
                - Font Awesome 4.7
                - jQuery (для работы зависимых плагинов, напр. bootstrap)
            `
        },
        {
            name: "Junior / Middle Node.js Developer", 
            id: "junior_middle_node_js_developer", 
            createdAt: "25.08.2021",
            description: `
            Про тебе

                        Маєш принаймні 1 рік досвіду роботи з JavaScript
                        Маєш досвід роботи з Node / Express.JS
                        Працював з SQL або noSQL DB
                        Система контролю версій - Git
                        Менеджер пакетів (NPM / Yarn)
                        Досвід роботи з терміналом UNIX
                        Здатний працювати в команді або самостійно
                        Англійська: Intermediate
            `
        },
        {
            name: "React Developer",
            id: "react_developer", 
            createdAt: "15.01.2021",
            description: `
            Требования:
                - опыт разработки с использованием React - не менее 1 года;
                - уверенные знания JS (ES6+);
                - умение работать c менеджерами состояния (Redux, MobX, ReactN и т.д);
                - React Router;
                - хорошие навыки HTML/CSS-вёрстки;
                - навыки работы с адаптивным дизайном;
                - навыки работы с системами контроля версий GIT.`
        },
        {
            name: "Javascript developer", 
            id: "javascript_developer", 
            createdAt: "07.05.2021",
            description: `
            Requirments:
            — 3 years of app development experience;
            — Experience with Ionic/Cordova
            — Experience with Angular
            `
        },
        {
            name: "Junior Backend Developer",
            id: "junior_backend_developer", 
            createdAt: "27.05.2021",
            description: `
            Requirements:
                At least 1-year experience in Javascript
                At least 1-year experience with NodeJS
                Experience with Express/NestJS
                Experience in TypeScript
                Experience with Postgres
                Knowledge of OOP principles`
        },
        {
            name: "Middle/Senior .NET developer", 
            id: "middle_senior_NET_developer", 
            createdAt: "20.07.2021",
            description: `
            Required skills

                — NET (C#, ASP.NET), SQL
                — IoC, ORM, RDBMS, NoSQL, Automated Testing, Authentication, Messaging, Git
                — JavaScript / TypeScript
                — REST, gRPC
                — Docker
                — Еxperience in designing application layers, modules
                — Scrum basics
                — Communication with English speaking customers directly and independently
            `
        },
    ]


    getAllAnnouncements = async () => {
        return await this._announcements;
      };

    getAnn = async (id) => {
        return await this._announcements.filter(item => item.id.includes(id))
    }

}

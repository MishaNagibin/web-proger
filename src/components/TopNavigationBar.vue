<template>
    <section class="c-top-navigation-bar">
        <section class="container">
            <ul>
                <li>
                    <router-link
                        :to="{ name: 'Courses' }"
                        :class="{ active: routeName === 'Courses' }"
                    >Курсы</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Technologies' }">Технологии</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'WorldSkillsRussia' }">WorldSkills Russia</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'DemoExam' }">Демонстрационный экзамен</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Abilimpix' }">Абилимпикс</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ProfessionalRetrainingCourses' }">Курсы профпереподготовки</router-link>
                </li>
            </ul>
        </section>
    </section>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    name: "cTopNavigationBar",
    computed: {
        routeName(): string | undefined {
            return this.$route.name
        },
    }
})
</script>

<style lang="scss">
@import "../styles/colors";

.c-top-navigation-bar {
    width: 100%;
    height: 50px;
    display: flex;
    flex-shrink: 0;
    background: $gray-200;
    border-bottom: 1px solid $gray-300;

    & > .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 0 20px 0 20px;

        & > ul {
            display: flex;
            align-items: center;
            list-style: none;
            margin: 0;
            padding: 0;

            & > li {
                display: flex;
                align-items: center;
                position: relative;
                margin-right: 30px;
                

                & > a {
                    display: flex;
                    align-items: center;
                    font-size: 16px;
                    text-decoration: none;
                    color: $gray-800;

                    &:hover {
                        color: $red-500;
                    }
                }

                & > .active {
                    color: $red-500;
                }
            }
        }
    }
}
</style>
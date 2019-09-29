<template>
    <section class="c-Courses">
        <div
            v-for="(course, index) of preparedCourses"
            :key="index"
        >
            <router-link :to="{ name: 'Course', params: { courseID: course.ID, courseSlug: course.slug } }">
                <span>{{ course.category }}</span>
                <img :src="getImgUrl(course.image)" />
            </router-link>
            <div class="info">
                <h3>{{ course.name }}</h3>
                <span>{{ course.description }}</span>
                <router-link :to="{ name: 'Course', params: { courseID: course.ID, courseSlug: course.slug } }">
                    <button>Посмотреть</button>
                </router-link>
            </div>
        </div>
        <section>
            <div
                v-show="currentPage > 1"
                @click="onPreventClick"
            >
                <span class="icon arrow-prevent"></span>
            </div>
            <span
                v-for="(pageNumber, index) of totalPages"
                :key="index"
                :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)}"
                @click="setPage(pageNumber)"
            >{{ pageNumber }}</span>
            <div
                v-show="currentPage < totalPages"
                @click="onNextClick"
            >
                <span class="icon arrow-next"></span>
            </div>
        </section>
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Courses } from "@/modeles";

export default Vue.extend({
    name: "Courses",
    props: {
        listCourses: {
            type: Array,
            required: true
        },
        langCourse: {
            type: String,
            default: undefined
        },
        categoryCourse: {
            type: String,
            default: undefined
        }
    },
    data() {
        return {
            currentPage: 1 as number,
            itemsPerPage: 10 as number,
            resultCount: 0 as number
        };
    },
    methods: {
        getImgUrl(image: string) {
            return require("@/assets/images/" + image);
        },
        setPage(pageNumber: number) {
            this.currentPage = pageNumber;
        },
        onPreventClick() {
            this.currentPage--;
        },
        onNextClick() {
            this.currentPage++;
        }
    },
    computed: {
        preparedCourses(): Object {
            const start =
                this.currentPage * this.itemsPerPage - this.itemsPerPage;
            const end = start + this.itemsPerPage;

            if (this.categoryCourse !== undefined) {
                this.resultCount = (this.listCourses as Courses[]).filter(
                    n => n.category === this.categoryCourse
                ).length;
                return (this.listCourses as Courses[])
                    .filter(n => n.category === this.categoryCourse)
                    .slice(start, end);
            }

            if (this.langCourse !== undefined) {
                this.resultCount = (this.listCourses as Courses[]).filter(
                    n => n.lang === this.langCourse
                ).length;
                return (this.listCourses as Courses[])
                    .filter(n => n.lang === this.langCourse)
                    .slice(start, end);
            } else {
                this.resultCount = this.listCourses.length;
                return this.listCourses.slice(start, end);
            }
        },
        totalPages(): number {
            return Math.ceil(this.resultCount / this.itemsPerPage);
        }
    }
});
</script>

<style lang="scss">
@import "../styles/colors";
@import "../styles/icons";

.c-Courses {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
        margin: 20px 0;
        background-color: $gray-200;
        display: flex;
        width: 100%;
        height: 175px;

        & > a {
            text-decoration: none;
            display: flex;
            align-self: center;
            color: $gray-000;
            position: relative;

            & > span {
                position: absolute;
                background-color: $red-500;
                padding: 5px;
            }

            & > img {
                width: 350px;
            }
        }

        & > .info {
            display: flex;
            flex-direction: column;
            margin-left: 20px;
            width: 100%;

            & > a {
                display: flex;
                align-self: flex-end;
                text-decoration: none;

                & > button {
                    border: 1px solid $red-500;
                    outline: none;
                    user-select: none;
                    cursor: pointer;
                    background: $red-500;
                    margin: 0 10px 10px 0;
                    border-radius: 4px;
                    padding: 0 16px;
                    color: $gray-000;
                    height: 40px;

                    &:hover {
                        background: $red-400;
                    }

                    &:active {
                        background: $red-600;
                    }

                    &:focus {
                        box-shadow: 0 0 0 2px rgba(63, 81, 181, 0.15);
                    }
                }
            }

            & > span {
                margin-bottom: 10px;
                overflow: hidden;
                height: 80px;
                text-overflow: ellipsis;
                padding-right: 20px;
            }
        }

        &:hover {
            box-shadow: 0 0 10px 3px $gray-500;
        }
    }

    & > a {
        display: flex;
        text-decoration: none;

        & > button {
            border: 1px solid $red-500;
            outline: none;
            user-select: none;
            cursor: pointer;
            background: $red-500;
            border-radius: 4px;
            padding: 0 16px;
            color: $gray-000;
            height: 40px;
            margin-bottom: 20px;
            width: 200px;

            &:hover {
                background: $red-400;
            }

            &:active {
                background: $red-600;
            }

            &:focus {
                box-shadow: 0 0 0 2px rgba(63, 81, 181, 0.15);
            }
        }
    }

    & > section {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        user-select: none;

        & > div {
            display: flex;
            align-items: center;

            & > .icon {
                background-color: $gray-900;
            }

            &:hover {
                background-color: $gray-300;
                cursor: pointer;
            }
        }

        & > span {
            margin: 5px 5px;
            cursor: pointer;

            padding: 10px 20px;

            &:hover {
                background-color: $gray-300;
            }
        }

        & > .current {
            color: $gray-000;
            background-color: $red-500;
            font-weight: bold;
            cursor: default;

            &:hover {
                background-color: $red-500;
            }
        }

        & > .first::after {
            content: "...";
        }

        & > .last::before {
            content: "...";
        }
    }
}
</style>
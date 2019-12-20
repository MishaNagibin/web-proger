<template>
    <section class="c-courses">
        <section class="courses">
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
        </section>
        <section
            v-if="listCourses.length > 10"
            class="pagination"
        >
            <span
                v-show="currentPage > 1"
                @click="onPreventClick"
            >
                <span class="icon arrow-back"></span>
            </span>
            <span
                v-if="currentPage > 1"
                @click="setPage(startPage)"
            >{{ startPage }}</span>
            <span class="active">{{ currentPage }}</span>
            <span
                v-if="currentPage < totalPages "
                @click="setPage(totalPages)"
            >{{ totalPages }}</span>
            <span
                v-show="currentPage < totalPages"
                @click="onNextClick"
            >
                <span class="icon arrow-forward"></span>
            </span>
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
            currentPage: 1,
            itemsPerPage: 10,
            resultCount: 0,
            startPage: 1
        };
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
    }
});
</script>

<style lang="scss">
@import "../styles/colors";
@import "../styles/icons";

.c-courses {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > .courses {
        & > div {
            margin: 20px 0;
            background-color: $gray-200;
            display: flex;
            width: 100%;
            max-height: 175px;

            & > a {
                text-decoration: none;
                display: flex;
                align-self: center;
                color: $gray-000;
                position: relative;
                overflow: hidden;
                max-width: 350px;
                min-width: 350px;
                width: 100%;

                & > span {
                    position: absolute;
                    background-color: $red-500;
                    padding: 5px;
                }

                & > img {
                    &:hover {
                        transition: 1s;
                        transform: scale(1.1);
                    }
                }
            }

            & > .info {
                display: flex;
                flex-direction: column;
                margin-left: 20px;
                width: 100%;
                justify-content: space-between;
                min-height: 180px;

                & > h3 {
                    margin: 0;
                }

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
                        margin: 15px 10px 15px 0;
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
                    height: 75px;
                    padding-right: 20px;
                }
            }

            &:hover {
                box-shadow: 0 0 10px 3px $gray-500;
            }
        }
    }

    & > .pagination {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        user-select: none;
        flex-direction: row;
        align-items: center;

        & > div {
            display: flex;
            align-items: center;
            padding: 10px 20px;
        }

        & > span {
            margin: 5px 5px;
            height: 44px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            background-color: $gray-200;
            cursor: pointer;

            & > .icon {
                mask-repeat: no-repeat;
                background-color: $gray-700;
            }

            &:hover {
                background-color: $gray-300;
                cursor: pointer;

                & > .icon {
                    background-color: $red-500;
                }
            }
        }

        & > :first-child,
        & > :last-child {
            padding: 0 10px;
            margin: 0;
        }

        & > .active {
            color: $gray-000;
            background-color: $red-500;
            font-weight: bold;
            cursor: default;

            &:hover {
                background-color: $red-500;
            }
        }
    }
}

@media screen and (max-width: 850px) {
    .c-courses {
        & > .courses {
            display: flex;
            width: 100%;
            flex-flow: wrap;
            justify-content: space-around;

            & > div {
                display: flex;
                flex-direction: column;
                max-width: 250px;
                margin: 10px;
                width: 100%;
                max-height: unset;
                justify-content: space-between;

                & > a {
                    min-width: unset;

                    & > img {
                        max-width: 350px;
                        width: 100%;
                    }
                }

                & > .info {
                    margin-left: unset;
                    align-items: center;
                    text-align: center;

                    & > a {
                        align-self: unset;
                    }

                    & > span {
                        padding: 0 10px;
                    }
                }
            }
        }
    }
}

// @media screen and (max-width: 590px) {
//     .c-courses {
//         & > .courses {
//             overflow: hidden;
//             position: relative;
//             margin: 15px auto;
//             width: 100%;
//             max-width: 1600px;
//             justify-content: unset;
//             flex-flow: nowrap;
//         }
//     }
// }
</style>

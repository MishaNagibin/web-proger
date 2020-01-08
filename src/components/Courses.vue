<template>
    <section
        class="c-courses"
        ref="courses"
    >
        <section
            class="courses"
            ref="courses-cards"
        >
            <div
                v-for="(course, index) of preparedCourses"
                :key="index"
                :style="{ marginLeft: `${itemMargins}px`, marginRight: `${itemMargins}px` }"
            >
                <router-link :to="{ name: 'Course', params: { courseID: course.ID, courseSlug: course.slug } }">
                    <span>{{ course.category }}</span>
                    <img :src="getImgUrl(course.image)" />
                </router-link>
                <div class="info">
                    <h3>{{ course.name }}</h3>
                    <span>{{ course.description }}</span>
                    <router-link :to="{ name: 'Course', params: { courseID: course.ID, courseSlug: course.slug } }">
                        <cButton :buttonText="'Посмотреть'" />
                    </router-link>
                </div>
            </div>
        </section>
        <section
            v-if="isVisible"
            class="action"
        >
            <span @click="onPreventClick">
                <span class="icon arrow-back" />
            </span>
            <span @click="onNextClick">
                <span class="icon arrow-forward" />
            </span>
        </section>
        <section
            v-if="listCourses.length > 10 && !isHome"
            class="pagination"
        >
            <span
                v-show="currentPage > 1"
                @click="onPreventClick"
            >
                <span class="icon arrow-back"></span>
            </span>
            <span
                v-for="(page, index) of pages"
                :key="index"
                :class="{active: page === currentPage}"
                @click="setPage(page)"
            >{{ page }}</span>
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
import { Prop } from "vue/types/options";
import cButton from "@/components/Button.vue";

export default Vue.extend({
    name: "Courses",
    props: {
        listCourses: {
            type: Array as Prop<Courses[]>,
            required: true
        },
        langCourse: {
            type: String,
            default: undefined
        },
        isHome: {
            type: Boolean,
            default: false
        }
    },
    components: { cButton },
    data() {
        return {
            currentPage: 1,
            itemsPerPage: 10,
            startPage: 1,
            capacity: 0,
            itemIndex: 0,
            itemMargins: 0
        };
    },
    computed: {
        resultCount(): number {
            if (this.langCourse !== undefined) {
                return (this.listCourses as Courses[]).filter(
                    n => n.lang === this.langCourse
                ).length;
            }

            return this.listCourses.length;
        },
        isVisible(): boolean {
            return (this.listCourses || []).length > this.capacity;
        },
        preparedCourses(): Courses[] {
            const screenWidth = window.screen.width;
            let start, end;
            const lastCourses = this.listCourses.map(c => ({ ...c })).reverse();

            if (screenWidth <= 590) {
                start = this.itemIndex;
                end = this.isHome
                    ? lastCourses.length
                    : this.listCourses.length;
            } else {
                start =
                    this.currentPage * this.itemsPerPage - this.itemsPerPage;
                end = start + this.itemsPerPage;
            }

            if (this.langCourse !== undefined) {
                return (this.listCourses as Courses[])
                    .filter(n => n.lang === this.langCourse)
                    .slice(start, end);
            }

            return this.isHome
                ? lastCourses.slice(start, 5)
                : this.listCourses.slice(start, end);
        },
        totalPages(): number {
            return Math.ceil(this.resultCount / this.itemsPerPage);
        },
        pages(): number[] {
            const start = this.currentPage > 2 ? this.currentPage - 3 : 0;
            const end = this.currentPage > 2 ? this.currentPage + 2 : 5;
            const pages = [];
            for (let i = 1; i <= this.totalPages; i++) {
                pages.push(i);
            }

            return pages.slice(start, end);
        }
    },
    mounted() {
        const screenWidth = window.screen.width;
        if (screenWidth <= 590) {
            window.addEventListener("resize", this.onResize);
            this.onResize();
        }
    },
    watch: {
        listCourses(n: Courses[]) {
            if (n.length < 1) {
                return;
            }
            const screenWidth = window.screen.width;
            if (screenWidth <= 590) {
                this.onResize();
            }
        }
    },
    methods: {
        onResize() {
            const courses = this.$refs["courses"];
            const items = this.$refs["courses-cards"] as HTMLElement;
            const clientWidth = (courses as HTMLElement).clientWidth;

            this.$nextTick(() => {
                const itemWidth = (
                    (items.children[0] as HTMLElement) || ({} as HTMLElement)
                ).offsetWidth;
                let capacity = Math.floor(clientWidth / itemWidth);
                let itemMargins =
                    (clientWidth - capacity * itemWidth) / (capacity * 2);

                if (itemMargins < 4) {
                    capacity--;
                    itemMargins =
                        (clientWidth - capacity * itemWidth) / (capacity * 2);
                }

                this.capacity = capacity;
                this.itemMargins = itemMargins;
            });
        },
        getImgUrl(image: string) {
            return require("@/assets/images/" + image);
        },
        setPage(pageNumber: number) {
            this.currentPage = pageNumber;
        },
        onPreventClick() {
            const screenWidth = window.screen.width;
            if (screenWidth <= 590) {
                this.itemIndex--;

                if (this.itemIndex < 0) {
                    this.itemIndex = 0;
                }
            } else {
                this.currentPage--;
            }
        },
        onNextClick() {
            const screenWidth = window.screen.width;
            if (screenWidth <= 590) {
                if (this.preparedCourses.length > 1) {
                    this.itemIndex++;
                }
            } else {
                this.currentPage++;
            }
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

    & > .action {
        display: none;
    }

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
                }

                & > span {
                    margin-bottom: 10px;
                    overflow: hidden;
                    height: 75px;
                    padding-right: 20px;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    display: -webkit-box;
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
                        width: 100%;

                        & > .c-button {
                            width: 100%;

                            & > button {
                                margin: 0;
                                width: 100%;
                                border-radius: 0;
                            }
                        }
                    }

                    & > span {
                        padding: 0 10px;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 590px) {
    .c-courses {
        overflow: hidden;

        & > .pagination {
            display: none;
        }

        & > .action {
            display: flex;

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
        }

        & > .courses {
            position: relative;
            margin: 15px auto;
            width: unset;
            flex-flow: row nowrap;

            & > div {
                width: 200px;
                max-width: unset;
            }
        }
    }
}
</style>

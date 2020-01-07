<template>
    <main class="v-course">
        <section v-if="course">
            <section class="content">
                <h1>{{ course.name }}</h1>
                <span class="description">{{ course.description }}</span>
                <div class="video">
                    <h1>Видео курса</h1>
                    <div :class="{ 'player-resize': isPlayerResize }">
                        <div class="player">
                            <iframe
                                :src="video"
                                allowfullscreen
                                frameborder="0"
                            ></iframe>
                        </div>
                        <div :class="['list', { 'list-resize': isPlayerResize }]">
                            <div
                                v-for="(lesson, index) of course.lessons"
                                :key="index"
                                :class="['item', { active: lessonActive === lesson.ID }]"
                                @click="setVideo(lesson.link, lesson.ID)"
                            >
                                <span>Урок {{ lesson.ID }}</span>
                                <span>{{ lesson.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <span @click="playerResize">
                    <cButton :buttonText=" isPlayerResize ? 'Плеер не на всю ширину' : 'Плеер на всю ширину'" />
                </span>
            </section>
        </section>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Courses } from "@/modeles";
import { COURSES } from "@/store/actions";
import api from "@/api";
import cButton from "@/components/Button.vue";

export default Vue.extend({
    name: "Course",
    props: {
        courseID: {
            type: Number,
            required: true,
            default: undefined
        },
        courseSlug: {
            type: String,
            required: true,
            default: undefined
        }
    },
    components: { cButton },
    data() {
        return {
            course: {} as Courses | undefined,
            isPlayerResize: false,
            video: "",
            lessonActive: 1
        };
    },
    watch: {
        $route() {
            this.getCourse();
            this.getVideo();
        },
        course() {
            this.updatedBreadcrumbs();
        }
    },
    computed: {
        courses(): Courses[] {
            return this.$store.state.courses.courses || [];
        }
    },
    created() {
        if (this.$store.state.courses.courses === undefined) {
            this.$store.dispatch(COURSES.GET).then(() => {
                this.getCourse();
                this.getVideo();
            });
        }
        this.getCourse();
        this.getVideo();
        this.updatedBreadcrumbs();
    },
    methods: {
        updatedBreadcrumbs() {
            if (this.course) {
                this.$set(this.$route.meta.breadcrumbs, 2, {
                    name: this.course.category,
                    routeName: this.course.category
                });
                this.$set(this.$route.meta.breadcrumbs, 3, {
                    name: this.course.name
                });
            }
        },
        setVideo(link: string, ID: number) {
            this.video = link;
            this.lessonActive = ID;
        },
        getCourse() {
            this.course = this.courses.find(c => c.ID === this.courseID);
        },
        getVideo() {
            if (this.course) {
                this.video = this.course.lessons[0].link;
            }
        },
        playerResize() {
            this.isPlayerResize = !this.isPlayerResize;
        }
    }
});
</script>

<style lang="scss">
@import "../../styles/colors";

.v-course {
    & > section {
        max-width: 1600px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 20px;

        & > .content {
            background-color: $gray-200;
            border-radius: 4px;
            padding: 10px;
            margin: 20px 0;

            & > .video {
                display: flex;
                flex-direction: column;
                text-align: center;
                margin-bottom: 20px;

                & > div {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    & > .list {
                        display: flex;
                        flex-direction: column;
                        max-height: 480px;
                        overflow-y: auto;
                        margin-left: 20px;
                        width: 50%;

                        & > .item {
                            display: flex;
                            flex-direction: column;
                            border-bottom: 1px solid black;
                            padding: 10px 0;

                            & > span {
                                text-align: start;
                            }

                            & > :first-child {
                                color: $gray-800;
                            }

                            & > :last-child {
                                font-weight: bold;
                            }

                            &:hover {
                                cursor: pointer;

                                & > span {
                                    color: $red-500;
                                }
                            }
                        }

                        & > .active {
                            & > :first-child {
                                color: $red-500;
                            }

                            & > :last-child {
                                color: $red-500;
                            }
                        }
                    }

                    & > .list-resize {
                        width: 100%;
                        margin-left: unset;
                    }

                    & > .player {
                        max-height: 600px;
                        height: 480px;
                        width: 100%;

                        & > iframe {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }

                & > .player-resize {
                    flex-direction: column;

                    & > .player {
                        align-self: center;
                    }
                }
            }

            & > span {
                display: flex;
                width: fit-content;
            }
        }
    }
}

@media screen and (max-width: 850px) {
    .v-course {
        & > section {
            & > .content {
                & > .video {
                    & > div {
                        flex-direction: column;

                        & > .player {
                            align-self: center;
                        }

                        & > .list {
                            width: 100%;
                            margin-left: unset;
                        }
                    }
                }

                & > span {
                    & > .c-button {
                        display: none;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 600px) {
    .v-course {
        & > section {
            & > .content {
                & > .video {
                    & > div {
                        & > .player {
                            height: 360px;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 400px) {
    .v-course {
        & > section {
            & > .content {
                & > .video {
                    & > div {
                        & > .player {
                            height: 270px;
                        }
                    }
                }
            }
        }
    }
}
</style>

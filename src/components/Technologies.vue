<template>
    <section
        class="c-technologies"
        ref="technologies"
    >
        <section
            class="technologies"
            ref="technologies-cards"
        >
            <div
                v-for="(technology, index) of preparedTechnologies"
                :key="index"
                :style="{ marginLeft: `${itemMargins}px`, marginRight: `${itemMargins}px` }"
            >
                <router-link :to="{ name: 'Technology', params: { technologyID: technology.ID, technologySlug: technology.slug } }">
                    <img :src="getImgUrl(technology.image)" />
                </router-link>
                <div class="info">
                    <span>{{ technology.description }}</span>
                    <router-link :to="{ name: 'Technology', params: { technologyID: technology.ID, technologySlug: technology.slug } }">
                        <cButton :buttonText="'Читать'" />
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
            v-if="listTechnologies.length > 10"
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
import { Prop } from "vue/types/options";
import { Technologies } from "@/modeles";
import cButton from "@/components/Button.vue";

export default Vue.extend({
    name: "Technologies",
    props: {
        listTechnologies: {
            type: Array as Prop<Technologies[]>,
            required: true
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
            return this.listTechnologies.length || 0;
        },
        isVisible(): boolean {
            return (this.listTechnologies || []).length > this.capacity;
        },
        preparedTechnologies(): Technologies[] {
            const screenWidth = window.screen.width;
            let start, end;

            if (screenWidth <= 590) {
                start = this.itemIndex;
                end = this.listTechnologies.length;
            } else {
                start =
                    this.currentPage * this.itemsPerPage - this.itemsPerPage;
                end = start + this.itemsPerPage;
            }

            return this.listTechnologies.slice(start, end);
        },
        totalPages(): number {
            return Math.ceil(this.resultCount / this.itemsPerPage);
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
        listTechnologies(n: Technologies[]) {
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
            const technologies = this.$refs["technologies"];
            const items = this.$refs["technologies-cards"] as HTMLElement;
            const clientWidth = (technologies as HTMLElement).clientWidth;

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
                if (this.preparedTechnologies.length > 1) {
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

.c-technologies {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > .action {
        display: none;
    }

    & > .technologies {
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
            background-color: $gray-200;

            & > a {
                text-decoration: none;
                display: flex;
                align-self: center;
                color: $gray-000;
                position: relative;
                overflow: hidden;
                max-width: 350px;
                width: 100%;

                & > span {
                    position: absolute;
                    background-color: $red-500;
                    padding: 5px;
                }

                & > img {
                    max-width: 350px;
                    width: 100%;

                    &:hover {
                        transition: 1s;
                        transform: scale(1.1);
                    }
                }
            }

            & > .info {
                display: flex;
                flex-direction: column;
                width: 100%;
                justify-content: space-between;
                min-height: 180px;
                margin-left: unset;
                align-items: center;
                text-align: center;

                & > h3 {
                    margin: 0;
                }

                & > a {
                    display: flex;
                    align-self: flex-end;
                    text-decoration: none;
                    width: 100%;

                    & > .c-button {
                        width: 100%;

                        & > button {
                            margin: 0;
                            border-radius: 0;
                            width: 100%;
                        }
                    }
                }

                & > span {
                    overflow: hidden;
                    height: 95px;
                    padding: 0 10px;
                    align-self: center;
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

@media screen and (max-width: 590px) {
    .c-technologies {
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

        & > .technologies {
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

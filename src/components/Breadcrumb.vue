<template>
    <section class="c-breadcrumb">
        <ul>
            <li
                v-for="(breadcrumb, index) of breadcrumbList"
                :key="index"
            >
                <span class="arrow">→</span>
                <span
                    @click="routeTo(index)"
                    :class="{ linked: breadcrumb.link }"
                >{{ breadcrumb.name }}</span>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import Vue from "vue";

interface Breadcrumb {
    name: string;
    link: string;
}

export default Vue.extend({
    name: "Breadcrumb",
    data() {
        return {
            breadcrumbList: [] as Breadcrumb[]
        };
    },
    mounted() {
        this.updateList();
    },
    watch: {
        $route() {
            this.updateList();
        }
    },
    methods: {
        routeTo(pRouteTo: number) {
            if (this.breadcrumbList[pRouteTo].link) {
                this.$router.push({ name: this.breadcrumbList[pRouteTo].link });
            }
        },
        updateList() {
            this.breadcrumbList = this.$route.meta.breadcrumb;
        }
    }
});
</script>

<style lang="scss">
@import "../styles/colors";

.c-breadcrumb {
    display: flex;
    margin-top: 20px;

    & > ul {
        display: flex;
        user-select: none;
        padding: 0;
        margin: 0;

        & > li {
            margin-right: 20px;
            display: inline-block;

            &:first-child {
                height: 39px;
                display: flex;
                align-items: center;

                & > .arrow {
                    display: none;
                }

                & > span {
                    margin-top: 6px;
                }
            }

            & > .arrow {
                margin-top: -10px;
                margin-right: 20px;
                font-size: 26px;
                cursor: default;
            }

            & > .linked {
                cursor: pointer;

                &:hover {
                    color: $red-500;
                }
            }
        }
    }
}
</style>
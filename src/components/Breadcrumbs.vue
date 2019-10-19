<template>
    <section
        v-if="$route.name !== 'Home'"
        class="c-breadcrumbs"
    >
        <ul>
            <li
                v-for="(b, i) of breadcrumbs"
                :key="i"
            >
                <span class="arrow">→</span>
                <span
                    :class="{ linked: b.routeName }"
                    @click="routeTo(i)"
                >{{ b.name }}</span>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Breadcrumbs } from "@/modeles";

export default Vue.extend({
    name: "Breadcrumbs",
    data() {
        return {
            breadcrumbs: [] as Breadcrumbs[]
        };
    },
    created() {
        this.breadcrumbs = this.$route.meta.breadcrumbs;
    },
    watch: {
        $route() {
            this.breadcrumbs = this.$route.meta.breadcrumbs;
        }
    },
    methods: {
        routeTo(pRouteTo: number) {
            if (this.breadcrumbs[pRouteTo].routeName) {
                this.$router.push({
                    name: this.breadcrumbs[pRouteTo].routeName
                });
            }
        }
    }
});
</script>

<style lang="scss" scoped>
@import "../styles/colors";

.c-breadcrumbs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    max-width: 1600px;
    padding: 0 20px;
    margin: 20px 0 0 0;

    & > ul {
        display: flex;
        user-select: none;
        padding: 0;
        margin: 0;

        & > li {
            margin-right: 10px;
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
                margin-right: 10px;
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
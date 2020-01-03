<template>
    <main class="v-technology">
        <section v-if="technology">
            <section class="content">
                <h1>{{ technology.name }}</h1>
                <span class="description">{{ technology.description }}</span>
            </section>
        </section>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Technologies } from "@/modeles";
import { TECHNOLOGIES } from "@/store/actions";
import api from "@/api";
import cButton from "@/components/Button.vue";

export default Vue.extend({
    name: "Technology",
    props: {
        technologyID: {
            type: Number,
            required: true,
            default: undefined
        },
        technologySlug: {
            type: String,
            required: true,
            default: undefined
        }
    },
    components: { cButton },
    data() {
        return {
            technology: {} as Technologies | undefined
        };
    },
    watch: {
        $route() {
            this.getTechnology();
        },
        technology() {
            this.updatedBreadcrumbs();
        }
    },
    computed: {
        technologies(): Technologies[] {
            return this.$store.state.technologies.technologies || [];
        }
    },
    created() {
        if (this.$store.state.technologies.technologies === undefined) {
            this.$store.dispatch(TECHNOLOGIES.GET).then(() => {
                this.getTechnology();
            });
        }
        this.getTechnology();
        this.updatedBreadcrumbs();
    },
    methods: {
        updatedBreadcrumbs() {
            if (this.technology) {
                this.$set(this.$route.meta.breadcrumbs, 2, {
                    name: this.technology.name
                });
            }
        },
        getTechnology() {
            this.technology = this.technologies.find(
                c => c.ID === this.technologyID
            );
        }
    }
});
</script>

<style lang="scss">
@import "../../styles/colors";

.v-technology {
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
        }
    }
}
</style>

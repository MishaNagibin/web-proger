<template>
    <main class="v-vue">
        <router-view />
        <section
            v-show="$route.name === 'Frontend'"
            class="container"
        >
            <cCategoriesFilter />
        </section>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import cCategoriesFilter from "@/components/CategoriesFilter.vue";

export default Vue.extend({
    name: "Vue",
    components: { cCategoriesFilter },
    mounted() {
        this.$root.$emit("category", "Frontend");
    }
});
</script>

<style lang="scss">
@import "../../styles/colors";
@import "../../styles/icons";

.v-frontend {
    & > .container {
        max-width: 1600px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 20px;
    }
}
</style>
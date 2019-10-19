<template>
    <main class="v-backend">
        <router-view />
        <section
            v-show="$route.name === 'Backend'"
            class="container"
        >
            <cCategoriesBackendFilter :category="'Backend'" />
        </section>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import cCategoriesBackendFilter from "@/components/CategoriesBackendFilter.vue";

export default Vue.extend({
    // TODO: переписать раздел как фронт
    name: "Backend",
    components: { cCategoriesBackendFilter }
});
</script>

<style lang="scss">
@import "../../styles/colors";
@import "../../styles/icons";

.v-backend {
    & > .container {
        max-width: 1600px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 20px;
    }
}
</style>

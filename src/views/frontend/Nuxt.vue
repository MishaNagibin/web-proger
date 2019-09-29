<template>
    <main class="v-nuxt">
        <section class="container">
            <cBreadcrumb />
            <cCoursesFrontendFilter />
        </section>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import cCoursesFrontendFilter from "@/components/CoursesFrontendFilter.vue";
import cBreadcrumb from "@/components/Breadcrumb.vue";

export default Vue.extend({
    name: "Nuxt",
    components: { cCoursesFrontendFilter, cBreadcrumb },
    mounted() {
        this.$root.$emit("lang", "Nuxt");
    }
});
</script>

<style lang="scss">
@import "../../styles/colors";
@import "../../styles/icons";

.v-nuxt {
    & > .container {
        max-width: 1600px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 20px;
    }
}
</style>
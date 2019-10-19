<template>
    <main class="v-slim">
        <section class="container">
            <cCoursesBackendFilter :lang="'Slim'" />
        </section>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import cCoursesBackendFilter from "@/components/CoursesBackendFilter.vue";

export default Vue.extend({
    name: "Slim",
    components: { cCoursesBackendFilter }
});
</script>

<style lang="scss">
@import "../../styles/colors";
@import "../../styles/icons";

.v-slim {
    & > .container {
        max-width: 1600px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 20px;
    }
}
</style>

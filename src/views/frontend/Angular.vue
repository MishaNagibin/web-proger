<template>
    <main class="v-angular">
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
    name: "Angular",
    components: { cCoursesFrontendFilter, cBreadcrumb },
    mounted() {
        this.$root.$emit("lang", "Angular");
    }
});
</script>

<style lang="scss">
@import "../../styles/colors";
@import "../../styles/icons";

.v-angular {
    & > .container {
        max-width: 1600px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 20px;
    }
}
</style>
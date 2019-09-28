<template>
    <main class="v-jquery">
        <section class="container">
            <cCoursesFrontendFilter />
        </section>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import cCoursesFrontendFilter from "@/components/CoursesFrontendFilter.vue";

export default Vue.extend({
    name: "JQuery",
    components: { cCoursesFrontendFilter },
    mounted() {
        this.$root.$emit("lang", "JQuery");
    }
});
</script>

<style lang="scss">
@import "../../styles/colors";
@import "../../styles/icons";

.v-jquery {
    & > .container {
        max-width: 1600px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 20px;
    }
}
</style>
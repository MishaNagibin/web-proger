<template>
    <main class="v-ruby-on-rails">
        <section class="container">
            <cBreadcrumb />
            <cCoursesBackendFilter />
        </section>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import cCoursesBackendFilter from "@/components/CoursesBackendFilter.vue";
import cBreadcrumb from "@/components/Breadcrumb.vue";

export default Vue.extend({
    name: "RubyOnRails",
    components: { cCoursesBackendFilter, cBreadcrumb },
    mounted() {
        this.$root.$emit("lang", "RubyOnRails");
    }
});
</script>

<style lang="scss">
@import "../../styles/colors";
@import "../../styles/icons";

.v-ruby-on-rails {
    & > .container {
        max-width: 1600px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 20px;
    }
}
</style>
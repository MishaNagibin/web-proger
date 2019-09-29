<template>
    <div id="app">
        <cTopNavigationBar />
        <cHeader />
        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import cTopNavigationBar from "@/components/TopNavigationBar.vue";
import cHeader from "@/components/Header.vue";

export default Vue.extend({
    name: "app",
    components: { cTopNavigationBar, cHeader }
});
</script>

<style lang="scss">
@import "./styles/colors";

#app {
    transition: opacity 0.5s ease;
    min-height: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    overflow: auto;
}

html {
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $gray-900;
}

body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: "Fira Sans Condensed", sans-serif;
    font-size: 1em;
    line-height: 1.5;
    overflow: hidden;

    ::-webkit-scrollbar {
        width: 7px;
    }

    ::-webkit-scrollbar-track {
        background-color: $gray-000;
    }

    ::-webkit-scrollbar-thumb {
        background-color: $gray-700;
        border-radius: 3px;
    }
}
</style>

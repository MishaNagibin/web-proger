<template>
    <section class="c-button">
        <button>{{ buttonText }}</button>
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop } from "vue/types/options";

export default Vue.extend({
    name: "Button",
    props: {
        buttonText: {
            type: String
        }
    }
});
</script>

<style lang="scss">
@import "../styles/colors";

.c-button {
    button {
        border: 1px solid $red-500;
        outline: none;
        user-select: none;
        cursor: pointer;
        background: $red-500;
        margin: 15px 10px 15px 0;
        border-radius: 4px;
        padding: 0 16px;
        color: $gray-000;
        height: 40px;

        &:hover {
            background: $red-400;
        }

        &:active {
            background: $red-600;
        }

        &:focus {
            box-shadow: 0 0 0 2px rgba(63, 81, 181, 0.15);
        }
    }
}
</style>
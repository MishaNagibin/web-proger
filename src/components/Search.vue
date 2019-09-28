<template>
    <section class="c-search">
        <input placeholder="Введите название курса" />
        <button>Найти</button>
    </section>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
@import "../styles/colors";

.c-search {
    display: flex;

    & > input {
        border: 2px solid $red-500;
        border-right: 0;
        border-radius: 4px 0 0 4px;
        padding: 0 14px;
        font-size: 16px;
        width: 100%;
        height: 42px;
        outline: none;
        color: #000;
        transition: 0.2s;

        &:hover {
            border-color: $red-400;
        }

        &:active {
            border-color: $red-600;
        }

        &:focus {
            box-shadow: 0 0 0 2px rgba(63, 81, 181, 0.15);
        }
    }

    & > button {
        display: flex;
        align-items: center;
        border: 1px solid $red-500;
        outline: none;
        user-select: none;
        cursor: pointer;
        background: $red-500;
        margin-right: 20px;
        transition: 0.2s;
        border-radius: 0 4px 4px 0;
        padding: 0 16px;
        color: $gray-000;

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
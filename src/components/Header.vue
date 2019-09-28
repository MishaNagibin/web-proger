<template>
    <header>
        <section class="container">
            <router-link :to="{ name: 'Home' }">
                <span>WP</span> Web-Proger
            </router-link>
            <cSearch></cSearch>
            <section class="login">
                <router-link :to="{ name: 'Login' }">
                    <span class="icon user"></span>
                    <span>Войти в аккаунт</span>
                </router-link>
            </section>
        </section>
    </header>
</template>

<script lang="ts">
import Vue from "vue";
import cSearch from "@/components/Search.vue";

export default Vue.extend({
    name: "cHeader",
    components: { cSearch }
});
</script>

<style lang="scss">
@import "../styles/colors";
@import "../styles/icons";

header {
    width: 100%;
    display: flex;
    position: sticky;
    z-index: 999;
    top: 0;
    background-color: rgba(255, 255, 255, 0.8);
    box-sizing: border-box;

    & > .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        width: 100%;
        margin: 0 20px 20px 20px;

        & > a {
            color: $red-500;
            text-decoration: none;
            font-weight: 900;
            font-size: 30px;
            font-style: italic;
            white-space: nowrap;
            margin-right: 20px;
            display: flex;
            height: 60px;
            align-items: center;

            & > span {
                font-style: italic;
                width: 60px;
                height: 60px;
                background-color: $red-500;
                color: $gray-000;
                border-radius: 50%;
                display: flex;
                align-items: center;
            }
        }

        & > .c-search {
            flex-grow: 1;
        }

        & > .login {
            & > a {
                display: flex;
                align-items: center;
                text-decoration: none;
                color: $gray-800;

                &:hover {
                    & > .icon {
                        background-color: $red-500;
                    }
                }

                & > .icon {
                    width: 30px;
                    height: 30px;
                    mask-repeat: no-repeat;
                }
            }
        }
    }
}
</style>
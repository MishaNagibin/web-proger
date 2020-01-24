<template>
    <main class="login-or-registration">
        <div>
            <div>
                <button
                    :class="{ active: isLogin }"
                    @click="onLoginClick"
                >Авторизация</button>
                <button
                    :class="{ active: !isLogin }"
                    @click="onRegistrationClick"
                >Регистрация</button>
            </div>
            <form
                v-if="isLogin"
                @submit.prevent="onSubmit"
            >
                <label>
                    <span>Email</span>
                    <input
                        v-model.trim="email"
                        required
                        type="email"
                    />
                </label>
                <label>
                    <span>Пароль</span>
                    <input
                        v-model.trim="password"
                        required
                        type="password"
                    />
                </label>
                <button
                    class="active"
                    type="submit"
                >{{ buttonText }}</button>
            </form>
            <form
                v-else
                @submit.prevent="onSubmit"
            >
                <label>
                    <span>Email</span>
                    <input
                        v-model.trim="newEmail"
                        required
                        type="email"
                    />
                </label>
                <label>
                    <span>Пароль</span>
                    <input
                        v-model.trim="newPassword"
                        required
                        type="password"
                    />
                </label>
                <button
                    class="active"
                    type="submit"
                >{{ buttonText }}</button>
            </form>
        </div>
    </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "LoginOrRegistration",
    data() {
        return {
            buttonText: "",
            isLogin: undefined as boolean | undefined,
            email: "",
            password: "",
            newEmail: "",
            newPassword: ""
        };
    },
    watch: {
        isLogin() {
            this.$set(this.$route.meta.breadcrumbs, 1, {
                name: this.isLogin ? "Авторизация" : "Регистрация"
            });
        }
    },
    created() {
        this.isLogin = this.$route.params.mode === "login";
        this.buttonText = this.isLogin ? "Авторизоваться" : "Зарегистрироваться";
    },
    methods: {
        onLoginClick() {
            this.buttonText = "Авторизоваться";
            this.isLogin = true;
            this.$router.push({
                name: "LoginOrRegistration",
                params: { mode: "login" }
            });
        },
        onRegistrationClick() {
            this.buttonText = "Зарегистрироваться";
            this.isLogin = false;
            this.$router.push({
                name: "LoginOrRegistration",
                params: { mode: "registration" }
            });
        },
        onSubmit() {
            console.log(this.email, this.password);
        }
    }
});
</script>

<style lang="scss">
@import "../../styles/colors";

.login-or-registration {
    display: flex;
    margin: auto;

    & > div {
        padding: 20px;
        background: $gray-200;
        display: flex;
        flex-direction: column;

        & button {
            padding: 15px;
            outline: none;
            user-select: none;
            cursor: pointer;
            border: 1px solid $gray-300;
            background: $gray-300;
            width: 120px;
        }

        & .active {
            background: $red-500;
            color: $gray-000;
        }

        & > div {
            display: flex;
            margin-bottom: 20px;
        }

        & > form {
            & > label {
                display: flex;
                flex-direction: column;

                & > input {
                    border-radius: 4px;
                    outline: none;
                    box-sizing: border-box;
                    overflow-x: hidden;
                    text-overflow: ellipsis;
                    transition: 0.2s;
                    margin: 0;
                    height: 34px;
                    padding: 0 12px;
                    font-size: 14px;
                    border: 1px solid #e7e7ea;
                    margin-bottom: 20px;
                }
            }
            & > button {
                width: 100%;
            }
        }
    }
}
</style>

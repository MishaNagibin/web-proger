<template>
    <section class="c-footer-mobile">
        <section :class="['side-bar', { opened: isOpened }]">
            <section
                class="overlay"
                @click="onOverlayClick"
            ></section>
            <section class="navigation">
                <section class="profile">
                    <section class="avatar">
                        <span class="icon user"></span>
                    </section>
                    <section class="info">
                        <section class="name">Араик Микаелян</section>
                        <section class="phone">+7 (900) 250-62-71</section>
                    </section>
                    <section class="icon logout"></section>
                </section>
                <ul>
                    <li>
                        <router-link :to="{ name: 'Home' }">Мои заказы</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Home' }">Личные данные</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Home' }">Настройки</router-link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <router-link :to="{ name: 'Favorites' }">Избранное</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Pharmacies' }">Адреса аптек</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Help' }">Как сделать заказ</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Articles', params: { sectionName: 'news' } }">Новости</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Vacancy' }">Вакансии</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Pages', params: { slug: 'cooperation' } }">Сотрудничество</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'About' }">О компании</router-link>
                    </li>
                </ul>
            </section>
        </section>
        <ul>
            <li>
                <button @click="onButtonClick">
                    <span
                        ref="burger"
                        :class="['burger', { opened: isOpened }]"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <span>Меню</span>
                </button>
            </li>
            <li>
                <router-link :to="{ name: 'Home' }">
                    <span class="icon home"></span>
                    <span>Главная</span>
                </router-link>
            </li>
            <li :class="{active: $route.name === 'Courses'}">
                <router-link :to="{ name: 'Courses' }">
                    <span class="icon catalog"></span>
                    <span>Курсы</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Technologies' }">
                    <span class="icon technologies"></span>
                    <span>Технологии</span>
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "cFooterMobile",
    // components: {},
    // props: {},
    data() {
        return {
            isOpened: false
        };
    },
    // computed: {},
    watch: {
        $route(to, from) {
            this.closeSideBar();
        }
    },
    // serverPrefetch() {},
    // beforeCreate() {},
    // created() {},
    // beforeMount() {},
    // mounted() {},
    // beforeUpdate() {},
    // updated() {},
    // activated() {},
    // deactivated() {},
    // beforeDestroy() {},
    // destroyed() {},
    methods: {
        onOverlayClick() {
            this.closeSideBar();
        },
        onButtonClick(e: MouseEvent) {
            this.isOpened ? this.closeSideBar() : this.openSideBar();
        },
        openSideBar() {
            this.isOpened = true;
        },
        closeSideBar() {
            this.isOpened = false;
        }
    }
    // render(h) {},
});
</script>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/icons";

.c-footer-mobile {
    display: none;
    justify-content: center;
    position: sticky;
    bottom: 0;
    width: 100%;
    z-index: 9999;
    background-color: $gray-200;
    border-top: 1px solid $gray-400;

    & > .side-bar {
        position: fixed;
        visibility: hidden;
        top: 0;
        width: 100%;
        z-index: 9999;
        height: calc(100% - 54px);

        &.opened {
            visibility: visible;

            & > .overlay {
                background-color: rgba(0, 0, 0, 0.5);
            }
            & > .navigation {
                left: 0;
            }
        }

        & > .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 9998;
            transition: 0.3s;
            background-color: rgba(0, 0, 0, 0);
        }

        & > .navigation {
            position: absolute;
            width: 280px;
            left: -280px;
            z-index: 9999;
            overflow: auto;
            height: 100%;
            transition: 0.3s;
            background-color: #fff;

            & > .profile {
                display: flex;
                align-items: center;
                padding: 20px 20px 20px 10px;

                & > .avatar {
                    flex-basis: 60px;
                    flex-shrink: 0;

                    & > .icon {
                        width: 60px;
                        height: 60px;
                        background: $gray-400;
                    }
                }

                & > .info {
                    display: flex;
                    flex-flow: column nowrap;
                    flex-grow: 1;

                    & > .name {
                        font-weight: bold;
                        font-size: 18px;
                    }

                    & > .phone {
                        color: $gray-800;
                    }
                }

                & > .logout {
                    flex-basis: 24px;
                    flex-shrink: 0;
                    opacity: 0.5;
                    transition: 0.3s;

                    &:hover,
                    &:active {
                        opacity: 0.8;
                    }
                }
            }

            & ul {
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                list-style: none;
                width: 100%;
                margin: 0;
                padding: 10px 0;
                border-top: 1px solid $gray-300;

                & > li {
                    display: flex;
                    align-items: center;

                    & > a {
                        width: 100%;
                        height: 40px;
                        padding: 0 16px;
                        font-size: 16px;
                        color: $gray-800;
                        text-decoration: none;
                        display: flex;
                        align-items: center;

                        &:hover,
                        &:active {
                            color: $primary-500;
                        }
                    }
                }
            }
        }
    }

    & > ul {
        display: flex;
        justify-content: center;
        list-style: none;
        width: 100%;
        height: 54px;
        margin: 0;
        padding: 0;

        & > li {
            display: flex;
            align-items: center;
            justify-content: center;
            width: calc(100% / 5);

            &.active {
                & > a {
                    color: $red-500;

                    & > .icon {
                        background-color: $red-500;
                    }
                }
            }

            & > button {
                display: flex;
                flex-flow: column nowrap;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                font-size: 12px;
                border: 0;
                padding: 0;
                outline: none;
                user-select: none;
                cursor: pointer;
                background: transparent;
                color: $gray-800;
                justify-content: space-around;

                &:hover {
                    background-color: $gray-300;
                    color: $red-500;

                    & > .burger {
                        & > span {
                            background: $red-500;
                        }
                    }
                }

                &:active {
                    background-color: $gray-400;
                }

                .burger {
                    width: 18px;
                    height: 15px;
                    padding-bottom: 9px;
                    transform: rotate(0deg);
                    transition: 0.5s ease-in-out;
                    position: relative;
                    padding: 4px;
                    margin-top: 5px;

                    & > span {
                        display: block;
                        position: absolute;
                        height: 3px;
                        width: 100%;
                        background: $gray-800;
                        border-radius: 9px;
                        opacity: 1;
                        left: 0;
                        transform: rotate(0deg);
                        transition: 0.3s ease-in-out;
                        transform-origin: left center;

                        &:nth-child(1) {
                            top: 1px;
                        }

                        &:nth-child(2) {
                            top: 9px;
                        }

                        &:nth-child(3) {
                            top: 16px;
                        }
                    }

                    &.opened {
                        margin-left: 6px;

                        & > span {
                            &:nth-child(1) {
                                transform: translateY(-1px) translateZ(0)
                                    rotate(42deg);
                            }

                            &:nth-child(2) {
                                width: 0%;
                                opacity: 0;
                            }

                            &:nth-child(3) {
                                transform: translateY(1px) translateZ(0)
                                    rotate(-42deg);
                            }
                        }
                    }
                }
            }

            & > a {
                display: flex;
                flex-flow: column nowrap;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                font-size: 12px;
                color: $gray-800;
                text-decoration: none;
                transition: 0.2s;

                &:hover {
                    background-color: $gray-300;
                    color: $red-500;

                    & > .icon {
                        background-color: $red-500;
                    }
                }

                &:active {
                    background-color: $gray-400;
                }

                & > .icon {
                    padding: 4px;
                }
            }
        }
    }
}

@media screen and (max-width: 850px) {
    .c-footer-mobile {
        display: flex;
    }
}
</style>
